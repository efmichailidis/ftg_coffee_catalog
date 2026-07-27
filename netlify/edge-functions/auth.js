export default async (request, context) => {
  // Ορίστε το username και το password που θέλετε
  const USERNAME = "ftg_user";
  const PASSWORD = "14y2uoafzkwo1wpenh42";

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const auth = atob(authHeader.split(" ")[1]).split(":");
    const user = auth[0];
    const pass = auth[1];

    if (user === USERNAME && pass === PASSWORD) {
      return await context.next();
    }
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted Area"',
    },
  });
};
