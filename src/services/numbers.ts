import { DefaultApi } from './api';
import { Numbers, Number } from './types';

export const fetchAll = () =>
  DefaultApi.request<Numbers>('/phone_numbers', {
    method: 'GET',
  });

export const fetchOne = (numberId: string) =>
  DefaultApi.request<Number>(`/phone_numbers/${numberId}`, {
    method: 'GET',
  });
