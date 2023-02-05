import Image from "next/image";

import services from "../../data/home/services.json";
import SwipeLeftToRight from "../swipe-left-right";
import SwipeRightToLeft from "../swipe-right-left";

const Services = () => {
  return (
    <section>
      <h2 className="text-heading text-center mb-10">Services</h2>
      <ul className="font-quicksand flex flex-wrap gap-x-16 gap-y-16 justify-center">
        {services.map(({ icon, title, list, delay }, index) => (
          <>
            {index % 2 ? (
              <SwipeLeftToRight delay={delay} key={index}>
                <li>
                  <ul className="grid grid-cols-[138px_175px] grid-rows-[100px_25px_10px] gap-x-12">
                    <li key={index} className="translate-y-2 w-[90px] h-[80px]">
                      <Image
                        src={icon}
                        alt={`${title} icon`}
                        width={110}
                        height={110}
                        className="h-full"
                      />
                    </li>
                    <li className="text-paragraph font-extralight row-span-2">
                      <ul className="list-disc">
                        <li key={index}>{list?.first}</li>
                        <li>{list?.second}</li>
                        <li>{list?.third}</li>
                        {list.fourth && <li>{list?.fourth}</li>}
                        {list.fifth && <li>{list?.fifth}</li>}
                      </ul>
                    </li>
                    <li className="text-subheading font-medium translate-y-[2.5px]">
                      {title}
                    </li>
                    <li className="h-0.5 bg-blue w-full my-6 col-span-2"></li>
                  </ul>
                </li>
              </SwipeLeftToRight>
            ) : (
              <SwipeRightToLeft delay={delay} key={index}>
                <li>
                  <ul className="grid grid-cols-[138px_175px] grid-rows-[100px_25px_10px] gap-x-12">
                    <li key={index} className="translate-y-2 w-[90px] h-[80px]">
                      <Image
                        src={icon}
                        alt={`${title} icon`}
                        width={110}
                        height={110}
                        className="h-full"
                      />
                    </li>
                    <li className="text-paragraph font-extralight row-span-2">
                      <ul className="list-disc">
                        <li key={index}>{list?.first}</li>
                        <li>{list?.second}</li>
                        <li>{list?.third}</li>
                        {list.fourth && <li>{list?.fourth}</li>}
                        {list.fifth && <li>{list?.fifth}</li>}
                      </ul>
                    </li>
                    <li className="text-subheading font-medium translate-y-[2.5px]">
                      {title}
                    </li>
                    <li className="h-0.5 bg-blue w-full my-6 col-span-2"></li>
                  </ul>
                </li>
              </SwipeRightToLeft>
            )}
          </>
        ))}
      </ul>
    </section>
  );
};

export default Services;
