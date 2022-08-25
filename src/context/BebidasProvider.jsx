import {createContext, useEffect, useState } from "react";
import axios from "axios";

const BebidasContext = createContext();



const BebidasProvider = ({children}) => {

const [bebidas, setBebidas] = useState([])
const [modal, setModal] = useState(false)
const [bebidaID,setBebidaId] = useState(null)
const [receta,setReceta] = useState({})
const [cargando, setCargando] = useState(false)

useEffect(() => {
  
    setCargando(true)
    const obtenerReceta  = async () =>{
       if(!bebidaID) return
        
       try {
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaID}`
        const {data} = await axios.get(url);
        setReceta(data.drinks[0])
        //console.log(data.drinks[0].strInstructions)

       } catch (error) {
        console.log(error)
       } finally{
        setCargando(false)
       }
    }

    obtenerReceta()

}, [bebidaID])


const consultarBebidas = async (datos) =>{

    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

        const {data} = await axios.get(url);
        //console.log(data.drinks)
        setBebidas(data.drinks)

    } catch (error) {
        console.log(error)
    }

}

const handlerModalClick = () =>{
    
    setModal(!modal)
    
}

const handlerBebidaIdClick = (id) =>{

    setBebidaId(id)

}

  return (

    <BebidasContext.Provider 
    value={{
        consultarBebidas,
        bebidas,
        modal,
        handlerModalClick,
        handlerBebidaIdClick,
        receta,
        cargando 

    }}
    >
        {children}
    </BebidasContext.Provider>
   
  )
}

export {
    BebidasProvider
}

export default BebidasContext