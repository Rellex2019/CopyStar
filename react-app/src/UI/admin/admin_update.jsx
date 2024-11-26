import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminUpdate = (props)=>{


    const [categories, setCategories] = useState([]);
    const [error, setError] = useState();
    const [product, setProduct] = useState({
        "name":"",
        "price":"",
        "description": "",
        "id": ""
}); 
const [formData, setFormData] =  useState({});


const handleImageChange = (e) => {
  setFormData({...formData, ['image']: e.target.files[0]});
  setProduct({...product, ['image']: e.target.files[0]});
  console.log(e.target.files[0]);
};

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api-samohod/product/${props.id}`);      
                const category = await axios.get('http://localhost:8000/api-samohod/categories')
                setCategories(category.data);
                setProduct(response.data.content);

            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleOnChange = (e)=>{
        setProduct({...product, [e.target.name] : e.target.value})
        setFormData({...formData, [e.target.name] : e.target.value})
        console.log(formData);
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        const response = await axios.patch(`http://localhost:8000/api-samohod/product/${props.id}`, {
            ...formData
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });


    }

    return(
        <div className="cont_admin_product_block">
            <h3>Изменение товара </h3>
            <div className="cont_admin_product">
            <form
                    onSubmit={handleSubmit}
                    className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                    source="email"
                    name="form"
                    style={{ padding: 10 }}
                  >
                    <div className="u-form-group u-label-top u-form-group-1">
                      <label htmlFor="text-15b9" className="u-label">
                        Название товара
                      </label>
                      <input
                        onChange={handleOnChange}
                        type="text"
                        placeholder="Введите название товара"
                        id="text-15b9"
                        value={product.name}
                        name="name"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-1"
                        required="required"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-2">
                      <label htmlFor="text-e25e" className="u-label">
                        Описание 
                      </label>
                      <input
                        onChange={handleOnChange}
                        type="text"
                        id="text-e25e"
                        value={product.description}
                        name="description"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2"
                        required="required"
                        placeholder="Введите описание"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-2">
                      <label htmlFor="text-e25e" className="u-label">
                        Цена
                      </label>
                      <input
                        onChange={handleOnChange}
                        type="number"
                        value={product.price}
                        id="text-e25e"
                        name="price"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2"
                        required="required"
                        placeholder="Введите цену"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-2">
                      <label htmlFor="text-e25e" className="u-label">
                        Доступное количество
                      </label>
                      <input
                        onChange={handleOnChange}
                        type="number"
                        value={product.quantity}
                        id="text-e25e"
                        name="quantity"
                        className="u-border-2 u-border-grey-40 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2"
                        required="required"
                        placeholder="Введите доступное количество"
                      />
                    </div>
                    <div className="u-form-group u-label-top u-form-group-2">
                      <label htmlFor="text-e25e" className="u-label">
                        Выберите категорию:
                      </label>
                      <select
                        onChange={handleOnChange}
                        id="text-e25e"
                        name="categories_id"
                        style={{marginLeft:30}}
                        className=""
                        required="required"
                      >
                        

                        {categories.map(category=>
                            <option value={category.id}>{category.name}</option>
                        )}



                      </select>
                   </div>
                    
                    <div className="error" style={{color:'red'}}>{error}</div>
                    <div className="u-align-left u-form-group u-form-submit u-label-top">
                    <button type="submit" className="u-btn u-btn-submit u-button-style u-custom-color-1 u-radius u-btn-2">Обновить</button>
                    </div>
                  </form>
            </div>
        </div>
    )
}
export default AdminUpdate;