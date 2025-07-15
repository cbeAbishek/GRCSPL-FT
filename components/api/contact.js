export async function postcontactform(data) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to register contact form');
    }

    const result = await response.json();

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid response format');
    }
    return result;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

