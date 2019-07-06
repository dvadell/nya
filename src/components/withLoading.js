import React from 'react';
const loadingImage = '/img/large_spinner.gif';

function WithLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        return ( <div>
            { 
                isLoading ? <img alt="Loading..." src={loadingImage} /> : ''
            }
                <Component {...props} />
            </div> 
        )
    }
}

export default WithLoading;