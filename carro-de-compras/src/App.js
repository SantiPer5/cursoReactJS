import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
import { computeHeadingLevel } from '@testing-library/react';


class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: 'productos/tomate.jpg'},
      { name: 'Arbejas', price: 2500, img: 'productos/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img: 'productos/lechuga.jpg'}
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } =  this.state //traemos las propiedades de carro
    if (carro.find ( x => x.name === producto.name )) { // pregunto si dentro del el carro existe un producto
                                                        // que tenga el mismo nombre.
      //definimos un nuevo carro de compras en base al existente
      const newCarro = carro.map(x => x.name === producto.name //si el nombre es exactamente igual
        ? ({ 
          ...x, //copiamos el valor del producto original
          cantidad: x.cantidad + 1 // y agregamos 1 a la cantidad
        })
        : x) //si el nombre no es exactamente igual devolvemos el valor original.
        return this.setState({ carro: newCarro }) // retornamos newCarro. Esta parte es importante ya que sino 
                                                  // nuestra funcion va a seguir corriendo y se va a ejecutar la  
                                                  // siguiente instruccion.
    }

    return this.setState ({
      carro: this.state.carro.concat({ // esta linea concatena 2 productos
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible})
  }

  render() {
    const {esCarroVisible} = this.state
    return (
      <div> 
        <Navbar 
          carro={this.state.carro} //1 le paso la propiedad de carro a Navbar
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro} /> 
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
