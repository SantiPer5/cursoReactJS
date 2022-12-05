import logo from './logo.svg';
//import './App.css';

import './main.css';

const estilo2 = {
  boxShadow: '0 5px 3px 0 rgba(0, 0, 0, 0.1)',
}
const estilo = ({bg = 'blue'}) => ({
  color: '#fff',
  backgroundColor: bg,
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({ children }) => {
  return (
    <li className='clase-li'>{children}</li>
  )
}

function App() { //puede ser declarado como una funcion
  const valor = 'contento';
  return ( //siempre tiene que retornar algo
    //un componente es una funcion que retorna un elemento
    <ul style={estilo({ bg: '#750'})} className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
    );
}

export default App;
