import './Recetas.css'

export function Title(){
  return(
    <h1 class="title">Recetas</h1>
  )
}

export function App() {
  return (
    <>
    <div class="container">
        <div class="card">
            <img src="/rec6.jpg"/>
            <h4>Bacalao ajoarriero</h4>
            <p>Esta receta es una de las más sencillas y sabrosas que se preparan con bacalao.</p>
            <a href="/componente-recetas/Receta">Leer más</a>
        </div>
        <div class="card">
            <img src="/rec5.jpg"/>
            <h4>Arroz con leche y nata</h4>
            <p>El arroz con leche y nata es un postre rico y muy cremoso.</p>
            <a href="/componente-recetas/Receta">Leer más</a>
        </div>
        <div class="card">
            <img src="/rec4.jpg"/>
            <h4>Pan de muerto de chocolate</h4>
            <p>Si eres fan del chocolate y del pan, esta receta de pan de muerto relleno de chocolate te encantará.</p>
            <a href="/componente-recetas/Receta">Leer más</a>
        </div>
    </div>
    </>
  )
}