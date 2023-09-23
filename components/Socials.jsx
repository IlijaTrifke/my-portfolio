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
      <Link
        href={"https://www.facebook.com/ilija.trifunovic.96"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://instagram.com/ilija_trifunoviic?igshid=NzZlODBkYWE4Ng=="}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/ilija-trifunovi%C4%87/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://github.com/IlijaTrifke"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
