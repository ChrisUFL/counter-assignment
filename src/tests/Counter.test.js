// import necessary react testing library helpers here
import { fireEvent, render, screen } from "@testing-library/react"; 
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter></Counter>);
})

test('renders counter message', () => {
  expect(screen.getByText(/Counter/)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');

  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent('3');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count')).toHaveTextContent('-1');

  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count')).toHaveTextContent('-3');
});
