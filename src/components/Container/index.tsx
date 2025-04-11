import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center max-w-[1224px] mx-auto space-x-24 py-12 lg:py-6 lg:justify-start">
      {children}
    </div>
  );
}

export default Container;