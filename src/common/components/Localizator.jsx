import { useEffect, useState } from 'react'
import translate from 'translate'
import { useSelector } from 'react-redux'

translate.engine = 'google'
translate.key = process.env.GOOGLE_KEY

const Localizator = ({ text }) => {
  const [str, setStr] = useState(text)
  const preferLanguage = useSelector((state) => state.userSettings.language)

  useEffect(() => {
    const Translate = async () => {
      const response = await translate(text, preferLanguage)

      setStr(response)
    }

    Translate()
  }, [text, preferLanguage])

  return <>{str}</>
}

export default Localizator
