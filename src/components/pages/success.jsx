import SiteMap from "../elements/SiteMap";
import Breadcrumb from "../elements/Breadcrumb";
import Congrats from "../elements/Congrats";
import Footer from "../elements/Footer";
import Nav from "../elements/Nav";

export default function Success() {
  return (
    <>
      <Nav />
      <Breadcrumb
        list={[
          { url: "/", namePage: "Home" },
          { url: "#", namePage: "Success Checkout" },
        ]}
      />
      <Congrats />
      <SiteMap />
      <Footer />
    </>
  );
}
