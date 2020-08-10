import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleSetFormValues, formValues, clearForm } = useForm(valoresIniciais);

  // react state
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3001/categorias'
      : 'https://barulhoflix-rockmusic.herokuapp.com/categorias';

    fetch(URL)
      .then(async (response) => {
        const resp = await response.json();
        setCategorias([...resp]); // lembre-se: setCategorias ta usando o useState
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          formValues,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={formValues.nome}
          onChange={handleSetFormValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={formValues.descricao}
          onChange={handleSetFormValues}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={formValues.cor}
          onChange={handleSetFormValues}
        />

        <Button>
          Cadastrar Categoria
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
