import Image from "next/image";
import Cover from "@/public/Cover.svg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFillBuildingFill } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="flex justify-center items-center max-w-[80%] bg-base-profile h-[35vh] sm:h-[25vh] mx-auto px-10 gap-0 sm:gap-8 shadow-md shadow-cyan-500/50 flex-wrap">
          <div className="flex-1 flex gap-2 flex-col justify-evenly items-center sm:flex-row sm:gap-5">
            <div className="flex h-[80px] mx-auto sm:h-[130px] w-[80px] sm:w-[130px] bg-white rounded-full sm:rounded-md"></div>
            <div className="flex-1 flex-col sm:h-[130px] flex justify-evenly gap-1">
              <div>
                <p className="text-base-title text-center sm:text-left text-[20px] sm:text-[24px] font-bold">
                  Muhammad Iqbal
                </p>
              </div>
              <div>
                <p className="text-base-text text-[15px] text-center sm:text-left w-[100%] sm:text-[16px]">
                  Writer, fulltime learning, and developer
                </p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start">
                <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1">
                    <AiFillGithub size={15} className="text-white" />
                    <Link href="https://github.com/iqbaladudu" target="_blank">
                      <p className="text-base-subtitle text-[15px]">
                        iqbaladudu
                      </p>
                    </Link>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BsFillBuildingFill size={15} className="text-white" />
                    <Link href="" target="_blank">
                      <p className="text-base-subtitle text-[15px]">
                        Cairo, EG
                      </p>
                    </Link>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <AiFillInstagram size={15} className="text-white" />
                    <Link
                      href="https://instagram.com/iqbal_adudu"
                      target="_blank"
                    >
                      <p className="text-base-subtitle text-[15px]">
                        iqbal_adudu
                      </p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
