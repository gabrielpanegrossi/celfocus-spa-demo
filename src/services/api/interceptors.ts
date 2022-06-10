import { AxiosResponse, AxiosError, Axios } from 'axios';
import { navigate } from '~routes';

export function handleSuccess(success: AxiosResponse) {
  return success;
}

export function handleError(error: AxiosError) {
  if (error.response.status < 400 || error.response.status >= 500) navigate('/error/data-fetching');
}
