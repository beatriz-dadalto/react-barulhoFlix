import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleSetFormValues, formValues } = useForm({
    titulo: 'título padrao',
    url: 'https://www.youtube.com/watch?v=jXZAbnn1kTU',
    categoria: 'Scena',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Vídeo cadastrado com sucesso!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === formValues.categoria);

        videosRepository.create({
          titulo: formValues.titulo,
          url: formValues.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('cadastrou com suzeso!');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handleSetFormValues}
        />

        <FormField
          label="URL"
          name="url"
          value={formValues.url}
          onChange={handleSetFormValues}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={formValues.categoria}
          onChange={handleSetFormValues}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar Vídeo
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
