import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';
import svg_email from '../images/542638-d2d97074.png';
import svg_phone from '../images/327589-f47d17ea.png';
const Login = ({UserProfile})=>{



  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null){
      nav('/');
    }
  },[])



    const [error, setError] = useState();
    const nav = useNavigate();





    const handleGoBack = (e) => {
        e.preventDefault();
        nav('/');
      };

    const [formData, setFormData] = useState([]);
    
      const handleOnChange = (e)=>{
        setFormData(
        {
            ...formData,
            [e.target.name] : e.target.value
        })
        console.log(formData);
      }



      
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
        const response = await axios.post('http://localhost:8000/api-samohod/login', formData);

        const token =response.data.content.user_token;
        localStorage.setItem('userToken', token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const role = await axios.get(`http://localhost:8000/api-samohod/role`);      
        localStorage.setItem('role', role.data);

        nav('/');
        window.location.reload();
        }
        catch(e){
            setError('Неверно введен Email или пароль');

        }
    }



    return(
        <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <meta name="keywords" content="Регистрация​" />
  <meta name="description" content="" />
  <title>login</title>
  <link rel="stylesheet" href="nicepage.css" media="screen" />
  <link rel="stylesheet" href="login.css" media="screen" />
  <meta name="generator" content="Nicepage 7.0.3, nicepage.com" />
  <meta name="referrer" content="origin" />
  <link
    id="u-theme-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
  />
  <meta name="theme-color" content="#478ac9" />
  <meta property="og:title" content="login" />
  <meta property="og:type" content="website" />
  <meta data-intl-tel-input-cdn-path="intlTelInput/" />
 
  <section
    className="u-clearfix u-container-align-center u-section-1"
    id="sec-c2f6"
  >
    <div style={{display:"flex", alignItems:"center"}} className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div style={{width:1300}} className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div
              className="u-container-style u-custom-color-1 u-layout-cell u-radius u-shape-round u-size-23-xl u-size-27-lg u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={500}
            >
              <div className="u-container-layout u-container-layout-1">
                <h2 className="u-align-left u-text u-text-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Авторизация
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </h2>
                <span className="u-align-left u-border-2 u-border-custom-color-2 u-file-icon u-icon u-icon-circle u-text-custom-color-2 u-icon-1">
                  <img src={svg_email} alt="" />
                </span>
                <h4 style={{fontSize:'1.5rem'}} className="u-align-left  u-text-2">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Адрес электронной почты
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </h4>
                <p className="u-align-left u-text u-text-3">
                  <a
                    href="#"
                    className="u-active-none u-border-2 u-border-active-palette-1-light-3 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-1"
                    style={{display:"block",width:200}}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font  style={{ verticalAlign: "inherit", }}>
                                CopyStar@gmail.com
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </a>
                </p>
                <span className="u-align-left u-border-2 u-border-custom-color-2 u-file-icon u-icon u-icon-circle u-text-custom-color-2 u-icon-2">
                  <img src={svg_phone} alt="" />
                </span>
                <h4 className="u-align-left u-text u-text-4">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {" "}
                              Телефон
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </h4>
                <p className="u-align-left u-text u-text-5">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {" "}
                              +7 996 912 15 69
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </p>
              </div>
            </div>
            <div
              className="u-container-align-left u-container-style u-layout-cell u-size-33-lg u-size-37-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={500}
            >
              <div className="u-container-layout u-valign-middle u-container-layout-2">
                <div className="u-form u-form-1">
                  <form
                    onSubmit={handleSubmit}
                    className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                    source="email"
                    name="form"
                    style={{ padding: 10 }}
                  >
                    <div className="u-form-group u-label-top u-form-group-1">
                      <label htmlFor="text-15b9" className="u-label">
                        Логин
                      </label>
                      <input
                        onChange={handleOnChange}
                        type="text"
                        placeholder="Введите логин"
                        id="text-15b9"
                        name="login"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-1"
                        required="required"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-2">
                      <label htmlFor="text-e25e" className="u-label">
                        Пароль
                      </label>
                      <input
                        onChange={handleOnChange}
                        type="password"
                        id="text-e25e"
                        name="password"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2"
                        required="required"
                        placeholder="Введите пароль"
                      />
                    </div>
                    <div className="error" style={{color:'red'}}>{error}</div>
                    <div className="u-align-left u-form-group u-form-submit u-label-top">
                    <button type="submit" className="u-btn u-btn-submit u-button-style u-custom-color-1 u-radius u-btn-2">Вход</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>

        )};
export default Login;