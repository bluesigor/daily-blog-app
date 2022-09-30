import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Provider from './utils/hooks/Provider'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider />
      </BrowserRouter>
    </div>
  )
}

export default App
