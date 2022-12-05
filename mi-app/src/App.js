/* import Button from './Button'

const arr = [
    'carlos contento',
    'carlos triste',
    'carlos piola'
]

const App = () => {
    const miVariable = false;

    if (miVariable){
        return <p>Mi Variable dio true</p>
    }
    return (
        <div>
            <h1 onClick={(e) => console.log('Click', e)}>Hola Mundo</h1>
            {arr.map(el => <p key={el}>{el}</p>)}
            <Button onClick={() => console.log('Clickeado')}>
                Enviar
            </Button>
        </div>
    )

}
 */

import { Component } from "react"

class Input extends Component {
    render() {
        return (
        <input
            value={this.props.value}
            onChange={this.props.onChange}
        />
        )
    }
}

class App extends Component {
    state = {
        nombre: '',
        apellido: '',

    }

    updateValues = (prop, value) => {
        this.setState({[prop]: value})
    }
    render() {
        return (
            <p>
                Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
                <Input 
                    value={this.state.nombre}
                    onChange={e => this.updateValues('nombre', e.target.value)}
                />
                <Input 
                    value={this.state.apellido} 
                    onChange={e => this.updateValues('apellido', e.target.value)}
                /> 
            </p>
        )
    }
}
/* 
class Button extends Component {
    constructor(props) {
        super(props)
        console.log('constructor', props);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentdidupdate', prevProps, prevState);

    }

    componentWillUnmount(){
        console.log('Desmontando componente', this.props, this.state);
    }

    render(){
        console.log('ejectuando metodo render button')
        return(
            <button onClick={() => this.setState({ prop: 1})}>
                Enviar
            </button>
        )
    }
}



class App extends Component{
    state = {
        valor: 3
    }
    render(){
        console.log(this.state);
        return (
            <div>
                <p>
                Hola mundo
                </p>
                {this.state.valor === 3 
                ? <Button chanchito='feliz'/>
                : null}
                <button className={`${this.state.valor}`}
                onClick={ () => this.setState({ valor: 2})}> 
                    Enviar en App
                </button>
            </div>
        )
    }
}
 */

export default App