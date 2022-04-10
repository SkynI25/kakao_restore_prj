import React from 'react';
import { faClockFour, faVolumeMute, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './images/avatar.jpg';

const Chat = () => {
    return (
        <div>
          <div className="header-wrapper">
              <div className="status-bar">
                <div className="status-bar__column">
                  <span className="status-bar__clock">18:02 </span>
                </div>
                <div className="status-bar__column">
                  <FontAwesomeIcon icon={faClockFour} />
                  <FontAwesomeIcon icon={faVolumeMute} />
                  <FontAwesomeIcon icon={faWifi} />
                  <span className="status-bar__battey-level">100%</span>
                  <FontAwesomeIcon icon={faBatteryFull} />
                </div>
              </div>
              <header className="header">
                <div className="header__header-column">
                  <h1 className="header__title">Friend</h1>
                </div>
                <div className="header__header-column">
                  <span className="header__icon">
                    <i className="fas fa-search"></i>
                  </span>
                  <span className="header__icon">
                    <i className="fas fa-bars"></i>
                  </span>
                </div>
              </header>
            </div>
            <main className="chat-screen">
              <ul className="chat__messages">
                <span className="chat__timestamp">Friday, January 11, 2019</span>
                <li className="incoming-message message">
                  <img src={Avatar} className="g-avatar message-avatar" />
                  <div className="message__content">
                    <span className="message__bubble">
                      암 쏘우 쏘리 벗 아 러뷰
                    </span>
                    <span className="message__author">Friend</span>
                  </div>
                </li>
                <li className="sent-message message">
                  <div className="message__content">
                    <span className="message__bubble">
                      다 거짓말 이야 몰랐어 이제 알았어 네가 필요해
                    </span>
                  </div>
                </li>
                <li className="incoming-message message">
                  <img src={Avatar} className="g-avatar message-avatar" />
                  <div className="message__content">
                    <span className="message__bubble">
                      암 쏘우 쏘리 벗 아 러뷰
                    </span>
                    <span className="message__author">Friend</span>
                  </div>
                </li>
                <li className="sent-message message">
                  <div className="message__content">
                    <span className="message__bubble">
                      다 거짓말 이야 몰랐어 이제 알았어 네가 필요해
                    </span>
                  </div>
                </li>
              </ul>
            </main>
            <div className="chat__write--container">
              <input
                type="text"
                placeholder="Send message"
                className="chat__write-input"
              />
              <div className="chat__icon-left chat__icon">
                <i className="far fa-plus-square"></i>
              </div>
              <div className="chat__icon-right chat__icon">
                <span className="chat__write-icon">
                  <i className="far fa-smile-wink"></i>
                </span>
                <span className="chat__write-icon">
                  <i className="fas fa-microphone"></i>
                </span>
              </div>
            </div>
        </div>
    );
};

export default Chat;