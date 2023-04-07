import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

type TLanguageProvider = {
    children : ReactNode
}

type TLanguageContext = {
    handleChangeLanguage : () => void
}


const LanguageContext = createContext({} as TLanguageContext)

export const LanguageProvider = ({children}: TLanguageProvider) => {

    const { t, i18n: {
        changeLanguage, language
    }, } = useTranslation()

    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en-US' ? 'pt-BR' : 'en-US'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }


    

    const value = useMemo(() => ({
        handleChangeLanguage
    }), [
        handleChangeLanguage
    ])

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
    return useContext(LanguageContext)
}