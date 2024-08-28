export const Loading = () => (Array(6).fill().map((_, index) => (
  <div key={index} className="w-48 h-48 rounded-lg bg-slate-300"></div>
    ))
  )



const Suggestion = ({data}) => {
  return (
    <section className="px-4 py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex mb-4 flex-start">
          <h3 className="text-2xl font-semibold capitalize">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className={`flex mb-4 -mx-3 overflow-x-auto ${!data ? `flex-wrap gap-4 px-4` : ``}`}>
          {data ? data.relatedProducts.map((item) => (
          <div key={item.id} className="flex-none px-3" style={{ width: 320 }}>
            <div className="relative p-4 pb-8 bg-white rounded-xl">
              <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h5 className="mt-4 text-lg font-semibold">{item.title}</h5>
              <span className="">IDR {item.price.toLocaleString()}</span>
              <a href={`/details/${item.id}`} className="stretched-link"></a>
            </div>
          </div>
            
          ))
        :
          (
            <Loading />
          )
        }
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
