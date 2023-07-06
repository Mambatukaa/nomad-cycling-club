import { ReactNode, ReactElement, FC } from "react";

interface IProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Section: FC<IProps> = ({
  children,
  title,
  description,
}): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="my-14 max-lg:px-5">
        <h1 className="text-5xl font-bold text-blue-primary leading-tight">{title}</h1>
        <p className="mt-4 text-lg text-black md:w-[485px] leading-snug">{description}</p>
      </div>

      <div className="mb-14 max-lg:px-5">{children}</div>
    </div>
  );
};

export default Section;
