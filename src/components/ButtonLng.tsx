import Brazil from '../assets/Brazil.png'
import USA from '../assets/USA.png'
import { Button } from 'react-bootstrap'
import '../styles/buttonLang.scss'
import { useTranslation } from 'react-i18next';
import { useState, ButtonHTMLAttributes } from 'react'

type ButtonLngProps = ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonLng(props: ButtonLngProps) {

  const { t, i18n: {
    changeLanguage, language
  }, } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [iconLng, setIconLng] = useState(true)
  const [txtLng, setTxtLng] = useState(true)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en-US' ? 'pt-BR' : 'en-US'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
    setIconLng(newLanguage !== 'en-US');
    setTxtLng(newLanguage !== 'en-US');
  }

  const iconLngComponent = <img src={iconLng ? Brazil : USA} alt={iconLng ? 'Bandeira do Brasil' : 'Bandeira dos Estados Unidos'} />
  const txtLngComponent = txtLng ? 'Português' : 'English';

  return (
    <Button size="sm" className="buttonLng" onClick={() => handleChangeLanguage()} {...props}>
      {iconLngComponent} {txtLngComponent}
    </Button>
  )
}
