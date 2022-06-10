import React from 'react';
import { Props } from './types';
import Skeleton from 'react-loading-skeleton';
import * as Styled from './style';

function Table({ titles, children, isLoading }: Props) {
  return (
    <Styled.Table>
      <thead>
        <tr>
          {isLoading ? (
            <>
              <th>
                <Skeleton width={'100%'} />
              </th>
              <th>
                <Skeleton width={'100%'} />
              </th>
            </>
          ) : (
            titles?.map((title, index) => <th key={index}>{title}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <>
            <tr>
              <td>
                <Skeleton count={5} width={'100%'} />
              </td>
              <td>
                <Skeleton count={5} width={'100%'} />
              </td>
            </tr>
          </>
        ) : (
          children
        )}
      </tbody>
    </Styled.Table>
  );
}

export default Table;
