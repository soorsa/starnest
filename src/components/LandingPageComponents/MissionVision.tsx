import React from "react";

const MISSON_AND_VISION = [
  {
    header: "Mission",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum is that it has a more-or-less normal.",
  },
  {
    header: "Vision",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum is that it has a more-or-less normal.",
  },
];

const MissionVision: React.FC = () => {
  return (
    <div className="bg-white py-10 px-5 grid">
      <div className="grid md:grid-cols-3 md:w-[80%] mx-auto">
        <div className="w-[70%] md:w-auto mx-auto md:mx-0">
          <img
            src="/assets/Personal finance-cuate.svg"
            alt=""
            className="h-full w-full aspect-square object-cover"
          />
        </div>

        <div className="md:col-span-2 text-left space-y-2 justify-self-end self-center">
          <h3 className="font-starnest-bold text-2xl md:text-4xl">
            Our{" "}
            <span className="text-orange-400">
              {MISSON_AND_VISION[0].header}
            </span>
          </h3>
          <p className="max-w-lg">{MISSON_AND_VISION[0].desc}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 md:w-[80%] mx-auto">
        <div className="md:col-span-2 text-left space-y-2 justify-self-start self-center">
          <h3 className="font-starnest-bold text-2xl md:text-4xl">
            Our{" "}
            <span className="text-orange-400">
              {MISSON_AND_VISION[1].header}
            </span>
          </h3>
          <p className="max-w-lg">{MISSON_AND_VISION[1].desc}</p>
        </div>

        <div className="w-[70%] md:w-auto mx-auto md:mx-0">
          <img
            src="/assets/Finance-amico.svg"
            alt=""
            className="h-full w-full aspect-square object-cover"
          />
        </div>
      </div>

      {/* {MISSON_AND_VISION.map((item) => (
        <div className="flex flex-row odd:flex-row-reverse items-center justify-between md:w-[80%] mx-auto">
          <div className="w-2/3 text-left space-y-2">
            <h3 className="font-starnest-bold text-2xl md:text-4xl">
              Our <span className="text-orange-400">{item.header}</span>
            </h3>
            <p className="max-w-lg">{item.desc}</p>
          </div>
          <div className="w-1/3">
            <img
              src="/assets/Personal finance-cuate.svg"
              alt=""
              className="h-full w-full aspect-square object-cover"
            />
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default MissionVision;
