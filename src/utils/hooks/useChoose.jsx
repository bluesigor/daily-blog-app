import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setLanguage } from '../../store/reducers/userSettingsSlice'

const useChoose = () => {
  const [isChoosen, setIsChoosen] = useState({
    eng: false,
    uk: false,
  })

  const dispatch = useDispatch()
  const userLang = useSelector((state) => state.userSettings.language)

  const setEngChoosen = () => {
    if (userLang === 'uk') {
      setIsChoosen({
        eng: true,
        uk: false,
      })
      dispatch(setLanguage('eng'))
    }
  }

  const setUkChoosen = () => {
    if (userLang === 'eng') {
      setIsChoosen({
        eng: false,
        uk: true,
      })
      dispatch(setLanguage('uk'))
    }
  }

  return { setEngChoosen, setUkChoosen, isChoosen }
}

export default useChoose
