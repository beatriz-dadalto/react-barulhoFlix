import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();

  const { handleSetFormValues, formValues } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Vídeo cadastrado com sucesso!');

        history.push('/');
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handleSetFormValues}
        />

        <FormField
          label="Título do vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handleSetFormValues}
        />

        <FormField
          label="Título do vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handleSetFormValues}
        />

        <Button type="submit">
          Cadastrar Vídeo
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
