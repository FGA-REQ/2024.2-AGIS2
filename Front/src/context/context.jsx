import { createContext, useState } from "react";

export const UsuarioContext = createContext("");

export const UsuarioProvider = ({ children }) => {
    const [CRM, setCRM] = useState("");
    const [nome, setNome] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");
    const [CPF, setCPF] = useState("");

    return (
        <UsuarioContext.Provider value={{ emailUsuario, setEmailUsuario, nome, setNome, CPF, setCPF, CRM, setCRM,}}>
            {children}
        </UsuarioContext.Provider>
    )
}