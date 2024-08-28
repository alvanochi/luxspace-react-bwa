import { Link } from "react-router-dom";
import { illustrationSuccess } from "../../assets";

const Congrats = () => {
  return (
    <section>
      <div className="container min-h-screen mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center md:w-4/12">
            <img src={illustrationSuccess} alt="congrats illustration" />
            <h2 className="mb-6 text-3xl font-semibold">
              Ah yes it’s success!
            </h2>
            <p className="mb-12 text-lg">
              Furniture yang anda beli akan kami kirimkan saat ini juga so now
              please sit tight and be ready for it
            </p>
            <Link
              to={"/"}
              className="w-full px-8 py-3 text-lg text-gray-900 transition-all duration-200 bg-red-200 rounded-full cursor-pointer focus:outline-none focus:text-black"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Congrats;
