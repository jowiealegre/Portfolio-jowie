import React, {Component}from 'react';
import Galeria from './galeria';




function Modal (props){
    
    return (
    <div>
        <closeButton onClick = {props.onCloseModal}/>
       
    </div>

    );
}

export default Galeria;