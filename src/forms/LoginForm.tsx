import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      await axios.post(BASE_URL + "auth/login/", {
        username: data.username,
        password: data.password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const backendError = error.response.data;
        const msg =
          backendError.message || backendError.error || "Login failed";
        setError("root", { message: msg });
      } else {
        setError("root", { message: "Login failed" });
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
      <button
        type="submit"
        className="button w-auto self-center mt-2"
        disabled={isLoading}
      >
        {isLoading ? "Logging In..." : "Login"}
      </button>
    </form>
  );
}
