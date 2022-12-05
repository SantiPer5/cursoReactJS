import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* //nos va a mostrar errores o advertencias en la consola del nav */}
    <App />
  </React.StrictMode>
);

/* const x = React.createElement('h1', null, 'Hello World');//recibe 3 parametros: 
                    //el tipo de elemento, atributos y el contenido
                    // <p>Hello World</p> */



/* const Li = ({children,estado, casa, edad}) => {
        console.log(casa, edad)
        return (
          <li>{children} perez {estado}</li>
        )
      }
const X =  () => 
  <ul>
    <Li 
      estado={'esta feliz'}
      casa={false}
      edad={23}>
        juan</Li>
    <Li estado={'triste'}>jorge</Li>
    <Li estado={'contento'}>Rodrigo</Li>

  </ul> */

//root.render( <X />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // nos permite a nosotros medir el rendimiento
