import React from "react";
import Image from "next/image";

interface ParagrafoProps {
  title?: string;
  description?: string;
  number?: string;
  icon?: any;
}

const ParagrafoComponent: React.FC<ParagrafoProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          {icon ? (
            <Image
              src={icon}
              alt="Icon"
              width={20}
              height={20}
              className="object-contain"
            />
          ) : (
            <span className="text-blue-600 text-lg font-bold">
              {number}
            </span>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParagrafoComponent;