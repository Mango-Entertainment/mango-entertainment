import Image from "next/image"
import Link from "next/link";

const Signup = () => {
  return (
    <div className="grid justify-items-center justify-center mt-[48px]">
      <Image
        className="mb-[58.4px]"
        src="/logo.svg"
        alt="icon"
        width={32}
        height={25.6}
      />
      <div className="bg-entertainment-dark-blue rounded-[10px] w-[327px] h-[420px]">
        <div className="p-[24px]">
          <h1 className="text-entertainment-white text-[32px] mb-6 font-light">
            Sign Up
          </h1>
          <form>
            <input
              className="mb-4 h-37 text-sm pl-4 block w-full bg-transparent pb-3 border-0 border-b-2 border-entertainment-battleship-grey text-entertainment-white caret-entertainment-red font-light focus:border-entertainment-white"
              type="text"
              placeholder="Email address"
            />
            <input
              className="mb-4 h-37 text-sm pl-4 block w-full bg-transparent pb-3 border-0 border-b-2 border-entertainment-battleship-grey text-entertainment-white caret-entertainment-red font-light focus:border-entertainment-white"
              type="password"
              placeholder="Password"
            />
            <input
              className="mb-10 h-37 text-sm pl-4 block w-full bg-transparent pb-3 border-0 border-b-2 border-entertainment-battleship-grey text-entertainment-white caret-entertainment-red font-light focus:border-entertainment-white"
              type="password"
              placeholder="Repeat Password"
            />
            <button className="text-entertainment-white w-full text-sm font-light bg-entertainment-red rounded-md h-12 mb-6">
              Create an account
            </button>
          </form>
          <p className="text-entertainment-white text-center font-light">
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