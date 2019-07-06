import React from 'react'

const Comentario = ({comentario, fechahora}) => {
    let fechaLinda = '(Sin fecha)'
    if (fechahora) {
        let fecha = fechahora.slice(0,10); 
        let hora  = fechahora.slice(11,16);
        fechaLinda = fecha + ' ' + hora + 'hs';
    }
    
    return (
            <div>
                <p><strong>{fechaLinda}:</strong>  {comentario}</p>
            </div>
    )
}

export default Comentario;
