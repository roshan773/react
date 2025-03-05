import { createContext, useState } from "react";

export const LanguageChange = createContext()


const translate = {
    en: {
        message: "HABIBI COME TO DUBAI",
        switch: "Translate to Arabic",
        welcome: "Welcome to Dubai"

    },
    ar:{
        message: "حبيبي تعال إلى دبي",
        switch: "Translate to English",
        welcome: "مرحبا بك في دبي"
    }
}

export function Language({ children }) {

    const [ lang, setlang ] = useState("en")

    const togglelang = () => {
        setlang(lang == "en"? "ar" : "en")
    }
    return (
      <LanguageChange.Provider value={{lang, setlang, togglelang, translate}}>{children}</LanguageChange.Provider>
    );
  }