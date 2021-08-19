import React from 'react';
import Logo from '../../../theme/Logo';
import Button from '../../Button';
import Text from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';

export default function Menu() {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },

  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((item) => (
          <li key={item.url}>
            <Text variant="smallestException" tag="a" href={item.url}>{item.texto}</Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button styleButton="ghost" variant="secondary.main">Entrar</Button>
        <Button styleButton="primary" variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
