import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiCheckIfUsernameExists, apiSignUp } from "../services/auth";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await apiSignUp({
        firstName: data.firstName,
        lastName: data.lastName,
        otherNames: data.otherNames,
        email: data.email,
        userName: data.userName,
        password: data.password,
        confirmedPassword: data.password,
        termsAndConditions: data.termsAndConditions,
      });

      console.log("FORM SUBMISSION RESPONSE", res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const userNameWatch = watch("userName");

  const checkUsername = async (userName) => {
    try {
      const res = await apiCheckIfUsernameExists(userName);
      // if username does not exist user = null
      return res.data.user;
    } catch (error) {
      console.log("user name error", error);
    }
  };

  const debouncedSearch = debounce(async (searchTerm) => {
    const response = await checkUsername(searchTerm);
    if (response !== null) {
      setError("userName", {
        type: "manual",
        message: "Username already taken",
      });
      setIsUsernameValid(false);
    } else {
      setError("userName", undefined);
      setIsUsernameValid(true);
    }
  }, 500);

  useEffect(() => {
    const fetchUsernameValidity = async () => {
      if (userNameWatch) {
        await debouncedSearch(userNameWatch);
      } else {
        setIsUsernameValid(false);
        setError("userName", undefined);
      }
    };

    fetchUsernameValidity();

    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

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
      <div className="flex gap-x-5">
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="otherName" className="font-semibold">
            Other Name
          </label>
          <input
            id="otherName"
            type="text"
            placeholder="Enter other names"
            className=" border-2 p-2 rounded-md"
            {...register("otherName", {
              minLength: 2,
            })}
          />
          {errors.otherName && (
            <p className="text-red-500">{errors.otherName.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="userName" className="font-semibold">
            User name
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Pick a user name"
            className=" border-2 p-2 rounded-md"
            {...register("userName", {
              required: "Username is required",
              minLength: 2,
            })}
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
          {isUsernameValid && (
            <p className="text-green-500">User name is available!</p>
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
      <div>
        <input
          type="checkbox"
          id="termsAndConditions"
          {...register("termsAndConditions", {
            required: "Please check the box",
          })}
        />
        {errors.termsAndConditions && (
          <p className="text-red-500">{errors.termsAndConditions.message}</p>
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
