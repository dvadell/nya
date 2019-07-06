import React from 'react';

function WithError(Component) {
    return function WithErrorComponent({ error, ...props }) {
        return ( <div>
            { 
                error ? <p>ERROR: {error}</p> : ''
            }
                <Component {...props} />
            </div> 
        )
    }
}

export default WithError;