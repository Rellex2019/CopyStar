import React, { useEffect, useState } from "react";

import './admin.css';

import Product from "./admin_product";
import StoreProduct from "./admin_store";
import Categories from "./admin_categories";
import Request from "./admin_request";
import Update from "./admin_update";
import { Navigate } from "react-router-dom";
import axios from "axios";
const Admin = ()=>{

      const [role, setRole] = useState();
      const [loading, setLoading] = useState(true);

      const [selectedComponent, setSelectedComponent] = useState('A');
    

      const [idProduct, setIdProduct] = useState();
      // Объект для хранения компонент
      const components = {
        A: Product,
        B: StoreProduct,
        C: Categories,
        D: Request,
        // E: Update(idProduct),
        E: (props) => <Update id={idProduct} {...props} />,
      };
    
      // Функция для выбора компонента
      const handleComponentSelect = (component, id) => {
        setSelectedComponent(component);
        setIdProduct(id);

      };    
    
      const SelectedComponent = selectedComponent ? components[selectedComponent] : null;
    


      useEffect(()=>{
        
        const checkRole = async()=>{
        try{
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
            const roles = await axios.get(`http://localhost:8000/api-samohod/role`);   
            setRole(roles.data);
        }
        catch{

        }
        finally{
          setLoading(false);
        }
            
      }
      checkRole();
    },[])

          if(!loading){
          return localStorage.getItem('role') == role? (
            
            <div className="cont_admin_block">
                <div style={{width:1320 ,display: 'flex' }}>
                <div style={{ width: '270px',paddingBottom:100,paddingTop:50 ,borderRight: '1px solid black' }}>
                    <div className="name-block-page">Админ панель</div>
                    <div>
                        <button className="select-page" onClick={() => handleComponentSelect('A')}>Список продуктов</button>
                        <button className="select-page" onClick={() => handleComponentSelect('B')}>Добавить продукт</button>
                        <button className="select-page" onClick={() => handleComponentSelect('C')}>Добавить, удалить категории</button>
                        <button className="select-page" onClick={() => handleComponentSelect('D')}>Список заявок</button>
                    </div>
                </div>
                <div style={{ marginLeft: '20px', width:'90%' }}>
            
                    {SelectedComponent ? <SelectedComponent changeCom={handleComponentSelect}/> : <div>Пожалуйста, выберите компонент</div>}
                </div>
                </div>
            </div>
          ) : (
              <Navigate to="/404" />
          );
          }

};


export default Admin;