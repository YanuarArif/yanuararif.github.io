import Image from "next/image";
import Link from "next/link";
// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link href={"/work"}>
        <button className="capitalize btn btn-success text-white">
          sedang membutuhkan donasi segera!
        </button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
