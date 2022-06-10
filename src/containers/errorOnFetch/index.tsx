import React from 'react';
import { ContainerHeader } from '~components';
import * as Styled from './style';

function ErrorOnFetch() {
  return (
    <Styled.Container>
      <ContainerHeader title='Oops' needsBackButton />
      <Styled.Content>
        <Styled.ErrorMessage aria-label='error-message'>
          Seems that we have a problem communicating to the api server, please make sure you've set
          the correct url on the env file and try again.
        </Styled.ErrorMessage>
      </Styled.Content>
    </Styled.Container>
  );
}

export default ErrorOnFetch;
