import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  min-width: 280px;
  width: 100%;
  max-width: 468px;
  padding-top: 24px;
`;

export const ErrorMessage = styled.p`
  width: fit-content;
  font-size: 20px;
`;
