import Image from "next/image";

import services from "@/app/_data/home/services.json";
import SwipeLeftToRight from "../swipe-left-right";
import SwipeRightToLeft from "../swipe-right-left";

const Services = () => {
  return (
    <section>
      <h2 className="text-heading text-center mb-10">Services</h2>
      <ul className="font-quicksand flex flex-wrap gap-x-16 gap-y-10 justify-center overflow-hidden">
        {services.map(({ icon, title, list, delay }, index) => (
          <li key={index}>
            {index % 2 ? (
              <SwipeRightToLeft delay={delay} key={index}>
                <ul className="grid grid-cols-[100px_150px] phoneSmall:grid-cols-[138px_175px] grid-rows-[100px_25px] gap-x-12 border-b-2 border-blue pb-6">
                  <li
                    key={index}
                    className="translate-y-2 w-[75px] h-[65px] phoneSmall:w-[90px] phoneSmall:h-[80px]"
                  >
                    <Image
                      src={icon}
                      alt={`${title} icon`}
                      width={110}
                      height={110}
                      className="h-full"
                    />
                  </li>
                  <li className="text-[1.1rem] smallPhone:text-paragraph font-extralight row-span-2">
                    <ul className="list-disc">
                      <li key={index}>{list?.first}</li>
                      <li>{list?.second}</li>
                      <li>{list?.third}</li>
                      {list.fourth && <li>{list?.fourth}</li>}
                      {list.fifth && <li>{list?.fifth}</li>}
                    </ul>
                  </li>
                  <li className="text-[1.175rem] phoneSmall:text-subheading font-medium translate-y-[3.5px] phoneSmall:translate-y-[2.5px]">
                    {title}
                  </li>
                </ul>
              </SwipeRightToLeft>
            ) : (
              <SwipeLeftToRight delay={delay} key={index}>
                <ul className="grid grid-cols-[95px_150px] phoneSmall:grid-cols-[138px_175px] grid-rows-[100px_25px] gap-x-12 border-b-2 border-blue pb-6">
                  <li
                    key={index}
                    className="translate-y-2 w-[75px] h-[65px] phoneSmall:w-[90px] phoneSmall:h-[80px]"
                  >
                    <Image
                      src={icon}
                      alt={`${title} icon`}
                      width={110}
                      height={110}
                      className="h-full"
                    />
                  </li>
                  <li className="text-[1.1rem] smallPhone:text-paragraph font-extralight row-span-2">
                    <ul className="list-disc">
                      <li key={index}>{list?.first}</li>
                      <li>{list?.second}</li>
                      <li>{list?.third}</li>
                      {list.fourth && <li>{list?.fourth}</li>}
                      {list.fifth && <li>{list?.fifth}</li>}
                    </ul>
                  </li>
                  <li className="text-[1.175rem] phoneSmall:text-subheading font-medium translate-y-[3.5px] phoneSmall:translate-y-[2.5px]">
                    {title}
                  </li>
                </ul>
              </SwipeLeftToRight>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
