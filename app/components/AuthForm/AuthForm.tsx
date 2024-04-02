"use client";

import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import Link from "next/link";
import { useGlobalState } from "@/app/context/GlobalProvider";
import RegisterUserDto from "@/app/data/dto/RegisterUserDto";
import LoginUserDto from "@/app/data/dto/LoginUserDto";
import ClockLoader from "../Loaders/ClockLoader/ClockLoader";

const REGISTER = "register";

interface AuthFormProps {
  type: "register" | "login";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const { registerUser, loginUser, isLoading }: any = useGlobalState();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const options: Record<string, Dispatch<SetStateAction<any>>> = {
    username: setUsername,
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange =
    (name: string) =>
    ({
      target,
    }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const setValue = options[name];
      setValue(target.value);
    };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: RegisterUserDto | LoginUserDto = {
      username: type === REGISTER ? username : undefined,
      email,
      password,
    };

    type === REGISTER ? registerUser(user) : loginUser(user);
  };

  return (
    <section className="m-auto">
      {isLoading?.auth && <ClockLoader />}
      <Link
        href="/"
        className="absolute top-20 left-20 text-colorGrey2 hover:text-colorGrey1 transition-all hover:underline"
      >
        Go back
      </Link>
      <form
        action="submit"
        className="relative h-full shadow-md rounded-2xl flex flex-col justify-center m-auto text-colorGrey1"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-xl font-semibold">
          {type === REGISTER ? "Register Form" : "Login Form"}
        </h2>

        {type === REGISTER ? (
          <div className="input_control">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              type="text"
              name="username"
              id="username"
              placeholder="Example username"
              onChange={handleInputChange("username")}
            />
          </div>
        ) : (
          ""
        )}
        <div className="input_control">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Example email"
            onChange={handleInputChange("email")}
          />
        </div>
        <div className="input_control">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Example password"
            onChange={handleInputChange("password")}
          />
        </div>

        <div className="flex justify-end mb-8">
          <button
            type="submit"
            disabled={isLoading?.auth ? true : false}
            className="submit_button bg-slate-300 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-slate-300 hover:border-slate-300 disabled:bg-gray-700 disabled:text-gray-600"
          >
            {type === REGISTER ? "Register" : "Login"}
          </button>
        </div>

        {type === REGISTER ? (
          <div className="text-colorGrey2">
            If you already have account{" "}
            <Link href="/auth/login" className="text-colorGrey0 underline">
              Login
            </Link>
          </div>
        ) : (
          <div className="text-colorGrey2">
            If you have no account{" "}
            <Link href="/auth/register" className="text-colorGrey0 underline">
              Register
            </Link>
          </div>
        )}
      </form>
    </section>
  );
};

export default AuthForm;
