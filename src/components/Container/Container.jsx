import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-0 lg:px-10 mx-auto'>
            {children}
        </div>
    );
};

export default Container;