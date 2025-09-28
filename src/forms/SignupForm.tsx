import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../schemas/signupSchema";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(BASE_URL + "auth/register/", {
        username: data.username,
        email: data.email,
        password: data.password,
        helpText: data.helpText,
      });
      alert(response.data.message || "Signup successful!");
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const backendError = error.response.data;
        const msg =
          backendError.message || backendError.error || "Signup failed";
        setError("root", { message: msg });
      } else {
        setError("root", { message: "Signup failed" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto flex flex-col gap-4"
    >
      <div className="text-danger text-sm text-center min-h-[1rem]">
        {errors.root?.message}
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          {...register("username")}
          id="username"
          type="text"
          className="w-full"
        />
        {errors.username && (
          <p className="text-danger text-sm mt-1">{errors.username.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className="w-full"
        />
        {errors.email && (
          <p className="text-danger text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="w-full"
        />
        {errors.password && (
          <p className="text-danger text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
          className="w-full"
        />
        {errors.confirmPassword && (
          <p className="text-danger text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="helpText">Recovery Hint</label>
        <p className="text-sm">
          *This will help you recover your password if you forget it.
        </p>
        <input
          {...register("helpText")}
          id="helpText"
          type="text"
          className="w-full"
          placeholder="e.g., Your favourite colour"
        />
        {errors.helpText && (
          <p className="text-danger text-sm mt-1">{errors.helpText.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="button w-auto self-center mt-2"
        disabled={isLoading}
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}
