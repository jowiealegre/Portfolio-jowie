
import React from 'react';
import './galeria.css';
import imagen1 from './fotos/imagen1.jpeg';
import imagen2 from './fotos/imagen2.jpeg';
import imagen3 from './fotos/imagen3.jpeg';
import imagen4 from './fotos/imagen4.jpeg';
import imagen5 from './fotos/imagen5.jpeg';
import imagen6 from './fotos/imagen6.jpeg';
 
class Galeria extends React.Component {
    render () {
        return(
            <div className = 'contenedor'>
                <h1>mi galeria </h1>
                <div className = "imagenes">
                    <img
                    src = {imagen1} alt= "imagen1"/>
                     <img
                    src = {imagen2} alt= "imagen2"/>
                     <img
                    src = {imagen3} alt= "imagen3"/>
                     <img
                    src = {imagen4} alt= "imagen4"/>
                     <img
                    src = {imagen5} alt= "imagen5"/>
                     <img
                    src = {imagen6} alt= "imagen6"/>
                </div>
            </div>
    )
}
}
export default Galeria;