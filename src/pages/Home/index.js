import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carrosel from '../../components/Carrousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  // http://localhost:3001/categorias?_embed=videos
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      }).catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <PageDefault paddingAll={0}>

        {dadosIniciais.length === 0
        && (
          <div>
            Carrengando...
          </div>
        )}

        {dadosIniciais.map((categoria, index) => {
          if (index === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription="Krisiun está aqui! - Gravado em 2020 no estúdio Family Mob (São Paulo, SP)"
                />

                <Carrosel ignoreFirstVideo category={dadosIniciais[0]} />
              </div>
            );
          }

          return (
            <Carrosel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

      </PageDefault>
    </>
  );
}

export default Home;
