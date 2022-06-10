import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Company from '../index';
import { QueryClientProvider, QueryClient } from 'react-query';
import * as MockReactRouterDom from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof MockReactRouterDom>('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('~services', () => ({
  companies: {
    fetchOne: () => ({ id: 1, name: 'Local Public Office', vatin: '500754012' }),
  },
  numbers: {
    fetchAll: () => [{ id: '351910000000', type: 'mobile', company_id: 1 }],
  },
}));

describe('ContainerHeader', () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    render(
      <Router>
        <QueryClientProvider client={queryClient}>
          <Company />
        </QueryClientProvider>
      </Router>
    );
  });

  it('should match snpashot', () => {
    const queryClient = new QueryClient();

    const container = render(
      <Router>
        <QueryClientProvider client={queryClient}>
          <Company />
        </QueryClientProvider>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    expect(screen.queryByRole('table')).toBeInTheDocument();
  });

  it('should render fetched info on table', async () => {
    expect(screen.queryByRole('table')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Local Public Office')).toBeInTheDocument();
      expect(screen.queryByText('351 910000000')).toBeInTheDocument();
    });
  });

  it('should navigate to company page', async () => {
    const user = userEvent.setup();

    await waitFor(() => {
      expect(screen.queryByText('351 910000000')).toBeInTheDocument();
    });

    user.click(screen.queryByText('351 910000000'));

    await waitFor(() => {
      expect(global.window.location.href).toContain('/number/351910000000');
    });
  });

  it('should navigate back', async () => {
    const user = userEvent.setup();

    user.click(screen.queryByRole('button', { name: 'Back' }));

    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith(-1);
    });
  });
});
