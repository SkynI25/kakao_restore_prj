import React, { useState, useEffect } from 'react';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './images/avatar.jpg';
import Axios from "axios";
import './styles/Chat.scss';
import mockTxt from "./utils/mock.txt";

const Chat = () => {

    const [authorTxt, setAuthorTxt] = useState("");

    let modifyTxtFn = (param) => {
      let userTxt = param.regExp(/\d{0,}년\s\d{0,}월\s\d{0,}일\s(오전|오후)\s\d{1,}:\d{1,},/i);
    }

    useEffect(() => {
      Axios(mockTxt).then(res => {
        setAuthorTxt(res.data);
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
              <ul className="chat__messages">
                <span className="chat__timestamp">2022년 4월 15일 금요일</span>
                <li className="incoming-message message">
                  <img src={Avatar} />
                  <div className="message__content">
                    <span className="message__bubble">
                      {authorTxt}
                    </span>
                    <span className="message__author">Friend</span>
                  </div>
                </li>
                <li className="sent-message message">
                  <div className="message__content">
                    <span className="message__bubble">
                      2
                    </span>
                  </div>
                </li>
              </ul>
            </main>
        </div>
    );
};

export default Chat;