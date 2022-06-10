import { useParams } from 'react-router-dom';

const useIdParam = () => {
  const params = useParams();

  return params.id;
};

export default useIdParam;
