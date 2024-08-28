export default function SkeletonRoom({ classNamesRatio }) {
  const data = [
    {
      id: 1,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
    {
      id: 2,
      ratio: {
        default: "1/9",
        md: "2/2",
      },
    },
    {
      id: 3,
      ratio: {
        default: "1/9",
        md: "2/3",
      },
    },
    {
      id: 4,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
  ];
  return data.map((item, index) => (
    <div
      key={item.id}
      className={`relative card ${
        classNamesRatio.wrapper.default?.[item.ratio.default]
      } ${classNamesRatio.wrapper.md?.[item.ratio.md]}`}
      style={{ height: index === 0 ? 180 : "auto" }}
    >
      <div className="w-full h-full bg-gray-300 card-shadow rounded-xl"></div>
      <div
        className={`overlay flex flex-col gap-2 justify-center ${
          classNamesRatio.wrapper.meta?.[item.ratio.md]
        }`}
      >
        <div className="h-3 bg-gray-400 rounded-sm w-36"></div>
        <span className="w-24 h-2 bg-gray-400 rounded-sm"></span>
      </div>
      <a href="details" className="stretched-link"></a>
    </div>
  ));
}
