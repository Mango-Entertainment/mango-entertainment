"use client";

import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState, FormEvent, ChangeEvent} from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [passwordOne, setPasswordOne] = useState<string>("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);


  return (
    <div className="justify-center mt-12 grid justify-items-center md:mt-20">
      <Image
        className="mb-14 md:mb-20"
        src="/logo.svg"
        alt="icon"
        width={32}
        height={25.6}
      />
      <div className="h-auto bg-entertainment-semi-dark-blue rounded-xl md:rounded-3xl w-80 md:w-96">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
            Login
          </h1>
          <form>
            <input
              className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              type="password"
              placeholder="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={(event) => setPasswordOne(event.target.value)}
              required
            />
            <button
              className="w-full h-12 mb-6 text-sm font-light text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white bg-entertainment-red rounded-md"
              type="submit"
            >
              Login to your account
            </button>
          </form>
          <p className="text-sm font-light text-center text-entertainment-pure-white">
            Don&apos;t have an acccount?
            <Link className="ml-2 text-entertainment-red" href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
