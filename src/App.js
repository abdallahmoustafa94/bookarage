import './App.css'
import {LanguageProvider} from './context/languageContext'
import Routes from './routes/routes'
import 'semantic-ui-css/semantic.min.css'
import {ToastProvider} from 'react-toast-notifications'
import ToastContainer from './components/ToastContainer'
import {UserProvider} from './context/UserContext'
import {useState} from 'react'
import StateContext from './context/stateContext'
import {ShopProvider} from './context/ShopContext'
import {Container, Grid, Tab} from 'semantic-ui-react'

function App() {
  const [showModal, setShowModal] = useState({modalName: '', data: null})

  return (
    <ToastProvider
      components={ToastContainer}
      autoDismiss={true}
      placement="top-center"
    >
      <StateContext.Provider value={{showModal, setShowModal}}>
        <UserProvider>
          <ShopProvider>
            <LanguageProvider>
              <div className="h-full main-font">
                <Routes />
              </div>
            </LanguageProvider>
          </ShopProvider>
        </UserProvider>
      </StateContext.Provider>
    </ToastProvider>
  )
}

export default App
