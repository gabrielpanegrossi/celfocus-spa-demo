import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Companies from '../index';

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    error: undefined,
    data: [{ id: 1, name: 'Local Public Office', vatin: '500754012' }],
  }),
}));

describe('ContainerHeader', () => {
  beforeEach(() => {
    render(
      <Router>
        <Companies />
      </Router>
    );
  });

  it('should match snpashot', () => {
    const container = render(
      <Router>
        <Companies />
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
      expect(screen.queryByText('500754012')).toBeInTheDocument();
    });
  });

  it('should navigate to company page', async () => {
    const user = userEvent.setup();

    await waitFor(() => {
      expect(screen.queryByText('Local Public Office')).toBeInTheDocument();
    });

    user.click(screen.queryByText('Local Public Office'));

    await waitFor(() => {
      expect(global.window.location.href).toContain('/company/1');
    });
  });
});
