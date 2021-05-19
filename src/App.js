import './App.css'
import {LanguageProvider} from './context/languageContext'
import Routes from './routes/routes'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Routes />
      </div>
    </LanguageProvider>
  )
}

export default App
