import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../images/DeWatermark.ai_1731670924701.png';
import './nicepage.css';
const Header = ()=>{



  
const [token, setToken] = useState()        
let nav = useNavigate();
useEffect(()=>{
    setToken(localStorage.getItem('userToken'));
},[]);




    const handleClick =async ()=>{   
        axios.defaults.headers.common['Authorization']= `Bearer ${token}`;
        await axios.get('http://localhost:8000/api-samohod/logout');
        localStorage.clear('userToken');
        localStorage.clear('role');
        setToken('');
        // window.location.reload();
        nav('/');
    }

    return(
        <header
        className="u-border-1 u-border-grey-75 u-border-no-left u-border-no-right u-border-no-top u-clearfix u-header u-header"
        id="sec-354d"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <Link
            to="/"
            className="u-image u-logo u-image-1"
            data-image-width={1200}
            data-image-height={1200}
          >
            <img
              src={img}
              className="u-logo-image u-logo-image-1"
            />
          </Link>
          <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
            <div
              className="menu-collapse"
              style={{ fontSize: "1rem", letterSpacing: 0 }}
            >
              <Link
                className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                to="/"
              >
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use xlinkHref="#menu-hamburger" />
                </svg>
                <svg
                  className="u-svg-content"
                  version="1.1"
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect y={1} width={16} height={2} />
                    <rect y={7} width={16} height={2} />
                    <rect y={13} width={16} height={2} />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-unstyled u-nav-1">
                {localStorage.getItem('role')==='admin'?

                                <li className="u-nav-item">
                                <Link
                                  to={'admin'}
                                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                  style={{ padding: "10px 20px" }}
                                >
                                  Админ панель
                                </Link>
                                </li>: null}

                <li className="u-nav-item">
                  <Link
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    to={'/'}
                    style={{ padding: "10px 20px" }}
                  >
                    Главная 
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                  to={'catalog'}
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    style={{ padding: "10px 20px" }}
                  >
                    Каталог
                  </Link>
                </li>

                {token?
                <>
                <li className="u-nav-item">
                <Link
                  to={'cart'}
                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  style={{ padding: "10px 20px" }}
                >
                  Корзина
                </Link>
                </li>
                <li className="u-nav-item">
                <Link
                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  to={"orders"}
                  style={{ padding: "10px 20px" }}
                >
                  Заказы
                </Link>
                </li>

                <li className="u-nav-item">
                <div
                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  onClick={handleClick}
                  style={{ padding: "10px 20px", cursor:"pointer" }}
                >
                  Выход
                </div>
                </li>
                </>

                  :
                <>
                <li className="u-nav-item">
                  <Link
                    to={'login'}
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    style={{ padding: "10px 20px" }}
                  >
                    Авторизация
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    to="registration"
                    style={{ padding: "10px 20px" }}
                  >
                    Регистрация
                  </Link>
                </li>
                </>
                }







              </ul>
            </div>
          </nav>
          <h6 className="u-text u-text-default u-text-1">Copy Star </h6>
        </div>
      </header>
    )
}
export default Header;