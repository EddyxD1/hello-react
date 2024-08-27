import { Fragment } from "react";
import Titulo from "./componenetes/Titulo";
import Pie from "./componenetes/Pie";
import Ciudad from "./componenetes/ciudad";


function App(){
  return(
    <>
    <Titulo/>
    <Ciudad
    nombre="Lima"
    descripcion="Capital del Perú"
    imagen="https://i.natgeofe.com/n/4b1eeacc-59c7-476e-8870-fadf135a998e/cathedral-lima-peru.jpg?w=2880&h=1912"
    />
    <Ciudad
    nombre="Arequipa"
    descripcion="Ciudad encantadora tierra volcanica "
    imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xFhcXXye18Ov4PL0o9zDZTf68pGOABX3LA&s"
    />
    <Pie/>
    </>
  );
}

export default App;