import Form from './components/Form'
import './App.css'

function App() {
  const name = "Exciting Remote Event Planning!"

  return (
    <div className="App">
      <Form title={name}/>
    </div>
  )
}

export default App
