import React from 'react';
import { FooterBase } from './styles';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/biacoelho">
        Github
      </a>
      <br />
      <a href="https://www.linkedin.com/in/biacoelho">
        Linkedin
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
