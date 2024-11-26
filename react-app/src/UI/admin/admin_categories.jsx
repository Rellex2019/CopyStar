import axios from "axios";
import React, { useEffect, useState } from "react";





const AdminCategories = ()=>{
    const [categories, setCategories] = useState([]);
    const [name, setName]= useState();
    const [error, setError] = useState();
    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const category = await axios.get('http://localhost:8000/api-samohod/categories')
                setCategories(category.data);

            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);


    const handleClickDel = async (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        let quest = window.confirm('Вы хотите удалить категорию?');
        if(quest){
        setCategories(categories.filter(category => category.id != e.target.value));
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        const respone = await axios.delete(`http://localhost:8000/api-samohod/admin/categories/delete/${e.target.value}`);
        }
    }
    

    const handleClickAdd = async (e)=>{
        e.preventDefault();
        const newId = categories.length > 0 ? Math.max(...categories.map(cat => cat.id)) + 1 : 1;
        const newCategory = { id: newId, name };
        setCategories(prevCategories => [...prevCategories, newCategory]);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`
        const respone = await axios.post(`http://localhost:8000/api-samohod/admin/categories/add`, {'name':name});                                                      
    }

    const handleChange = (e)=>{
        setName(e.target.value);

    }
    return(
        <div className="cont_admin_product_block">
            <h3>Добавление и удаление категорий</h3>
            Нажмите на категорию для её удаления
            <div className="cont_admin_product">
            {categories.map(category=>
                <button className="filter_name" onClick={handleClickDel} value={category.id} name='type'>{category.name.charAt(0).toUpperCase() + category.name.slice(1)} принтеры</button>
            )}

            <div style={{marginTop:50}} className="cont_add_categoty">
                <input type="text" name="categoty" onChange={handleChange} />
                <button onClick={handleClickAdd}>Добавить категорию</button>
            </div>
            </div>
        </div>
    )
}
export default AdminCategories;