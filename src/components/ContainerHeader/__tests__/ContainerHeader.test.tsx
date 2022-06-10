import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as MockReactRouterDom from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ContainerHeader from '../index';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof MockReactRouterDom>('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ContainerHeader', () => {
  it('should match snpashot', () => {
    const container = render(
      <Router>
        <ContainerHeader />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render all html elements', () => {
    render(
      <Router>
        <ContainerHeader title='companies' needsBackButton />
      </Router>
    );

    expect(screen.queryByRole('heading')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Back' })).toBeInTheDocument();
  });

  it('should not render a the back button', () => {
    render(
      <Router>
        <ContainerHeader title='companies' />
      </Router>
    );

    expect(screen.queryByRole('heading')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
  });

  it('should navigate back', async () => {
    render(
      <Router>
        <ContainerHeader title='companies' needsBackButton />
      </Router>
    );

    const user = userEvent.setup();

    expect(screen.queryByRole('heading')).toBeInTheDocument();
    user.click(screen.queryByRole('button', { name: 'Back' }));

    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith(-1);
    });
  });
});
