import React, { useEffect, useState } from "react";
import img from '../images/0fd3416c.jpeg'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './product.css'

const Product = (props)=>{

    const nav = useNavigate();
    const {id} = useParams();


    const [product, setProduct] = useState({
        'name':'',
        'price':'',
        'description': '',
        'id': ''
});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {



                const response = await axios.get(`http://localhost:8000/api-samohod/product/${id}`);
                setProduct(response.data.content);
                console.log(response.data.content);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleClickCart = async (e)=>{
            
        //ТОКЕН в запрос axios добавление
        const token = localStorage.getItem('userToken');
        if(token)
        {
            axios.defaults.headers.common['Authorization']= `Bearer ${token}`;
        }
        //ТОКЕН

console.log(e.target.value);
const response = await axios.post('http://localhost:8000/api-samohod/cart/'+e.target.value)
nav('/cart');
}


    return(
        <>
        <div className="cont_product_alone_block">
        {loading? <div style={{textAlign:"center"}}>Loading...</div>: 

            <div className="cont_product_alone">
                <div className="cont_product">
                    <div className="first_block"> {product.image?  <img className="first_img" src={`http://127.0.0.1:8000/${product.image}`} alt={product.name} />
                        :<img src={img} alt="Ну нет" className="first_img" />
}</div>
                    <div className="second_block">
                        <div className="name">{product.name}</div>
                        <div className="description">{product.description}</div>
                        <div className="cont_two">
                            <div className="price">{product.price} р.</div>
                            <div style={{marginLeft:50}} className="price">Доступно сейчас: {product.quantity}</div>
                            <div style={{marginLeft:50}} className="price">Тип принтера: {product.categories.charAt(0).toUpperCase() + product.categories.slice(1)}</div>
                            {localStorage.getItem('userToken')?<button type="button" className="btn_prod" value={product.id} onClick={handleClickCart}>Добавить в корзину</button>:''}
                        </div>

                    </div>
                </div>
            </div>
        }
        </div>
        </>
    )
}
export default Product;