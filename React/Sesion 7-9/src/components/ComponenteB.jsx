import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './Contacto.class'

const ComponenteB = ({ Contacto }) => {
  return (
    <div>
        <h5>
            Nombre: { Contacto.nombre }
        </h5>
        <h5>
            Apellido: { Contacto.apellido }
        </h5>
        <h5>
            Email: { Contacto.email }
        </h5>
        <h5>
            Conectado: { Contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }
        </h5>
    </div>
  );
};

ComponenteB.propTypes = {
    task: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;