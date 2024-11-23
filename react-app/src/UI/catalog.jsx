import React from "react";
import './catalog.css';
import img from '../images/0fd3416c.jpeg'
import { useState,useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Catalog = ()=>{
    const nav = useNavigate();
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {



                const response = await axios.get('http://localhost:8000/api-samohod/products');
                setProducts(response.data.content);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);





    const handleClick = async (e) =>{
        e.preventDefault();
        return nav(`/product/${e.target.value}`);
    }

    return(
    <div className="cont_catalog_block">
        <div className="cont_block">
            <div className="name_block">Каталог товаров</div>
            <div className="cont_product_block">
                {loading? <div>Loading...</div>: 

                products.map(product=>
                <>
                {
                product.quantity == 0? null:
                <div className="product_block" key={product.id}>
                    <div className="img_block">
                        <img src={img} className="img_cart" />
                        <div className="flex_dir">
                        <div className="marg_block">
                            <div className="name_product">{product.name.length>40?product.name.slice(0,30)+'...':product.name}</div>
                            <div className="price">{product.price} р.</div>
                        </div>
                        <button className="btn_class" onClick={handleClick} value={product.id}>Подробнее</button>
                        {/* {localStorage.getItem('userToken')?<button type="button" class="w-100 btn btn-lg btn-outline-primary" value={product.id} onClick={handleClickCart}>Добавить в корзину</button>:''} */}
                        </div>

                    </div>

                </div>
                }
                </>
                )
                }   

            </div>
        </div>
    </div>
    )
};

export default Catalog;