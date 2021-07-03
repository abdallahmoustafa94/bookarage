import React from 'react'
import useLocalStorage from '../hooks/use-local-storage'
import PropTypes from 'prop-types'

const ShopContext = React.createContext()
ShopContext.displayName = 'ShopContext' // react dev tools doesn't display the name of the context

function ShopProvider({children}) {
  const [shop, setLocalStorageShop] = useLocalStorage('shop', null)

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
  const context = React.useContext(ShopContext)
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }

  return context
}

export {ShopProvider, useShop}
