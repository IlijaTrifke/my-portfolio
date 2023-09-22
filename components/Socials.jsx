// links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
