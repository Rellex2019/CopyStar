import React from "react";
import Header from "./header";
import { useEffect, useState } from "react";
import axios from 'axios'; 
import './index.css';
import './nicepage.css';
import img from '../images/ce38d65eb5923f315f9df9a33e93fc92.jpg';
const Index = ()=>{




        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
 
        useEffect(() => {
            const fetchUsers = async () => {
                try {



                    const response = await axios.get('http://localhost:8000/api-samohod/products');
                    let a = response.data.content.slice(-5);
                    setProducts(a);
                } catch (error) {
                    console.error('Error fetching users:', error);
                } finally {
                    setLoading(false);
                }
            };
 
            fetchUsers();
        }, []);
 
return(

<div class="container py-3">



        <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <meta name="keywords" content="Наши контакты" />
  <meta name="description" content="" />
  <title>Главная</title>
  <link rel="stylesheet" href="nicepage.css" media="screen" />
  <link rel="stylesheet" href="index.css" media="screen" />
  <meta name="generator" content="Nicepage 7.0.3, nicepage.com" />
  <link
    id="u-theme-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
  />
  <link
    id="u-page-google-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i"
  />
  <meta name="theme-color" content="#478ac9" />
  <meta property="og:title" content="Главная" />
  <meta property="og:type" content="website" />
  <meta data-intl-tel-input-cdn-path="intlTelInput/" />
 
  <section className="u-clearfix u-section-1" id="sec-3bde">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-1">
              <div className="u-container-layout u-valign-middle u-container-layout-1">
                <h5 className="u-text u-text-1">добро пожаловать в</h5>
                <h2 className="u-custom-font u-font-ubuntu u-text u-text-2"
                style={{margin:'19px 256px 0 1px'}}>
                  Copy Star{" "}
                </h2>
                <p className="u-text u-text-grey-40 u-text-3"
                style={{margin: '21px 0 0'}}>
                  Ваш надежный источник современных принтеров! <br />
                  Мы предлагаем широкий ассортимент принтеров от ведущих
                  брендов, чтобы удовлетворить все ваши потребности. <br />
                  Наша команда профессионалов готова помочь вам выбрать
                  идеальную модель для дома или офиса.&nbsp;&nbsp;
                </p>
                <a
                  href="#"
                  className="u-border-none u-btn u-btn-round u-button-style u-hover-palette-3-light-2 u-palette-3-base u-radius-50 u-btn-1"
                  style={{padding:'15px 61px 17px 60px'}}
                >
                  Наш каталог{" "}
                </a>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
              <div className="u-container-layout u-valign-top u-container-layout-2">
                <div className="u-shape u-shape-svg u-text-palette-3-base u-shape-1">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="none"
                    viewBox="0 0 160 150"
                    style={{}}
                  >
                    <use xlinkHref="#svg-ee28" />
                  </svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 160 150"
                    x="0px"
                    y="0px"
                    id="svg-ee28"
                  >
                    <path
                      d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
                    />
                  </svg>
                </div>
                <div

                  className="u-image u-image-circle u-image-1"
                  alt=""
                  
                  data-image-width={400}
                  data-image-height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="u-align-center u-clearfix u-container-align-center u-grey-5 u-section-2"
    id="carousel_c664"
  >
    <div className="u-clearfix u-sheet u-valign-top u-sheet-1 ">
      <h3 className="name_block_index">Последнее поступление </h3>
      <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-14 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">





  {products.map(product=>
                <>

                

            <div  key={product.id} className="u-align-center u-container-align-center u-container-style u-layout-cell u-left-cell u-size-12 u-layout-cell-1">
              <div className="u-container-layout u-container-layout-1">
                <div id="jojo" className="u-align-left u-border-1 u-border-grey-75 u-container-align-left u-container-style u-expanded-width u-group u-radius u-shape-round u-group-1">
                  <div className="u-container-layout u-container-layout-2">
                    <img
                      className="u-expanded-width u-image u-image-contain u-image-1"
                      src={img}
                      data-image-width={250}
                      data-image-height={250}
                    />
                    <p className="u-text u-text-2">{product.name.length>30?product.name.slice(0,25)+'...':product.name}</p>
                    <p className="u-small-text u-text u-text-variant u-text-3">
                      {product.price}{" р."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </>
          )
      }   



          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-section-3" id="carousel_f00b">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h3 className="u-text u-text-1">Где нас найти? </h3>
      <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
              <div className="u-container-layout u-container-layout-1">
                <h3 className="u-text u-text-2">Адрес</h3>
                <div className="custom-expanded u-align-left u-container-align-left u-container-style u-grey-5 u-group u-shape-rectangle u-group-1">
                  <div className="u-container-layout u-container-layout-2">
                    <span className="u-icon u-icon-1">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 54.757 54.757"
                        style={{}}
                      >
                        <use xlinkHref="#svg-e83a" />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 54.757 54.757"
                        x="0px"
                        y="0px"
                        id="svg-e83a"
                        style={{ enableBackground: "new 0 0 54.757 54.757" }}
                      >
                        <g>
                          <path
                            d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5
		s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"
                          />
                          <path
                            d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952
		L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4
		C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031
		C45.576,13.08,46.321,24.468,41.099,31.431z"
                          />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-3">
                      Астрахань, ул. Медиков, дом 5{" "}
                    </h5>
                  </div>
                </div>
                <h3 className="u-text u-text-default u-text-4">В сети</h3>
                <div className="custom-expanded u-container-style u-grey-5 u-group u-shape-rectangle u-group-2">
                  <div className="u-container-layout u-container-layout-3">
                    <span className="u-align-left u-icon u-icon-2">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 60 60"
                        style={{}}
                      >
                        <use xlinkHref="#svg-3da3" />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 60 60"
                        x="0px"
                        y="0px"
                        id="svg-3da3"
                        style={{ enableBackground: "new 0 0 60 60" }}
                      >
                        <g>
                          <path
                            d="M42.595,0H17.405C14.977,0,13,1.977,13,4.405v51.189C13,58.023,14.977,60,17.405,60h25.189C45.023,60,47,58.023,47,55.595
		V4.405C47,1.977,45.023,0,42.595,0z M15,8h30v38H15V8z M17.405,2h25.189C43.921,2,45,3.079,45,4.405V6H15V4.405
		C15,3.079,16.079,2,17.405,2z M42.595,58H17.405C16.079,58,15,56.921,15,55.595V48h30v7.595C45,56.921,43.921,58,42.595,58z"
                          />
                          <path
                            d="M30,49c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S32.206,49,30,49z M30,55c-1.103,0-2-0.897-2-2s0.897-2,2-2
		s2,0.897,2,2S31.103,55,30,55z"
                          />
                          <path d="M26,5h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S25.447,5,26,5z" />
                          <path d="M33,5h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S32.447,5,33,5z" />
                          <path
                            d="M56.612,4.569c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c3.736,3.736,3.736,9.815,0,13.552
		c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
		C61.128,16.434,61.128,9.085,56.612,4.569z"
                          />
                          <path
                            d="M52.401,6.845c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c1.237,1.237,1.918,2.885,1.918,4.639
		s-0.681,3.401-1.918,4.638c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
		c1.615-1.614,2.504-3.764,2.504-6.052S54.017,8.459,52.401,6.845z"
                          />
                          <path
                            d="M4.802,5.983c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-4.516,4.516-4.516,11.864,0,16.38
		c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		C1.065,15.799,1.065,9.72,4.802,5.983z"
                          />
                          <path
                            d="M9.013,6.569c-0.391-0.391-1.023-0.391-1.414,0c-1.615,1.614-2.504,3.764-2.504,6.052s0.889,4.438,2.504,6.053
		c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.237-1.237-1.918-2.885-1.918-4.639S7.775,9.22,9.013,7.983C9.403,7.593,9.403,6.96,9.013,6.569z"
                          />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-align-left u-text u-text-5">
                      {" "}
                      +7 996 912 915 69
                    </h5>
                    <span className="u-icon u-icon-3">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 60 60"
                        style={{}}
                      >
                        <use xlinkHref="#svg-9fcb" />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 60 60"
                        x="0px"
                        y="0px"
                        id="svg-9fcb"
                        style={{ enableBackground: "new 0 0 60 60" }}
                      >
                        <g>
                          <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z" />
                          <path d="M42.5,21h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,21,42.5,21z" />
                          <path
                            d="M22.875,18.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,23.901,18.243,24,18.5,24c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,17.943,23.306,17.874,22.875,18.219z"
                          />
                          <path d="M42.5,32h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,32,42.5,32z" />
                          <path
                            d="M22.875,29.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,34.901,18.243,35,18.5,35c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,28.943,23.306,28.874,22.875,29.219z"
                          />
                          <path d="M42.5,43h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,43,42.5,43z" />
                          <path
                            d="M22.875,40.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,45.901,18.243,46,18.5,46c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,39.943,23.306,39.874,22.875,40.219z"
                          />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-6">CopyStar@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
              <div className="u-container-layout u-container-layout-4">
                <h3 className="u-text u-text-7">На карте</h3>
                <div className="custom-expanded u-grey-light-2 u-map u-map-1">
                  <div className="embed-responsive">
                    <iframe
                      className="embed-responsive-item"
                      src="https://maps.google.com/maps?output=embed&q=%D0%90%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%BC%D0%B5%D0%B4%D0%B8%D0%BA%D0%BE%D0%B2%20%D0%B4%D0%BE%D0%BC%205&z=15&t=m"
                      data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIyJUQwJTkwJUQxJTgxJUQxJTgyJUQxJTgwJUQwJUIwJUQxJTg1JUQwJUIwJUQwJUJEJUQxJThDJTJDJTIwJUQxJTgzJUQwJUJCJUQwJUI4JUQxJTg2JUQwJUIwJTIwJUQwJUJDJUQwJUI1JUQwJUI0JUQwJUI4JUQwJUJBJUQwJUJFJUQwJUIyJTIwJUQwJUI0JUQwJUJFJUQwJUJDJTIwNSUyMiUyQyUyMnpvb20lMjIlM0ExNSUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTdE"
                    />
                  </div>
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
    );
}
export default Index;