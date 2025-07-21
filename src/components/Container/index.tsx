import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  flexCol?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, flexCol }) => {
  return (
    <div className={`flex ${flexCol ? 'flex-row' : 'flex-col'} justify-center items-center max-w-[1224px] mx-auto py-12 lg:py-6 lg:justify-start`}>
      {children}
    </div>
  );
}

export default Container;