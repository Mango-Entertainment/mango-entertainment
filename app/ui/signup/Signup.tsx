import Image from "next/image"
import Link from "next/link";

const Signup = () => {
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
          <form>
            <input
              className="mb-3 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
              type="text"
              placeholder="Email address"
            />
            <input
              className="mb-3 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
              type="password"
              placeholder="Password"
            />
            <input
              className="mb-10 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
              type="password"
              placeholder="Repeat Password"
            />
            <button className="text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white w-full text-sm font-light bg-entertainment-red rounded-md h-12 mb-6">
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
}

export default Signup