import { Fragment } from "react";
import'./componentes/estilos.css'

function Ciudad ({nombre, descripcion, imagen}){
    return (
        <>
        <div className="Ciudad">
            <h3 className="Ciudad_titulo">{nombre}</h3>
            <p className="Ciudad_descripcion">{descripcion}</p>
            <img src={imagen} alt={nombre} />
        </div>
        </>
    );
}

export default Ciudad;