import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

const CadastroCategoria = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da categoria:
          <input text="type"/>
        </label>

        <button>Cadastrar Vídeo</button>
      </form>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria