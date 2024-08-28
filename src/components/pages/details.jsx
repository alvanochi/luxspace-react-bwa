import SiteMap from "../elements/SiteMap";
import Breadcrumb from "../elements/Breadcrumb";
import Suggestion from "../elements/Suggestion";
import Footer from "../elements/Footer";
import Product from "../elements/Product";
import Nav from "../elements/Nav";
import { useCallback, useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import { useNavigate, useParams } from "react-router-dom";
import Document from "../../hooks/Document";




export default function Details() {
  const {detailsID} = useParams();
  const navigate = useNavigate();

const [data, setData] = useState(null);
const fetchProducts = useCallback(async () => {
  try {
    const response = await fetchData({
      url: "/api/products/" + detailsID,
    });
    setData(response);
  } catch (e) {
    if(e) {
      navigate('/details')
    }
  }
}, []);

useEffect(() => {
  fetchProducts();

  return () => {
    setData(null);
  };
}, [fetchProducts]);
  return (
    <Document>
      <Nav theme={`dark`}  />
      <Breadcrumb
        list={[
          { url: "/", namePage: "Home" },
          { url: "/details", namePage: "Details" },
        ]}
      />
      <Product data={data} />
      <Suggestion data={data} />
      <SiteMap />
      <Footer />
    </Document>
  );
}
