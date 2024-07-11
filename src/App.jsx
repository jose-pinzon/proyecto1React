import { Header } from "./components/header"
import { useState } from "react";
import {  db } from './database/db';
import { Tennis } from "./components/Tennis";




const App = () =>  {

    const [ data, setData ] = useState(db)
    const [ cart, setCart ] = useState([])

    const addToCart = ( item ) => {

        if( cart.includes( item ) ) return 
        
       setCart( prevCart => [...prevCart, item])
    }
  return ( 
    <>
        <Header/>
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {
                    data.map( tennis => (
                        <Tennis 
                            key={ tennis.id } 
                            tennis={ tennis }
                            addToCart={ addToCart }/>
                    ))
                    
                }
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>

    </>
  )
}

export default App
