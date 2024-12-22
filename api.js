const API_URL = process.env.REACT_APP_API_URL;

export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(`Ошибка при POST запросе на ${endpoint}:`, error);
  }
};
