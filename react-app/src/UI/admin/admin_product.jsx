import axios from "axios";
import React, { useEffect, useState } from "react";
import img from './0fd3416c.jpeg';
const AdminProduct = (props)=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const response = await axios.get('http://localhost:8000/api-samohod/products');
                setProducts(response.data.content.reverse());

            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleClickDel = async(e)=>{
        let quest = window.confirm("Вы уверены что хотите удалить товар?");
        if(quest){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
        const respone = await axios.delete(`http://localhost:8000/api-samohod/product/${e.target.value}`);
        setProducts(products.filter(product=> product.id != e.target.value));
    }


    }
    const handleClickChange = (e)=>{
        e.preventDefault();
        props.changeCom('E', e.target.value);
    }


    return(
        <div className="cont_admin_product_block">
            <h3>Список продуктов</h3>

            <div className="cont_admin_product">

            <div className="cont_product_block">
                {loading? <div>Loading...</div>: 

                products.map(product=>
                <>
                {
                product.quantity === 0? null:
                <div className="product_block" id="product_block" key={product.id}>
                    <div className="img_block">
                    {product.image?  <img className="img_cart" src={`http://127.0.0.1:8000/${product.image}`} alt={product.name} />
                        :<img src={img} alt="Ну нет" className="img_cart" />
}
                        <div className="flex_dir">
                        <div className="marg_block">
                            <div style={{textOverflow:"ellipsis",width:150, overflow:"hidden", whiteSpace: "nowrap"}} className="name_product">{product.name.length>40?product.name.slice(0,30)+'...':product.name}</div>
                            <div className="price">{product.price} р.</div>
                        </div>
                        <div className="cont_btn">
                            <button className="btn_class" onClick={handleClickChange}  value={product.id}>Изменить</button>
                            <button className="btn_class" onClick={handleClickDel} value={product.id}>Удалить</button>
                        </div>

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
}
export default AdminProduct;