const apiUrl = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';

// Fetch available times for a given date
export const fetchAPI = async (date) => {
  try {
    const response = await fetch(`${apiUrl}/available-times?date=${date}`);
    const data = await response.json();
    return data.availableTimes;
  } catch (error) {
    console.error('Error fetching available times:', error);
    return [];
  }
};

// Submit booking form data
export const submitAPI = async (formData) => {
  try {
    const response = await fetch(`${apiUrl}/submit-booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response.ok; // Returns true if the response status is OK (200-299)
  } catch (error) {
    console.error('Error submitting form data:', error);
    return false;
  }
};
