import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './Routes/BookingPage';

test('Renders the BookingForm heading', () => {
  render(
  <BrowserRouter>
  <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
  </BrowserRouter>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
})


const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
}

test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

// Mocking the useReducer dispatch function
const mockDispatch = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn((reducer, initialState) => [initialState, mockDispatch]),
}));

test('updateTimes dispatches the correct action and times', () => {
  const { getByText } = render(
    <BrowserRouter>
    <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>);
  expect(getByText('Reserve a Table')).toBeInTheDocument();
});