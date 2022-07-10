import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-foreground dark:bg-foreground-dark py-6 text-center mt-10">
      <div className="bg-foreground dark:bg-foreground-dark absolute bottom-11 left-1/2 h-30 w-30 p-4 sm:h-30 sm:w-30 rounded-full">
        <Link href="/">
          <a>
            <IoIosArrowUp size={30} />
          </a>
        </Link>
      </div>
      <p className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
        &copy; {new Date().getFullYear()}
        <span> MamadyKonte </span> - Tous les droits sont réservés.
      </p>
    </footer>
  );
};

export default Footer;
