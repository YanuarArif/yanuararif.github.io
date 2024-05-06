import Image from "next/image";
import Link from "next/link";
// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 mx-auto flex items-center w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link
            href={"/"}
            className="flex h-full w-full justify-evenly md:justify-start">
            <Image
              src={"/logo-panti.png"}
              width={220}
              height={40}
              alt=""
              priority={true}
              className="h-[80px] w-[80px]"
            />
            <h1 className="text-primary flex flex-col text-center justify-center text-xl uppercase font-bold leading-none">
              Panti Asuhan <br /> Muhammadiyah Sokaraja
            </h1>
            <Image
              src={"/logo-muhammadiyah.png"}
              width={220}
              height={40}
              alt=""
              priority={true}
              className="h-[80px] w-[80px]"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
