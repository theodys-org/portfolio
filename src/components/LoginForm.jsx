import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className=" border-2 p-2 rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your password"
          className="border-2 p-2 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-white w-full p-2 rounded-md font-semibold"
      >
        Login
      </button>
      <div className="flex gap-x-2 w-full text-center justify-center">
        <p>Don&apos;t have an account?</p>
        <Link to="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
