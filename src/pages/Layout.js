import React from 'react';
import FormContainer from './FormContainer';
import Container from '@material-ui/core/Container';

export default function Layout() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <FormContainer />
      </Container>
    </React.Fragment>
  );
}
