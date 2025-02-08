import React, { useState } from "react";
import "./listaPlanosSaude.css";

function ListaPlanosSaude({ onEditarPlano }) {
    const [planos, setPlanos] = useState([
        {
            id: 1,
            nome: "Plano Saúde Total",
            numeroContrato: "123456",
            empresaResponsavel: "Saúde Sempre",
        },
        {
            id: 2,
            nome: "Plano Vida Saudável",
            numeroContrato: "654321",
            empresaResponsavel: "Bem Estar Corp.",
        },
        // Outros planos...
    ]);

    const deletaPlano = (id) => {
        setPlanos(planos.filter((plano) => plano.id !== id));
    };

    return (
        <div className="listaPlanosSaude">

            <div className="planos-lista">
                {planos.map((plano) => (
                    <div key={plano.id} className="plano-item">
                        <img
                            src="plano.svg"
                            alt="Ícone de plano"
                            className="user-icon-planos"
                        />
                        <div className="plano-info">
                            <span>{plano.nome}</span>
                            <span>Número do Contrato: {plano.numeroContrato}</span>
                            <span>Empresa: {plano.empresaResponsavel}</span>
                        </div>
                        <div className="plano-edita-deleta">
                            <img
                                src="lapis.svg"
                                alt="Editar"
                                className="lapis-plano"
                                onClick={() => onEditarPlano(plano)}
                            />
                            <img
                                src="lixo.svg"
                                alt="Deletar"
                                className="lixo-plano"
                                onClick={() => deletaPlano(plano.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaPlanosSaude;
