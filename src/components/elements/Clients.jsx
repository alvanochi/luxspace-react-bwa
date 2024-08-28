import { logoAdobe, logoHermanmiller, logoIkea, logoMiele } from "../../assets";

const Clients = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0">
          <img src={logoAdobe} alt="" className="mx-auto" />
        </div>
        <div className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0">
          <img src={logoIkea} alt="" className="mx-auto" />
        </div>
        <div className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0">
          <img src={logoHermanmiller} alt="" className="mx-auto" />
        </div>
        <div className="flex-auto w-full px-4 my-4 md:w-auto md:flex-initial md:px-6 md:my-0">
          <img src={logoMiele} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
