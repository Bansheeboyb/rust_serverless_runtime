export default async (request) => {
  const raccoons = 2 * 2 || 2;
  return new Response(raccoons, {
    headers: { "content-type": "text/html" },
  });
};
