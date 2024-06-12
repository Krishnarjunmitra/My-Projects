const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const sendEmail = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    return response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};