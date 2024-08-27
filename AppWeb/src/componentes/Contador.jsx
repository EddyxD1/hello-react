import { Fragment, useState } from "react";

function Contador (){
    const [contar, setContar] = useState(0);
    const hacerClick = () => {
        setContar(contar + 1);
}

    return (
        <>
        <p>El numero de click realizado es: {contar}</p>
        <button onClick={hacerClick}>Click aqui</button>
        </>
    );
}

export default Contador;