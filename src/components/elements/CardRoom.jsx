import { Link } from "react-router-dom";

export default function CardRoom({ item, classNamesRatio, index }) {
  return (
    <div
      className={`relative card ${
        classNamesRatio.wrapper.default?.[item.ratio.default]
      } ${classNamesRatio.wrapper.md?.[item.ratio.md]}`}
      style={{ height: index === 0 ? 180 : "auto" }}
    >
      <div className="card-shadow rounded-xl">
        <img
          src={`img/${item.imageUrl}`}
          alt={item.title}
          className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl"
        />
      </div>
      <div
        className={`overlay flex flex-col justify-center ${
          classNamesRatio.wrapper.meta?.[item.ratio.md]
        }`}
      >
        <h5 className="text-lg font-semibold">{item.title}</h5>
        <span className="">
          {item.products.toLocaleString('id-ID')} item
          {item.products > 1 ? `s` : ``}
        </span>
      </div>
      <Link to={`/details/${item.id}`} className="stretched-link"></Link>
    </div>
  );
}
