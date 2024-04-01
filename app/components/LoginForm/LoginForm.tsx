"use client";

import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/app/context/GlobalProvider";
import LoginUserDto from "@/app/data/dto/LoginUserDto";

const RegisterForm = () => {
  const { loginUser, toggleLoggedIn }: any = useGlobalState();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const options: Record<string, Dispatch<SetStateAction<any>>> = {
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

    const user: LoginUserDto = {
      email,
      password,
    };

    loginUser(user);

    router.push("/home");
  };

  return (
    <form
      action="submit"
      className="relative h-full shadow-md rounded-2xl text-colorGrey1"
      onSubmit={handleFormSubmit}
    >
      <h2 className="text-xl font-semibold">Login Form</h2>

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

      <div className="flex justify-end">
        <button
          type="submit"
          className="submit_button bg-slate-300 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-slate-300 hover:border-slate-300"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
