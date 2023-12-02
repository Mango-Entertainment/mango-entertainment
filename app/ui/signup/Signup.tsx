"use client";

import Image from "next/image";
import Link from "next/link";
import {signInUser} from "@/firebase/firebase";
import {useRouter} from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

 const defaultFormFields = {
   email: "",
   password: "",
 };

const Signup = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const navigate = useRouter();

    const resetFormFields = () => {
      return setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        // Send the email and password to firebase
        const userCredential = await signInUser(email, password);

        if (userCredential) {
          resetFormFields();
          navigate.push("/profile");
        }
      } catch (error: any) {
        console.log("User Sign In Failed", error.message);
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value});
    };

  return (
    <div className="grid justify-items-center justify-center mt-12 md:mt-20">
      <Image
        className="mb-14 md:mb-20"
        src="/logo.svg"
        alt="icon"
        width={32}
        height={25.6}
      />
      <div className="bg-entertainment-semi-dark-blue rounded-xl md:rounded-3xl w-80 md:w-96 h-auto">
        <div className="p-6 md:p-8">
          <h1 className="text-entertainment-pure-white text-3xl mb-6 font-light">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="mb-3 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              required
            />
            <input
              className="mb-3 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              className="mb-10 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
              type="password"
              placeholder="Repeat Password"
              required
            />
            <button
              className="text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white w-full text-sm font-light bg-entertainment-red rounded-md h-12 mb-6"
              type="submit"
            >
              Create an account
            </button>
          </form>
          <p className="text-entertainment-pure-white text-sm text-center font-light">
            Already have an acccount?
            <Link className="text-entertainment-red ml-2" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
