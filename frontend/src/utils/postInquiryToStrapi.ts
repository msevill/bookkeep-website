import { API_BASE_URL } from '../config/api';

export async function postInquiryToStrapi({ name, email, phone, inquiry, service }: { name: string; email: string; phone: string; inquiry: string; service?: string | number }) {
  const response = await fetch(`${API_BASE_URL}/api/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add authorization if needed
    },
    body: JSON.stringify({ data: { name, email, phone, inquiry, service } }),
  });
  return response;
}
