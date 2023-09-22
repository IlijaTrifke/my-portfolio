// next image
import Image from "next/image";

// next link
import Link from "next/link";

//components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 ">
          {/*logo */}
          <Link href={"/"}>
            <h1 className="h1 font-bold m-auto">
              Ilija <span className="text-3xl/3 font-medium">Trifunović</span>
              <span className="text-accent">.</span>
            </h1>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
