import React from 'react';
import PropTypes from 'prop-types';

/** Primer componente documentado */
const HelloWorld = ({message = 'Perro'}) => (
    <div>
       Hello {message}
    </div>
);

HelloWorld.propTypes = {
    /** Texto que se mostrará en el componente */
    message: PropTypes.string
};

export default HelloWorld;
