import { Route } from "react-router";
import Login from "../components/auth/login";

const AuthLayout = () => {
  return (
    <div>
      تسجيل الدخول
      <Route exact path="/auth/login" component={Login} />
    </div>
  );
};

export default AuthLayout;
