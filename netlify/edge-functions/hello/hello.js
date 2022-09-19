export default async (request) => {
  const raccoons = get("count") * 2 || 2;
  console.log("There are now", raccoons, "raccoons 🦝");
  set("count", raccoons);
  return new Response(raccoons, {
    headers: { "content-type": "text/html" },
  });
};
