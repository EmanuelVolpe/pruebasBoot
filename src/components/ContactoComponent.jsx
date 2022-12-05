import React from 'react'
import PropTypes from 'prop-types'
import { ContactoModel } from '../models/ContactoModel'

const Contacto = ({ contacto }) => {
    return (
        <div>
            <h1>Nombre: {contacto.nombre}</h1>
            <h1>Apellido: {contacto.apellido}</h1>
            <h2>Email:{contacto.email}</h2>
            <h2>Conectado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h2>
        </div>
    )
}

Contacto.propTypes = {
    contacto: PropTypes.instanceOf(ContactoModel)
}

export default Contacto