# loginWithGoogle

## Help & Resources
- [Google Cloud Console] (https://console.cloud.google.com/welcome?inv=1&invt=AbxLNg&project=glossy-radio-459213-c3)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Youtube](https://youtu.be/a75PNthqQOI?si=0l3pJ99zmfEwlPaL)

## How It Works

### Overview
The application uses **Google OAuth2** for user authentication. When a user clicks "Login with Google," the frontend (React) redirects them to Google’s OAuth2 login page. Once authenticated, Google sends an authorization code to the backend, which exchanges it for an access token and user information.

### Backend (Node.js/Express)
1. The **Backend** receives the authorization code from the frontend.
2. It uses the Google OAuth2 API to get the user's Google profile data, including email and name.
3. The user’s profile is then either created or updated in the database (MongoDB).
4. A JWT (JSON Web Token) is created and sent back to the frontend, allowing the user to authenticate future requests.

### Frontend (React)
1. The **Frontend** uses the **Google Login Button** to trigger the OAuth flow.
2. After a successful login, the frontend receives the user’s profile and stores it in **localStorage**.
3. The user is then redirected to the dashboard, where their profile information is displayed.


