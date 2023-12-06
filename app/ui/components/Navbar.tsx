"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import {onAuthStateChanged} from "@/firebase/auth";
import {useRouter} from "next/navigation";
import {User} from "firebase/auth";



function useUserSession(initialUser: User | null) {
  // The initialUser comes from the server via a server component
  const [user, setUser] = useState(initialUser);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (user === undefined) return;

      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user;
}

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-1 lg:h-screen lg:grid-rows-3 lg:place-items-start bg-entertainment-semi-dark-blue items-center md:mx-6 md:w-auto md:mt-6 md:rounded-xl lg:max-h-[960px] h-auto w-full lg:w-24">
      <div className="w-6 h-5 my-4 ml-4 lg:ml-0 md:ml-6 md:my-6 md:w-8 md:h-6 lg:mt-8 lg:justify-self-center">
        <Image className="" src="/logo.svg" alt="icon" width={32} height={25} />
      </div>
      <div className="flex lg:flex-col justify-between lg:justify-self-center lg:justify-around lg:h-full h-4">
        <Image
          className="h-4 w-4"
          src="/icon-nav-home.svg"
          alt="icon"
          width={20}
          height={20}
        />
        <Image
          className="h-4 w-4"
          src="/icon-nav-movies.svg"
          alt="icon"
          width={20}
          height={20}
        />
        <Image
          className="h-4 w-4"
          src="/icon-nav-tv-series.svg"
          alt="icon"
          width={20}
          height={20}
        />
        <Image
          className="h-4 w-4"
          src="/icon-nav-bookmark.svg"
          alt="icon"
          width={20}
          height={20}
        />
      </div>
      <div className="flex justify-end lg:justify-self-center lg:self-end">
        <Image
          className="w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-6 lg:mr-0 lg:w-10 lg:h-10 lg:mb-8 w-6 h-6 border-entertainment-pure-white border-2 rounded-full"
          src="/image-avatar.png"
          alt="icon"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Navbar;
