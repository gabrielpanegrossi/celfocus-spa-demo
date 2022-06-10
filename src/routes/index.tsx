import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Companies, Company, Number } from '~containers';
import { Layout } from '~components';

const Router = () => {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route index element={<Companies />} />
        <Route path='/company/:id' element={<Company />} />
        <Route path='/number/:id' element={<Number />} />
      </Route>
    </Routes>
  );
};

export default Router;
