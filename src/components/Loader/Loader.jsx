import React from 'react';
import   {    PacmanLoader } from 'react-spinners'
const Loader = () => {
    return (
      <div className='w-full mx-auto flex items-center justify-center'>
        <PacmanLoader color="#f72882" />         
      </div>
    );
};

export default Loader;