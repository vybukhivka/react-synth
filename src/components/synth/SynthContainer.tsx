import { ReactNode } from 'react';

type SynthContainerProps = {
  children: ReactNode | ReactNode[];
};

function SynthContainer({ children }: SynthContainerProps) {
  return (
    <div className="h-[600px] w-[1064px] rounded-xl border">{children}</div>
  );
}

export default SynthContainer;
