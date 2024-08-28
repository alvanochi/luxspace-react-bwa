import Hero from "../elements/Hero";
import SiteMap from "../elements/SiteMap";
import Nav from "../elements/Nav";
import Clients from "../elements/Clients";
import Footer from "../elements/Footer";
import Room from "../fragments/Room";
import Arrived from "../fragments/Arrived";
import Document from "../../hooks/Document";

export default function Home() {
  return (
    <Document>
      <Nav theme={`light`} position={`absolute`} />
      <Hero />
      <Room />
      <Arrived />
      <Clients />
      <SiteMap />
      <Footer />
    </Document>
  );
}
