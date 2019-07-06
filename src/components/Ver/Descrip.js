import React from 'react'

const Descrip = ({descr, fechahora}) => {
    let fechaLinda = '(Sin fecha)'
    if (fechahora) {
        let fecha = fechahora.slice(0,10); 
        let hora  = fechahora.slice(11,16);
        fechaLinda = fecha + ' ' + hora + 'hs';
    }
    
    return descr ? (
            <div>
                <h3>Descripción</h3>
                <p><strong>{fechaLinda}:</strong>  {descr}</p>
            </div>
    ) : null
}

export default Descrip;
