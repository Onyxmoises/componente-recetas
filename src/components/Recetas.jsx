import React,{useEffect, useState} from 'react'
// import {Busqueda} from './Busqueda'
// import {Contacto} from './Contacto'
import style from '../styles/Tarjetas.module.scss'
// import { Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Busqueda } from './Busqueda';

export const Recetas = () => {

    const [recipes, setrecipes] = useState([])

    // const api = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=88578b1aeb834158a2aa5750c5766880&number=21';
    const api = 'https://tasty.p.rapidapi.com/recipes/list?rapidapi-key=c22daaa039mshe09b69fedc6c8a3p164cbfjsnd7940c036bdd&size=1';

    const fetchRecetas = (link) => {
        fetch(link).then(response => response.json()).then(data => setrecipes(data.results));
    };

    useEffect(() => {
        fetchRecetas(api);
    }, [])

    return (
        <>
        <div className={style.title}>Recetas</div>
        <div className={style.container}>
        {recipes.map((item)=>(
        <Router>
            <div key={item.id} className={style.card}>
                <img src={item.thumbnail_url}/>
                {/* <h4>{item.title}</h4> */}
                <p>{item.name}</p>
                {/* <a href='/componente-recetas/Receta/'>Prueba 1</a> */}
                <Link to='/Receta/'>Receta</Link>
                {/* <a href={`https://api.spoonacular.com/recipes/${item.id}/information?apiKey=88578b1aeb834158a2aa5750c5766880`}>Leer más</a> */}
            </div>
            <Routes>
                <Route exact path='/Receta/' element={<Busqueda data={item.id}/>}></Route>
            </Routes>
        </Router>
        ))}
        </div>
        </>
    )
}
