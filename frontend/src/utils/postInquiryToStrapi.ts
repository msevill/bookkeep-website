import { STRAPI_DOMAIN, STRAPI_BEARER } from '../config/strapi';

export async function postInquiryToStrapi({ name, email, phone, inquiry }: { name: string; email: string; phone: string; inquiry: string }) {
  const response = await fetch(`${STRAPI_DOMAIN}/api/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${STRAPI_BEARER}`,
    },
    body: JSON.stringify({ data: { name, email, phone, inquiry } }),
  });
  return response;
}
