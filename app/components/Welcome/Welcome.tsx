import Link from "next/link";

const Welcome = () => (
  <>
    <h1>Please login or register</h1>
    <Link href="/auth/login">Login</Link>
    <Link href="/auth/register">Register</Link>
  </>
);

export default Welcome;
