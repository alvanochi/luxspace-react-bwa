import { useCallback, useEffect, useState, useRef } from "react";
import fetchData from "../../../fetchData";
import CardArrived from "../elements/CardArrived";
import SkeletonArrived from "../elements/SkeletonArrived";
import Carousel from "../elements/Carousel";

export default function Arrived() {
  const [data, setData] = useState(null);
  const refContainer = useRef();
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetchData({
        url: "/api/products/?page=1&limit=4",
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

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center mb-4 text-center">
          <h3 className="text-2xl font-semibold capitalize">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="px-4 overflow-x-hidden" id="carousel">
        <div ref={refContainer} className="container mx-auto"></div>
        {/* <div className="z-10 overflow-hidden"> */}
        <div
          className="relative flex flex-row -mx-4"
          // style={{
          //   paddingLeft:
          //     refContainer.current?.getBoundingClientRect?.()?.left - 16 || 0,
          // }}
        >
          {data ? (
            <Carousel refContainer={refContainer}>
              {data.data?.map((item) => (
                <CardArrived key={item.id} item={item} />
              ))}
            </Carousel>
          ) : (
            <div
              className="relative flex flex-row -mx-4"
              style={{
                paddingLeft:
                  refContainer.current?.getBoundingClientRect()?.left - 16 ||
                  40,
              }}
            >
              <SkeletonArrived />
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
