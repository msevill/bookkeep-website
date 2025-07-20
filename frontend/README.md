# Next.js Website with Strapi CMS Integration

This project is a Next.js website that fetches header and footer content from a Strapi CMS. All code is modular and scalable for future entity additions.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Strapi CMS:**
   - Make sure your Strapi CMS is running at `http://localhost:1337`.
   - The frontend fetches header and footer content from `/api/header` and `/api/footer` endpoints.

## Customization

- Header and Footer components are in `src/components/Header.js` and `src/components/Footer.js`.
- To add more entities, create new components and fetch from Strapi endpoints as needed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
