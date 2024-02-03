import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';


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

test('Date input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const dateInput = screen.getByLabelText('Date');
  expect(dateInput).toHaveAttribute('required');
});

test('Time input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const timeInput = screen.getByLabelText('Choose time');
  expect(timeInput).toHaveAttribute('required');
});

test('Guests input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const guestsInput = screen.getByLabelText('Guests');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('placeholder', '-');
  expect(guestsInput).toHaveAttribute('required');
});

test('Occasion select has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const occasionSelect = screen.getByLabelText('Occasion (optional)');
  expect(occasionSelect).toHaveAttribute('name', 'occasion');
});

test('Name input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const nameInput = screen.getByLabelText('Full Name *');
  expect(nameInput).toHaveAttribute('type', 'text');
  expect(nameInput).toHaveAttribute('placeholder', 'Enter your name');
  expect(nameInput).toHaveAttribute('required');
});

test('Email input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const emailInput = screen.getByLabelText('Email *');
  expect(emailInput).toHaveAttribute('type', 'text');
  expect(emailInput).toHaveAttribute('placeholder', 'example@email.com');
  expect(emailInput).toHaveAttribute('required');
});

test('Telephone input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const telephoneInput = screen.getByLabelText('Telephone (optional)');
  expect(telephoneInput).toHaveAttribute('type', 'tel');
  expect(telephoneInput).toHaveAttribute('placeholder', '+233000000000');
});

test('Request input has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm onUpdateFormData={() => {}} availableTimes={[]} onUpdateTimes={() => {}} />
    </BrowserRouter>
  );
  const requestInput = screen.getByLabelText('Special Requests (optional)');
  expect(requestInput).toHaveAttribute('type', 'text');
  expect(requestInput).toHaveAttribute('placeholder', 'Any special requirements');
});


