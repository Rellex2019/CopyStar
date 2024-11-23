import React, { useEffect, useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './orders.css';
import img from '../images/0fd3416c.jpeg';


const Orders = ()=>{


    const nav = useNavigate();
    const handleGoBack = (e) => {
        e.preventDefault();
        nav('/');
      };




    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const fetchOrders = async ()=>{
        try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
        const respone = await axios.get('http://localhost:8000/api-samohod/order');
            setOrders(respone.data.content.reverse());
        }
        catch(e){
            console.log('error', e);
        }
    }
    fetchOrders();
}, [])

    const handleClick = async(e)=>{
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
        const respone = await axios.delete(`http://localhost:8000/api-samohod/order/${e.target.value}`);
        window.location.reload();
    }

let numberOrder = 1;

    return(
            <div class="container py-3">
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center" >
                    <div class="name_block">Ваши заказы</div>
                </div>
                {orders.map(order=>
                    <>
                    <div class="flex_wrapp" id="ho">
                        
                        <h2 class="w-100">Заказ № 000{order.id}  <br />Статус: {order.status=='new'?'Новое': order.status=='confirm'?'Подтверждено':order.status=='reject'?'Отклонено':''}</h2>
                        {order.status=='new'?<button value={order.id} onClick={handleClick} style={{  marginRight: '55vw', height: 30, borderRadius:'10px'}}>Удалить заказ</button>:''}
                        {console.log(order)}
                        {order.products.map(order=>
                        <div className="product_block2" key={order.product.id}>
                        <div className="img_block">
                        <img  src={img} className="img_cart" />
                        <div className="flex_dir">
                        <div className="marg_block">
                            <div className="name_product">{order.product.name}</div>
                            <div className="price">{order.product.price}р. &times; {order.order.quantity} шт.</div>

                        </div>
                        </div>

                        </div>

                        </div>
                )}


                        <h2 style={{marginTop:60}} class="w-100">Итоговая стоимость: {order.order_price}р.</h2>
                    </div>



                    </>
                )}



            </div>
    )};
export default Orders;