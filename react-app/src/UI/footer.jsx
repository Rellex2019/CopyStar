import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../images/removal.ai_3c3ce137-3fc7-4232-94b4-de0b823e6e2c-dewatermark-ai_1731670924701.png';

const Footer = ()=>{



    return(
      <>
      <footer style={{width:'100vw', marginTop:'100px',backgroundColor: '#333333', color: "#FFFFFF", display:"flex", justifyContent:"center"}}>
      <div style={{width:1320,display:"flex",flexDirection:"column", alignItems:"center"}}>
        <div className="cont_footer_block" style={{display: "flex"}}>
          <div className="cont_footer" style={{display: "flex", alignItems: "center"}}>
            <a href="#" >
              <img src={img} style={{width:100, height:100 }}/>
            </a>
            <h6 style={{marginTop:50}}>Copy Star </h6>
          </div>
          <div className="cont_flex" style={{display:"flex",marginTop:50, marginLeft:100}}>
            <p class="u-text u-text-2" style={{marginRight:100}}>Астрахань </p>
            <p class="u-text u-text-4" style={{marginRight:100}}>Каталог </p>
            <p class="u-text u-text-5" style={{marginRight:100}}>Где нас найти? </p>
            <p class="u-text u-text-6" style={{marginRight:100}}>О нас </p>
          </div>

        </div>

      <div className="cont1" style={{textAlign:"center",display: 'flex', textAlign: 'center', flexDirection: 'column'}}>
      <p class="u-align-left u-text u-text-3">© 2002 - 2024 Copy Star – поставки оборудования для бизнеса: полиграфического, банковского, презентационного и оргтехники</p>
      <p class="u-text u-text-7"> Политика обработки персональных данных </p>
      </div>

    </div>
    </footer>
    </>
    )
}
export default Footer;