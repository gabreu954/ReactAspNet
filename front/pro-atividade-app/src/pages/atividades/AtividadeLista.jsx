import React from 'react'
import AtividadeItem from "./AtividadeItem";

export default function AtividadeLista(props) {
    return (
        <div className="mt-3">

        {props.atividades.map((ativ) => (
          
          <AtividadeItem 
            handleConfirmModal={props.handleConfirmModal}
            pegarAtividade={props.pegarAtividade}
            ativ={ativ}
            key={ativ.id}
          />
        ))}
        
      </div>
    )
}
