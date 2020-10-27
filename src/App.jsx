// importación
import React from 'react'
import Functions from './componentes/Functions'
import Numbers from './componentes/Numbers'
import MathOperations from './componentes/MathOperations'
import Result from './componentes/Result'
import './App.css'



//generación de funcion de componente (arrow function)
const App = () => {

    // lo que ejecuta la función
    console.log('Renderización de App')
    return (
    <main className='react-calculator'>
        <Result value={"0"}/>
        <div className="numbers">
            <Numbers onClickNumber={number => {
                console.log(number)
            }}/>
        </div>
        <Functions 
            onContentClear={() => 
                console.log("ContentClear")
            }
            onDelete={() => 
                console.log("Delete")
            }
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation: ", operation)
            }
            onClickEqual={equal => 
                console.log("Equals:",equal)
            }
        />
    </main>
    )
}

// exportación
export default App