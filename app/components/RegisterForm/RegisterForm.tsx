"use client";

import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import { useGlobalState } from "@/app/context/GlobalProvider";
import RegisterUserDto from "@/app/data/dto/RegisterUserDto";

const RegisterForm = () => {
  const { registerUser }: any = useGlobalState();

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

    const user: RegisterUserDto = {
      username,
      email,
      password,
    };

    registerUser(user);
  };

  return (
    <form
      action="submit"
      className="relative h-full shadow-md rounded-2xl text-colorGrey1"
      onSubmit={handleFormSubmit}
    >
      <h2 className="text-xl font-semibold">Register Form</h2>

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
          name="createTask"
          className="submit_button bg-slate-300 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-slate-300 hover:border-slate-300"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
