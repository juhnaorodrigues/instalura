import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import Button from '../../Button';
import Text from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';

export default function Menu({ onCadastrarClick }) {
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
        <Button styleButton="ghost" variant="secondary.main" href="/app/login">Entrar</Button>
        <Button styleButton="primary" variant="primary.main" onClick={onCadastrarClick}>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
