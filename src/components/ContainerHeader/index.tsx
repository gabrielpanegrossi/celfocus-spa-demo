import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Props } from './types';
import * as Styled from './style';

export function ContainerHeader({ title, needsBackButton }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Styled.Header>
      <Styled.Content>
        {needsBackButton && <Styled.BackButton onClick={handleClick}>Back</Styled.BackButton>}
      </Styled.Content>
      <Styled.Content>
        <Styled.H1>{title}</Styled.H1>
      </Styled.Content>
      <Styled.Content></Styled.Content>
    </Styled.Header>
  );
}

export default ContainerHeader;
