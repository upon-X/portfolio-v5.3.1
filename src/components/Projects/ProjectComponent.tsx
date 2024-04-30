import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "../../context/TranslationContext";

// Mediante la prop paso el numero del index en el array que hay en content, entonces se renderiza el proyecto
type Props = {
  projectIndex: number;
};

export const ProjectComponent = ({ projectIndex }: Props) => {
  const { content, language } = useTranslation();
  return (
    <div className=" grid grid-cols-2 min-h-[400px]">
      <div className="flex flex-col items-start justify-center gap-3 p-10">
        <span className="flex gap-8 ">
          <p className="text-3xl font-semibold">
            {content?.projects[language].everyProject[projectIndex].title}
          </p>
          <a
            className="text-purple border-[1px] rounded-full text-xl flex justify-center items-center gap-1 font-normal transition-all py-1 px-3 hover:bg-purple hover:text-white hover:border-transparent"
            href={content?.projects[language].everyProject[projectIndex].deploy}
          >
            Deploy
            <div className="text-base">
              <FaArrowUpRightFromSquare />
            </div>
          </a>
        </span>
        <p className="text-xl">
          {content?.projects[language].everyProject[projectIndex].description}
        </p>
        <div className="flex justify-start gap-2 flex-wrap mt-4">
          {content?.projects[language].everyProject[
            projectIndex
          ].skillsUsed.map((skill: string, index: number) => (
            <span
              key={index}
              className="border-[2px] border-purple rounded-md text-lg py-1 px-2 font-semibold text-gray hover:bg-purple hover:text-white transition-all"
            >
              {skill}
              {index <
              content.projects[language].everyProject[projectIndex].skillsUsed
                .length -
                1
                ? " "
                : ""}
            </span>
          ))}
        </div>
      </div>
      <div className=" flex items-center ml-[-10rem] overflow-hidden">
        <img
          className="z-[-10]"
          src={content?.projects[language].everyProject[projectIndex].image}
        />
      </div>
    </div>
  );
};