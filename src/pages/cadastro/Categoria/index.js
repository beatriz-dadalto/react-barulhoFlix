import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

const CadastroCategoria = () => {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  // react state
  const [categorias, setCategorias] = useState([]);
  const [formValues, setFormValues] = useState(valoresIniciais);

  function setFormValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor // nome: 'valor
    })
  }

  const handleSetFormValues = (eventInfo) => {
    setFormValues(eventInfo.target.value);
    setFormValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  }

  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();
    setCategorias([...categorias, formValues]);

    setFormValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {formValues.nome}</h1>

      <form onSubmit={handleSubmit}>
        
        <FormField label="Nome da categoria" type="text" name="nome" value={formValues.nome} onChange={handleSetFormValues}/>
        <FormField label="Descrição" type="text" name="descricao" value={formValues.descricao} onChange={handleSetFormValues}/>
        <FormField label="Cor" type="color" name="cor" value={formValues.cor} onChange={handleSetFormValues}/>

        <button>Cadastrar Vídeo</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
          <li key={`${categoria}${index}`}>{categoria.nome}</li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria