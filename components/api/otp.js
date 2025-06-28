export async function sendotp(data) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const origin = data.origin || (typeof window !== "undefined" ? window.location.origin : "");

  try {
    const response = await fetch(`${baseUrl}/api/otp/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': origin
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to send OTP');
    }
    const result = await response.json();
    return result;
  } 
  
  catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

export async function verifyotp(data) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const origin = data.origin || (typeof window !== "undefined" ? window.location.origin : "");

  try {
    const response = await fetch(`${baseUrl}/api/otp/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': origin
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to verify OTP');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}