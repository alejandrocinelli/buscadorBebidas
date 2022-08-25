import { Modal, Image } from "react-bootstrap"
import useBebidas from '../hooks/useBebidas'

const ModalBebidas = () => {

    const {modal,handlerModalClick,receta, cargando} = useBebidas()

    const mostrarIngredientes = () =>{

        let ingredientes = []

        for(let i=1; i<16; i++){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={receta[`strIngredient${i}`]}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes
    }
   
  return (
    !cargando &&(
    <Modal show={modal} onHide={handlerModalClick} >

            <Image
            src={receta.strDrinkThumb}
            alt={`Imagen Receta ${receta.strDrink}`}
            />
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>    
        

        <Modal.Body>
            
            <div className="p-3">
                <h3>Instrucciones</h3>{receta.strInstructions}
                <h3 className="mt-2">Ingredientes y Cantidades</h3>{mostrarIngredientes()}    
            </div>
            
      
        </Modal.Body>

    </Modal>)
  )
}
export default ModalBebidas