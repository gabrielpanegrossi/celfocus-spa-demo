import { render, screen, waitFor } from '@testing-library/react';
import Table from '../index';

describe('ContainerHeader', () => {
  beforeEach(() => {
    render(<Table />);
  });

  it('should match snpashot', () => {
    const container = render(<Table />);
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    expect(screen.queryByRole('table')).toBeInTheDocument();
  });
});
