import SiteMap from "../elements/SiteMap";
import Breadcrumb from "../elements/Breadcrumb";
import Footer from "../elements/Footer";
import Nav from "../elements/Nav";
import ShoppingCart from "../elements/ShoppingCart";
import Document from "../../hooks/Document";

export default function Cart() {
  return (
    <Document>
      <Nav />
      <Breadcrumb
        list={[
          { url: "/", namePage: "Home" },
          { url: "#", namePage: "Shopping Cart" },
        ]}
      />
      <ShoppingCart />
      <SiteMap />
      <Footer />
    </Document>
  );
}
