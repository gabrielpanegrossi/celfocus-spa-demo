import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorOnFetch from '../index';

describe('ContainerHeader', () => {
  beforeEach(() => {
    render(
      <Router>
        <ErrorOnFetch />
      </Router>
    );
  });

  it('should match snpashot', () => {
    const container = render(
      <Router>
        <ErrorOnFetch />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    expect(screen.queryByRole('heading')).toBeInTheDocument();
    expect(screen.queryByLabelText('error-message')).toBeInTheDocument();
  });
});
