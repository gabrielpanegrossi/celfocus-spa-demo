import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { companies } from '~services';
import { ContainerHeader, Table } from '~components';
import * as Styled from './style';

function Companies() {
  const titleArray = ['Company name', 'vatin'];

  const { isLoading, data } = useQuery('fetchCompanies', companies.fetchAll, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Styled.Container>
      <ContainerHeader title='Companies' />
      <Styled.Content>
        <Table titles={titleArray} isLoading={isLoading}>
          {data?.map((company) => (
            <tr key={company.vatin}>
              <td>
                <Link to={`/company/${company.id}`}>{company.name}</Link>
              </td>
              <td>{company.vatin}</td>
            </tr>
          ))}
        </Table>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Companies;
