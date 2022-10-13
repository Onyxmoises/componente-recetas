import { useNavigate } from 'react-router-dom'
import './Receta.css'


export function Receta() {
  const navigate = useNavigate();
  const navigateHome = () =>{
    navigate('/')
  }
  return (
    <>
    <div class="container2">
        <div class="card2">
            <img src="/rec6.jpg"/>
            <h4>Bacalao ajoarriero</h4>
            <p>Bacalao ajoarriero, un plato riquísimo de bacalao. Esta receta es una de las más sencillas y sabrosas que se preparan con bacalao, pues está llena de ingredientes básicos para hacer un buen sofrito con verduras para acompañar el pescado. Para preparar esta receta puedes comprar el bacalao desalado, así te será más rápido hacer el plato. En algunas recetas, se suele utilizar bacalao desmigado, otras recomiendan usar trozos. De cualquier forma te quedará delicioso, así que elige la presentación que más te guste. En RecetasGratis, nos hemos decantado por prepararlo en trozos enteros.</p>
            <p>Cantidad: 4 comensales Tiempo: 45m Dificultad: baja </p>
            <p>Ingredientes:</p>
            <div>
              <p>400 gramos de bacalao desalado</p>
              <p>1 cebolla</p>
              <p>1 pimiento verde</p>
              <p>1 pimiento rojo</p>
              <p>2 dientes de ajos</p>
              <p>200 gramos de tomate frito</p>
              <p>1 chorro de aceite de oliva</p>
              <p>1 pizca de sal </p>
            </div>
            <p>Preparacion:</p>
            <div>
              <p>1.- Pela y corta la cebolla en trozos pequeños, pica los ajos y el pimiento rojo y verde.</p>
              <p>2.- Pon una cazuela con un buen chorro aceite de oliva. Añade la cebolla picada.</p>
              <p>3.- Añade los ajos, el pimiento rojo y el pimiento verde. Deja cocinar unos 10 minutos o hasta que las verduras queden bien pochadas. Entonces, añade el tomate frito y un poco de sal. Deja cocinando otros 5 minutos.</p>
              <p>4.- Por otro lado, pon una sartén con un poco de aceite y añade el bacalao cortado en trozos medianos. Déjalo cocinar a fuego medio durante 5 minutos.</p>
              <p>5.- Cuando esté el bacalao, pásalo a la cazuela junto a las verduras. Deja cocinar por 5 minutos. Puedes dejar el sofrito encima o remover todo junto, ¡tu bacalao ajoarriero estará listo para comer! Puedes preparar una guarnición de ensalada verde o de arroz.</p>
            </div>
        </div>
    </div>
    <input type="button" value="Regresar" onClick={navigateHome}/>
    </>
  )
}
