import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import * as MockReactRouterDom from 'react-router-dom';
import Number from '../index';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof MockReactRouterDom>('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    error: undefined,
    data: { id: '351910000000', type: 'mobile', company_id: 1 },
  }),
}));

describe('ContainerHeader', () => {
  beforeEach(() => {
    render(
      <Router>
        <Number />
      </Router>
    );
  });

  it('should match snpashot', () => {
    const container = render(
      <Router>
        <Number />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    expect(screen.queryByRole('button', { name: 'Back' })).toBeInTheDocument();
  });

  it('should render fetched info on table', async () => {
    expect(screen.queryByRole('table')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('351 910000000')).toBeInTheDocument();
      expect(screen.queryByText('mobile')).toBeInTheDocument();
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
