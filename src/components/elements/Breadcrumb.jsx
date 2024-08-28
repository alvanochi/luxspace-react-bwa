import { Link } from "react-router-dom";

const Breadcrumb = ({ list }) => {
  return (
    <section className="px-4 py-8 bg-gray-100">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map((e, i) => {
            const arias =
              i === list?.length ? { "aria-label": "current-page" } : {};
            return (
              <li key={e.url} {...arias}>
                <Link to={e.url}>{e.namePage}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
