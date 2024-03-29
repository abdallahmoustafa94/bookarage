import {useState, useEffect} from 'react'

export default function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue,
  )

  useEffect(() => {
    // console.log(state)
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}
