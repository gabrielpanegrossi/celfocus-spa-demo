import React from 'react';
import { useQuery } from 'react-query';
import { numbers } from '~services';
import { ContainerHeader, Table } from '~components';
import { useIdParam } from '~hooks';
import { FormatNumberId } from '~utils';
import * as Styled from './style';

function Number() {
  const numberId = useIdParam();

  const { isLoading, data } = useQuery(`fetchNumber${numberId}`, () => numbers.fetchOne(numberId), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Styled.Container>
      <ContainerHeader needsBackButton />
      <Styled.Content>
        <Table titles={['Number', 'Type']} isLoading={isLoading}>
          <tr>
            <td>{data?.id && FormatNumberId(data?.id)}</td>
            <td>{data?.type}</td>
          </tr>
        </Table>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Number;
