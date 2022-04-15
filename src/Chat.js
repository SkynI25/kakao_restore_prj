import React, { useState, useEffect } from 'react';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './images/avatar.jpg';
import Axios from "axios";
import './styles/Chat.scss';
import mockTxt from "./utils/mock.txt";

const Chat = () => {

    const [chatTxt, setChatTxt] = useState([]);

    let modifyTxtFn = (param) => {
      let txtByDate = param.split(/\d{0,}년\s\d{0,}월\s\d{0,}일\s(?:오전|오후)\s\d{1,}:\d{1,}\r\n/);

      let chatTxt = txtByDate.filter((el, i) => i > 1 ? el : "");

      if(chatTxt) {
        setChatTxt(chatTxt);
      }
    }

    useEffect(() => {
      Axios(mockTxt).then(res => {
        modifyTxtFn(res.data);
      });
    }, []);

    return (
        <div className="Chat">
          <div className="header-wrapper">
              <div className="status-bar">
                <div>
                  <span>18:02</span>
                </div>
              </div>
              <header className="header">
                <div>
                  <h1>Friend</h1>
                </div>
                <div>
                  <span className="header__icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <span className="header__icon">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                </div>
              </header>
            </div>
            <main>
                {
                  chatTxt.map((element, i) => {
                    let date = element.split(",") ? element.split(",")[0] : "";
                    let chatCtnt = element.split(/\d{0,}년\s\d{0,}월\s\d{0,}일\s(?:오전|오후)\s\d{1,}:\d{1,},\s/) ? 
                    element.split(/\d{0,}년\s\d{0,}월\s\d{0,}일\s(?:오전|오후)\s\d{1,}:\d{1,},\s/) : "";

                    return (
                      <ul className="chat__messages">
                        <span className="chat__timestamp">{date}</span>
                        {
                          chatCtnt.filter(el => el).map((el, i) =>
                            el.split(":")[0] != "나" ?
                              (<li key={i} className="incoming-message message">

                                <img src={Avatar} />
                                <div className="message__content">
                                  <span className="message__bubble">
                                    {el.split(":")[1]}
                                  </span>
                                  <span className="message__author">{el.split(":")[0]}</span>
                                </div>
                              </li>)
                            :
                              (<li key={i} className="sent-message message">
                                <div className="message__content">
                                  <span className="message__bubble">
                                    {el.split(":")[1]}
                                  </span>
                                </div>
                               </li>
                              )
                          )
                        }
                      </ul>
                    )
                  })
                }
            </main>
        </div>
    );
};

export default Chat;