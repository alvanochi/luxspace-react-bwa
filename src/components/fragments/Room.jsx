import { useCallback, useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import CardRoom from "../elements/CardRoom";
import SkeletonRoom from "../elements/SkeletonRoom";

const Room = () => {
  const [data, setData] = useState(null);
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetchData({
        url: "/api/categories/?page=1&limit=4",
      });
      setData(response);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    fetchProducts();

    return () => {
      setData(null);
    };
  }, [fetchProducts]);

  const classNamesRatio = {
    wrapper: {
      default: { "1/9": "col-span-9 row-span-1" },
      md: {
        "1/4": "md:col-span-4 md:row-span-1",
        "2/2": "md:col-span-2 md:row-span-2",
        "2/3": "md:col-span-3 md:row-span-2",
      },
      meta: {
        "1/9": "top-0 bottom-0 left-0 pl-48 md:pl-72",
        "1/4": "top-0 bottom-0 left-0 pl-48 md:pl-72",
        "2/2":
          "inset-0 pt-0 pl-48 md:bottom-auto md:items-center md:pl-0 md:pt-12",
        "2/3":
          "inset-0 pt-0 pl-48 md:bottom-auto md:items-center md:pl-0 md:pt-12",
      },
    },
  };

  return (
    <section className="flex px-4 py-16 bg-gray-100" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex mb-4 flex-start">
          <h3 className="text-2xl font-semibold capitalize">
            browse the room <br className="" />
            that we designed for you
          </h3>
        </div>
        <div className="grid grid-cols-9 grid-rows-2 gap-4">
          {data ? (
            data?.data.map((item, index) => (
              <CardRoom
                key={item.id}
                item={item}
                classNamesRatio={classNamesRatio}
                index={index}
              />
            ))
          ) : (
            <SkeletonRoom classNamesRatio={classNamesRatio} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Room;
