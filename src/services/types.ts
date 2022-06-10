export type Companies = {
  id: number;
  name: string;
  vatin: string;
}[];

export interface Company {
  id: number;
  name: string;
  vatin: string;
}

export type Numbers = {
  id: string;
  type: string;
  company_id: number;
}[];

export interface Number {
  id: string;
  type: string;
  company_id: number;
}
