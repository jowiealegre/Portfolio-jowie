
import React from 'react';
import './galeria.css';
import imagen1 from './fotos/imagen1.PNG';
import imagen2 from './fotos/imagen2.PNG';
import imagen3 from './fotos/imagen3.PNG';
import imagen4 from './fotos/imagen4.PNG';
import imagen5 from './fotos/imagen5.PNG';
import imagen6 from './fotos/imagen6.PNG';
 
class Galeria extends React.Component {

    state = {isOpen: false};
    openModal = () => this.setState({isOpen:true});
    closeModal = () => this.setState ({isOpen:false});

    render () {
        return(
          
            <div className = 'contenedor'>
                
                
                 <h1> Galeria </h1>
                 <hr/>
                 <div className = "imagenes">
                    <img
                    src = {imagen1}onClick ={this.openModal} alt= "imagen1"/>
                    <modal
                           isOpen = {this.state.isOpen} 
                           onCloseModal ={this.closeModal}/>
                     <img
                    src = {imagen2}onClick ={this.openModal}alt= "imagen2"/>
                     <modal
                           isOpen = {this.state.isOpen} 
                           onCloseModal ={this.closeModal}/>
                     <img
                    src = {imagen3}onClick ={this.openModal} alt= "imagen3"/>
                     <modal
                           isOpen = {this.state.isOpen} 
                           onCloseModal ={this.closeModal}/>
                     <img
                    src = {imagen4}onClick ={this.openModal} alt= "imagen4"/>
                     <modal
                           isOpen = {this.state.isOpen} 
                           onCloseModal ={this.closeModal}/>
                     <img
                    src = {imagen5} onClick ={this.openModal} alt= "imagen5"/>
                     <modal
                           isOpen = {this.state.isOpen} 
                           onCloseModal ={this.closeModal}/>
                     <img
                    src = {imagen6} onClick ={this.openModal} alt= "imagen6"/>
                     <modal
                           isOpen = {this.state.isOpen} 
                           onCloseModal ={this.closeModal}/>
                </div>
            </div>
            
    )
}
}

export default Galeria;