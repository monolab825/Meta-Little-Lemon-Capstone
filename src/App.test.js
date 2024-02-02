import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';


test('Renders the BookingForm heading', () => {
  render(
  <BrowserRouter>
  <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
  </BrowserRouter>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
})

const availableTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
}

test('availableTimes returns the correct expected value', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  const result = availableTimes();
  expect(result).toEqual(expectedTimes);
});

