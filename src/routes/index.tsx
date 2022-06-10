import { Routes, Route, NavigateFunction, useNavigate } from 'react-router-dom';
import { Companies, Company, Number, ErrorOnFetch } from '~containers';
import { Layout } from '~components';

export let navigate: NavigateFunction;

const Router = () => {
  navigate = useNavigate();

  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route index element={<Companies />} />
        <Route path='/company/:id' element={<Company />} />
        <Route path='/number/:id' element={<Number />} />
        <Route path='/error/data-fetching' element={<ErrorOnFetch />} />
      </Route>
    </Routes>
  );
};

export default Router;
