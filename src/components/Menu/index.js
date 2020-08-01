import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo4.png'
import './Menu.css'
import Button from '../Button/index'

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo barulhoflix"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu