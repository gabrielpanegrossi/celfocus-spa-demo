import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './style';

function Layout() {
  return (
    <Styled.Layout>
      <Outlet />
    </Styled.Layout>
  );
}

export default Layout;
