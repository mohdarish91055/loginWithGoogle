import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Google from "./components/Google";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="goole-clientId">
        <Google></Google>
      </GoogleOAuthProvider>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<GoogleAuthWrapper />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
