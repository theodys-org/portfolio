import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-x-5">
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="firstName" className="font-semibold">
            Firstname
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className=" border-2 p-2 rounded-md"
            {...register("firstName", {
              required: "First name is required",
              //   minLength: 2,
            })}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="lastName" className="font-semibold">
            Lastname
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your lastname"
            className=" border-2 p-2 rounded-md"
            {...register("lastName", {
              required: "Last name is required",
              minLength: 2,
            })}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className=" border-2 p-2 rounded-md"
          {...register("email", { required: "Email is required" })}
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
          placeholder="Enter your password"
          className="border-2 p-2 rounded-md"
          {...register("password", {
            required: "Password is required",
            minLength: 8,
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-white w-full p-2 rounded-md font-semibold"
      >
        Signup
      </button>
      <div className="flex gap-x-2 w-full text-center justify-center">
        <p>Already have an account?</p>
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
