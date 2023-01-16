import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: '20px'
    }
}
class Carro extends Component {
    render(){
        const {carro, esCarroVisible, mostrarCarro} = this.props //4 llamamos a nuestro carro q traemos
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) //el metodo de reduce se utiliza para que podamos
                                                                        // agrupar los numeros y entregar algo al usuario
                                                                       //(acumulador, elemento) => acc + el.cant , 0 que es 
                                                                      //donde comienza
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad}/>
                    : null} 
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
                
            </div>
        )
    }
}

export default Carro