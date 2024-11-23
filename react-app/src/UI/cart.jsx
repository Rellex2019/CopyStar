import React, { useEffect, useState } from "react";

import Header from "./header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartAlone from "./cartalone";
import './cart.css';

const Cart = ()=>{

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const [refresh, setRefresh] =useState(1);


    const [summ, setSumm] = useState([]);
    const [totalSumm, setTotalSumm]= useState(0);
    let count = 0;


    const nav = useNavigate();
    const handleGoBack = (e) => {
        e.preventDefault();
        nav('/');
      };



      useEffect(() => {
        const newTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotalSumm(newTotal);
    }, [products]);



      useEffect(()=>{
        const fetchCart = async ()=>{
            try{
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
                const response = await axios.get('http://localhost:8000/api-samohod/cart');
                setProducts(response.data.content);
                console.log(response.data.content)
            }
            catch(error){
                console.error('Error fetching users:', error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchCart();
      },[refresh])


      const handleDelClick = async (e)=>{
        e.preventDefault();
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
            const response = await axios.delete(`http://localhost:8000/api-samohod/cart/${e.target.value}`);
        }
        catch(error){
            console.error('Error fetching cart:', error);
        }
        finally{
            setRefresh(refresh+1);
        }
      }

      const handleClickOrder = async (e)=>{
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        const response = await axios.post(`http://localhost:8000/api-samohod/order`);
        nav('/orders')
      }


    return(
        <>
        <div className="cont_catalog_block">
        <div className="cont_block">
            <div className="name_block">Корзина</div>



                    <div class="flex_box">
                        <div class="summ_end">Стоимость корзины:  {totalSumm}р.</div>
                        <button type="button" class="btn_prod2" onClick={handleClickOrder}>Оформить заказ</button>
                    </div>


            <div className="cont_product_block">
                {loading? <div>Loading...</div>: 

                products.map(product=><>
                    {console.log(product)}
                    <CartAlone summ={setTotalSumm} totalPrice={totalSumm} del = {handleDelClick} id={product.product_id} name={product.name} price={product.price} description={product.description} quantity={product.quantity}/>
                    </>
                )}
            </div>
        </div>
    </div>


            </>

    )
}
export default Cart;

