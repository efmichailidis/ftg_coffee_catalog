export const config = {
  matcher: '/:path*', // Εφαρμόζεται σε όλες τις σελίδες
};

export default function middleware(request) {
  // Ορίστε το username και το password που θέλετε
  const USERNAME = 'ftg_user';
  const PASSWORD = '14y2uoafzkwo1wpenh42';

  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === USERNAME && pwd === PASSWORD) {
      // Αν τα στοιχεία είναι σωστά, άφησε το αίτημα να προχωρήσει
      return;
    }
  }

  // Αν δεν υπάρχουν στοιχεία ή είναι λάθος, ζήτα αυθεντικοποίηση
  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
