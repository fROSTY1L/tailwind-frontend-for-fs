export const fetchFromAPI = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных с API:', error);
      throw error;
    }
  };