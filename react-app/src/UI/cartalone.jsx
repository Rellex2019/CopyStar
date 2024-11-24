import axios from "axios";
import React, { useEffect, useState } from "react";
import img from '../images/0fd3416c.jpeg';
import { useNavigate } from "react-router-dom";

const CartAlone = (product)=>{


    const nav = useNavigate();
    const [quantity, setQuantity]= useState(product.quantity);
    const [visible, setVisible] = useState(false);
    const [price, setPrice] = useState(product.price*quantity);
    const [maxQuantity,setMaxQuantity] = useState();
    
      const handlePlus = async(e)=>{
        e.preventDefault();
        if(quantity+1 <= maxQuantity)
        {
        product.summ(product.totalPrice+ price);

        setQuantity(quantity+1);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        const respone =await axios.post(`http://localhost:8000/api-samohod/change`, {'id': product.id_cart, 'quantity': quantity+1});
        }
      }
      const handleMinus = async(e)=>{
        e.preventDefault();



        product.summ(product.totalPrice- price);
        setQuantity(quantity-1);
        if(quantity-1<=0)
        {   
            setVisible(false);
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
            await axios.delete(`http://localhost:8000/api-samohod/cart/${product.id_cart}`);
        }
        else{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        const respone =await axios.post(`http://localhost:8000/api-samohod/change`, {'id': product.id_cart, 'quantity': quantity-1});
        }
      }

 useEffect(()=>{
  const fetch = async()=>{
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
  const respone =await axios.get(`http://localhost:8000/api-samohod/cart/max/${product.id}`);
  setMaxQuantity(respone.data);
  setVisible(true);
 }
 fetch()
}

 ,[])
 

    return(
    visible?
<>

<div className="product_block2" key={product.id}>
                    <div className="img_block">
                        <img  src={img} className="img_cart" />
                        <div className="flex_dir">
                        <div className="marg_block">
                            <div className="name_product">{product.name.length>40?product.name.slice(0,30)+'...':product.name}</div>
                            <div style={{display:"flex"}}>
                              <div className="price">{product.price}р. &times; {quantity} шт.</div>
                              <div style={{marginLeft:30}} className="price">В наличии:{maxQuantity}</div>
                            </div>

                            <div className="center">
                                <button type="button" class="plus_btn" onClick={handlePlus}>+</button>
                                <button type="button" class="minus_btn" onClick={handleMinus} >&minus;</button>
                                <button type="button" value={product.id_cart} class="del_btn"onClick={product.del}>&times;</button>

                            </div>

                        </div>
                        {/* {localStorage.getItem('userToken')?<button type="button" class="w-100 btn btn-lg btn-outline-primary" value={product.id} onClick={handleClickCart}>Добавить в корзину</button>:''} */}
                        </div>

                    </div>

                </div>




    </>:null

)};
export default CartAlone;