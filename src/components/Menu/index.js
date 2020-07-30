import React from 'react'
import Logo from '../../assets/img/Logo4.png'
import './Menu.css'
import Button from '../Button/index'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/" target="_blank">
        <img className="Logo" src={Logo} alt="logo barulhoflix"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu