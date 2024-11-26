import axios from "axios";
import React, { useEffect, useState } from "react";
import img from './0fd3416c.jpeg';
const AdminRequest = ()=>{

    const [orders, setOrders] = useState([]);



    useEffect(()=>{
        const fetchOrders = async ()=>{
        try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
        const respone = await axios.get('http://localhost:8000/api-samohod/admin/order');
            setOrders(respone.data.content.reverse());
        }
        catch(e){
            console.log('error', e);
        }
    }
    fetchOrders();
    }, [])


    const handleChange= async (id, status)=>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        const respone = await axios.patch(`http://localhost:8000/api-samohod/admin/order/change/${id}`, {['status']:status});
    }

    return(
        <div className="cont_admin_product_block">
            <h3>Список заявок</h3>
            <div className="cont_admin_product">
            <table>
                <tr>
                    <td>ID</td>
                    <td>Имя и Фамилия</td>
                    <td>Логин</td>
                    <td>Продукты</td>
                    <td>Сумма заказа</td>
                    <td>Статус</td>
                </tr>
            {orders.map(order=>
                    <>

                    <tr>
                        <td>{order.id}</td>
                        <td>{order.user.fio}</td>
                        <td>{order.user.login}</td>
                        <td>{order.products.map(products=>
                        <a href={`/product/${products.product.id}`}>{products.product.name.slice(0,20)+'...'} &times; {products.order.quantity}<br/></a> 
                        )}</td>
                        <td>{order.order_price} р.</td>
                        <td><select onChange={(e)=>handleChange(order.id, e.target.value)} name="status">
                            <option value={order.status}>{order.status=='new'?'Новое': order.status=='confirm'?'Подтверждено':order.status=='reject'?'Отклонено':''}</option>
                            <option value="confirm">Подтверждено</option>
                            <option value="reject">Отклонено</option>
                        </select></td>
                        
                    </tr>









                    {/* <div class="flex_wrapp" id="ho">
                        
                        <h2 class="w-100">Заказ № 000{order.id}  <br />Статус: {order.status=='new'?'Новое': order.status=='confirm'?'Подтверждено':order.status=='reject'?'Отклонено':''}</h2>
                        {order.status=='new'?<button value={order.id}  style={{  marginRight: '55vw', height: 30, borderRadius:'10px'}}>Удалить заказ</button>:''}
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
                    </div> */}



                    </>
                )}
            </table>
            </div>
        </div>
    )
}
export default AdminRequest;