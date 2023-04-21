import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

function AuthRoutes() {

  return (
    <Routes>
      <Route path="login" element={<LoginPage></LoginPage>} />
      <Route path="register" element={<RegisterPage></RegisterPage>} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}

export default AuthRoutes;
