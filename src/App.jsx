/* eslint no-eval:0 */ // desactivar warnings de linter

// importación
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './componentes/Functions'
import Numbers from './componentes/Numbers'
import MathOperations from './componentes/MathOperations'
import Result from './componentes/Result'
import './App.css'



//generación de funcion de componente (arrow function)
const App = () => {
   // const useState = React.useState en caso de no llamar en el import
    //const arrayTextoFuncionModificaTexto = useState("")
    //arrayTextoFuncionModificaTexto => ["hola", funcion]

    //1er posición: valor que inicialmente es el valor por defecto
    //const texto = arrayTextoFuncionModificaTexto[0]

    //2da posición: función que va permitir modificar el valor por defecto
    //const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    //con array destructuring
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : '0';
    // lo que ejecuta la función
    console.log('Renderización de App ', value)
    return (
    <main className='react-calculator'>
        <Result value={value}/>
        <div className="numbers">
            <Numbers onClickNumber={number => {
                console.log("Click en number", number)
                setStack(`${stack}${number}`)
            }}/>
        </div>
        <Functions 
            onContentClear={() => {
                console.log("ContentClear")
                setStack('')
            }}
            onDelete={() => {
                if(stack.length>0){
                    console.log("Delete")
                    const newStack = stack.substring(0, stack.length-1)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation: ", operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal => {
                console.log("Equals:",equal)
                setStack(eval(stack).toString())
            }}
        />
    </main>
    )
}

// exportación
export default App