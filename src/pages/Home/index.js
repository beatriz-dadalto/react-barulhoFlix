import React from 'react'
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carrosel from '../../components/Carrousel'
import Footer from '../../components/Footer'


function Home() {
  return (
    <React.Fragment>
      <div style={{ background: "#181818" }}>
        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Krisiun está aqui! - Gravado em 2020 no estúdio Family Mob (São Paulo, SP)"}
        />

        <Carrosel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
        <Carrosel category={dadosIniciais.categorias[1]} />
        <Carrosel category={dadosIniciais.categorias[2]} />
        <Carrosel category={dadosIniciais.categorias[3]} />
        <Carrosel category={dadosIniciais.categorias[4]} />
        <Carrosel category={dadosIniciais.categorias[5]} />
        <Carrosel category={dadosIniciais.categorias[6]} />
        <Carrosel category={dadosIniciais.categorias[7]} />
        <Carrosel category={dadosIniciais.categorias[8]} />
        <Carrosel category={dadosIniciais.categorias[9]} />
        <Carrosel category={dadosIniciais.categorias[10]} />

        <Footer />

      </div>
    </React.Fragment>
  );
}

export default Home;
