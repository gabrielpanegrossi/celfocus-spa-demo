import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  padding: 20px 0 50px;
`;

export const Content = styled.div`
  width: 33%;
  min-width: 100%;
  min-height: 40px;
`;

export const BackButton = styled.button`
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 3px #000;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: #036c86;
    color: #fff;
    box-shadow: 0px 0px 5px #fff;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const H1 = styled.h1`
  margin: 0 auto;
  width: fit-content;
  font-weight: 700;
  font-size: 34px;
  min-height: 38px;
  color: #347b8b;
`;
