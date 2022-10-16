import React,{useEffect, useState} from 'react'
import style from '../styles/Busqueda.module.scss'

export const Busqueda = (key) => {

  const id = key;

  const api = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id.data}&rapidapi-key=c22daaa039mshe09b69fedc6c8a3p164cbfjsnd7940c036bdd`;

  const [recipes, setrecipes] = useState([])
  
  const fetchRecetas = (link) => {
    fetch(link).then(response => response.json()).then(data => setrecipes(data));
  };
  
  useEffect(() => {
    fetchRecetas(api);
  }, [])
  
  const name = "aaaaaaaaaaaaaaaa"

  return(
    <>
    <div className={style.formulario}>
      <p>{name}</p>
    </div>
    </>
  )
}
