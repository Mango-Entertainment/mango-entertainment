import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="grid justify-items-center justify-center mt-12 md:mt-20">
      <Image
        className="mb-14 md:mb-20"
        src="/logo.svg"
        alt="icon"
        width={32}
        height={25.6}
      />
      <div className="bg-entertainment-dark-blue rounded-xl md:rounded-3xl w-80 md:w-96 h-auto">
        <div className="p-6 md:p-8">
          <h1 className="text-entertainment-white text-3xl mb-6 font-light">
            Login
          </h1>
          <form>
            <input
              className="mb-3 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-battleship-grey text-entertainment-white caret-entertainment-red font-light focus:border-entertainment-white"
              type="text"
              placeholder="Email address"
            />
            <input
              className="mb-10 h-37 text-sm pl-4 block w-full bg-transparent pb-4 border-0 border-b-2 border-entertainment-battleship-grey text-entertainment-white caret-entertainment-red font-light focus:border-entertainment-white"
              type="password"
              placeholder="Password"
            />
            <button className="text-entertainment-white hover:text-entertainment-black hover:bg-entertainment-white w-full text-sm font-light bg-entertainment-red rounded-md h-12 mb-6">
              Login to your account
            </button>
          </form>
          <p className="text-entertainment-white text-sm text-center font-light">
            Don't have an acccount?
            <Link className="text-entertainment-red ml-2" href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
