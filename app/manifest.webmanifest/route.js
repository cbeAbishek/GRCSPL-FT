// app/manifest.webmanifest/route.js or route.ts

export const dynamic = 'force-static'; // ✅ This makes it export-safe

export function GET() {
  return new Response(
    JSON.stringify({
      name: "GRCSPL",
    short_name: "GRCSPL",
    description: "GRCSPL Application",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    icons: [
      {
        src: '/icon/app.jpg',
        sizes: '192x192',
        type: 'image/jpg',
      },
      {
        src: '/icon/app.jpg',
        sizes: '512x512',
        type: 'image/jpg',
      },
    ],    }),
    {
      headers: {
        'Content-Type': 'application/manifest+json',
      },
    }
  );
}
