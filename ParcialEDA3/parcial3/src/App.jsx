import { useState } from 'react'
import './App.css'
import { TodoApp } from './Components/Todo/TodoApp'
import {store as todoStore } from './Components/Todo/store/store'
import { Provider } from 'react-redux'
import Pokemon from './Components/Pokemon/Pokemon'
import {store as pokemonStore } from './Components/Pokemon/store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={todoStore}>
        <TodoApp />
        </Provider>
        <Provider store={pokemonStore}>
        <Pokemon />
        </Provider>
      </header>
    </div>
  )
}

export default App
