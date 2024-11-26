import React from "react";
import './catalog.css';
import img from '../images/0fd3416c.jpeg'
import { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const Catalog = ()=>{
    const nav = useNavigate();
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCatigories] = useState([]);
    const [filters,setFilters] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const category = await axios.get('http://localhost:8000/api-samohod/categories')
                setCatigories(category.data);
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



    useEffect(() => {
        const results = products.filter(product => {
          const isType = filters.type ? product.categories === filters.type : true;
          return isType;
        });
        setFilteredProduct(results);
      }, [filters, products]);




    const handleClickFilter = (e)=>{
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
    });
    console.log(filters);
    }



    const handleClick = async (e) =>{
        e.preventDefault();
        return nav(`/product/${e.target.value}`);
    }

    return(
    <div className="cont_catalog_block">
        <div className="cont_block">
            <div className="name_block">Каталог товаров</div>
            <div className="cont_filter">
            <div className="name_category">Виды принтеров</div>
                <div className="filters_block">
                    
                    {categories.map(category=>
                    <button className="filter_name" onClick={handleClickFilter} value={category.name} name='type'>{category.name.charAt(0).toUpperCase() + category.name.slice(1)} принтеры</button>
                    )}
                </div>
            </div>  

            <div className="cont_product_block">
                {loading? <div>Loading...</div>: 

                filteredProduct.map(product=>
                <>
                {
                product.quantity === 0? null:
                <div className="product_block" key={product.id}>
                    <div className="img_block">
                    {product.image?  <img className="img_cart" src={`http://127.0.0.1:8000/${product.image}`} alt={product.name} />
                        :<img src={img} alt="Ну нет" className="img_cart" />
}
                        <div className="flex_dir">
                        <div className="marg_block">
                            <div style={{textOverflow:"ellipsis",width:150, overflow:"hidden", whiteSpace: "nowrap"}} className="name_product">{product.name.length>40?product.name.slice(0,30)+'...':product.name}</div>
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