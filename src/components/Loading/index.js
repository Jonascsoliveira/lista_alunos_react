import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

// eslint-disable-next-line react/prop-types
export default function Loading({ isLoading }) {
  if (!isLoading) return <> </>;

  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

// eslint-disable-next-line react/no-typos
Loading.PropTypes = {
  isLoading: PropTypes.bool,
};
