import { login } from "../../assets";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="bg-primary flex items-center">
        <img src={login} alt="Login image" className="" />
      </div>
      <div className="flex flex-col justify-center gap-y-10 px-40 w-full">
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-3xl font-bold">Welcome Back</h3>
          <p>Enter your details below to login to your account</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
