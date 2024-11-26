
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import svg_email from '../images/542638-d2d97074.png';
import svg_phone from '../images/327589-f47d17ea.png';
import './login.css';
const Registration = ()=>{
    const nav = useNavigate();
    
    const [formData, setFormData] =  useState([]);
    const [error, setError] = useState();
    const [val, setVal] = useState(false);

useEffect(()=>{
  if(localStorage.getItem('userToken')!==null){
    nav('/');
  }
},[])






    const handleOnChange = (e)=>{
        setFormData({...formData, [e.target.name] : e.target.value})
        console.log(formData);
        if(e.target.name=='password'){
        checkLength(formData.password);
        }
    }
    const checkLength = (password)=>{
        if(!password || password.length < 7){
            setError('Пароль должен быть больше 8 символов');
            setVal(false);
        }
        else{
            setError('');
            setVal(true);
        }
        console.log(formData.password);
    }


    const handleGoBack = (e) => {
        e.preventDefault();
        nav('/');
      };

    const handleReg = async(e)=>{
        e.preventDefault();
        if(val)
        {
        const response = await axios.post('http://localhost:8000/api-samohod/signup', formData);
        const token =response.data.content.user_token;
        localStorage.setItem('userToken', token);
        nav('/')
        }
    }
    return(
<div class="container py-3">


<>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <meta name="keywords" content="Регистрация​" />
  <meta name="description" content="" />
  <title>registration</title>
  <link rel="stylesheet" href="nicepage.css" media="screen" />
  <link rel="stylesheet" href="registration.css" media="screen" />
  <meta name="generator" content="Nicepage 7.0.3, nicepage.com" />
  <meta name="referrer" content="origin" />
  <link
    id="u-theme-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
  />
  <meta name="theme-color" content="#478ac9" />
  <meta property="og:title" content="registration" />
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
                              Регистрация{" "}
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
                <h4 style={{fontSize:'1.5rem'}} className="u-align-left u-text u-text-2">
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
                              <font style={{ verticalAlign: "inherit" }}>
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
                    onSubmit={handleReg}
                    className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                    source="email"
                    name="form"
                    style={{ padding: 10 }}
                  >
                    <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top u-form-group-1">
                      <label htmlFor="name-0c64" className="u-label">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Имя
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </label>
                      <input
                        type="text"
                        placeholder="Введите свое имя"
                        id="name-0c64"
                        name="fio"
                        onChange={handleOnChange}
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-1"
                        required=""
                      />
                    </div>
                    <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top u-form-group-2">
                      <label htmlFor="name-0c64" className="u-label">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Фамилия
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </label>
                      <input
                        type="text"
                        placeholder="Введите свою фамилию"
                        id="name-0c64"
                        name="surname"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2"
                        required=""
                      />
                    </div>
                    <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top">
                      <label htmlFor="name-cf11" className="u-label">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Отчество
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </label>
                      <input
                        type="text"
                        placeholder="Введите свое отчество"
                        id="name-cf11"
                        name="patronymic"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-3"
                        required="required"
                      />
                    </div>
                    <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-top">
                      <label htmlFor="email-cf11" className="u-label">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Электронная почта
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </label>
                      <input
                        type="email"
                        placeholder="Введите действительный адрес электронной почты"
                        id="email-cf11"
                        onChange={handleOnChange}
                        name="email"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-4"
                        required=""
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-5">
                      <label htmlFor="text-15b9" className="u-label">
                        Логин
                      </label>
                      <input
                        type="text"
                        placeholder="Введите логин"
                        onChange={handleOnChange}
                        id="text-15b9"
                        name="login"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-5"
                        required="required"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-6">
                      <label htmlFor="text-e25e" className="u-label">
                        Пароль
                      </label>
                      <input
                        type="text"
                        id="text-e25e"
                        name="password"
                        onChange={handleOnChange}
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-6"
                        required="required"
                        placeholder="Введите пароль"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-7">
                      <label htmlFor="text-d24c" className="u-label">
                        Подтвердите пароль
                      </label>
                      <input
                        type="text"
                        placeholder="Повторите пароль"
                        id="text-d24c"
                        name="password_repeat"
                        onChange={handleOnChange}
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-7"
                        required="required"
                      />
                    </div>
                    <div className="u-form-checkbox u-form-group u-label-top u-form-group-8">
                      <input
                        type="checkbox"
                        id="checkbox-6b6a"
                        name="rules"
                        required
                        defaultValue="On"
                        className="u-field-input"
                      />
                      <label className="u-field-label">
                        Cогласие с правилами регистрации
                      </label>
                        

                    </div>
                    <div className="error" style={{color:'red'}}>{error}</div>
                    <div className="u-align-left u-form-group u-form-submit u-label-top">
                      <button
                        type="submit"
                        className="u-btn u-btn-submit u-button-style u-custom-color-1 u-radius u-btn-2">
                        Зарегестрироваться
                      </button>
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



</div>
    )}
export default Registration;