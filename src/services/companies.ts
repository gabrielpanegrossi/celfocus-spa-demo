import { DefaultApi } from './api';
import { Companies, Company } from './types';

export const fetchAll = () =>
  DefaultApi.request<Companies>('/companies', {
    method: 'GET',
  });

export const fetchOne = (id: string) =>
  DefaultApi.request<Company>(`/companies/${id}`, {
    method: 'GET',
  });
