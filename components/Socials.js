import Link from "next/link";
// icons
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-primary">
      <Link
        href={"https://www.facebook.com/profile.php?id=61556897998435"}
        className="hover:text-accent transition-all duration-300">
        <FaFacebookSquare />
      </Link>
      <Link
        href={"https://www.instagram.com/pantiasuhanmuhskj"}
        className="hover:text-accent transition-all duration-300">
        <FaInstagram />
      </Link>
      <Link
        href={"https://www.tiktok.com/@pantiasuhanmuhskj"}
        className="hover:text-accent transition-all duration-300">
        <FaTiktok />
      </Link>
      <Link
        href={"https://youtube.com/@pantiasuhanmuhskj"}
        className="hover:text-accent transition-all duration-300">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default Socials;
