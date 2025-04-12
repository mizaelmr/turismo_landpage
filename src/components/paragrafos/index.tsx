import React from "react";
import Image from "next/image";

interface paragrafo {
  title?: string;
  description?: string;
  number?: string;
  icon?: any;
}

const ParagrafoComponent: React.FC<paragrafo> = ({ number, icon, title, description }) => {
  return (
    <div className="lg:mb-0">
      <div className="flex flex-row md:flex-col">
        <span className="rounded-xl mb-4 max-w-[47px] bg-[#c3d7f8] text-[#071e45] flex items-center justify-center px-3 pt-3 pb-2 text-center text-xl font-bold leading-0 tracking-wider mr-3">
          {icon ? (
            <Image
              src={icon}
              alt="Logo yourPilot"
              width={188}
              height={40}
              className="object-contain"
            />
          ) : (
            number
          )}
        </span>
        <div>
          <h3 className="text-lg text-black font-normal sm:text-xl max-w-[300px] text-base-text font-semibold md:max-w-[222px] tracking-wide mb-2 leading-6">
            {title}
          </h3>
          <span className="font-light font-normal sm:max-w-[400px] tracking-wide text-base block text-[#5C5F5A]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParagrafoComponent;