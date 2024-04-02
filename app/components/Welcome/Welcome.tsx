import Link from "next/link";

const Welcome = () => (
  <>
    <div className="flex flex-col gap-12 h-full justify-center m-auto items-center">
      <h1 className="text-2xl font-bold text-colorGrey0">
        Welcome to To-Do application
      </h1>
      <div>
        <h2 className="text-xl text-colorGrey2">
          Please{" "}
          <span className="text-colorGrey0 underline">
            <Link href="/auth/login">Login</Link>
          </span>
          {" or "}
          <span className="text-colorGrey0 underline">
            <Link href="/auth/register">Register</Link>
          </span>
        </h2>
      </div>
    </div>
  </>
);

export default Welcome;
