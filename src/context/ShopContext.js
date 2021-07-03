import {createContext, useContext} from 'react'
import useLocalStorage from '../hooks/use-local-storage'
import PropTypes from 'prop-types'

const ShopContext = createContext()
ShopContext.displayName = 'ShopContext' // react dev tools doesn't display the name of the context

function ShopProvider({children}) {
  const [shop, setLocalStorageShop] = useLocalStorage('shop', 0)
  // console.log(shop)

  function setShop(shop) {
    setLocalStorageShop(shop)
  }

  return (
    <ShopContext.Provider value={[shop, setShop]}>
      {children}
    </ShopContext.Provider>
  )
}

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useShop() {
  const context = useContext(ShopContext)
  // console.log(context)
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }

  return context
}

export {ShopProvider, useShop}
