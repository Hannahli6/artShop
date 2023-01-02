import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ItemCard from "../../ItemCard";
import "./PrintsPage.css";
import ProductData from "../../ProductData";

const PrintsPage = () => {
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";
  const products = ProductData.find((obj) => obj.type === "prints").products;
  const type = ProductData.find((obj) => obj.type === "prints").type;
  console.log(type);

  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section id="prints-page">
        <h2>Prints</h2>
        <div className="prints-container">
          {products.map((product, index) => {
            return (
              <ItemCard
                type={type}
                size="small"
                price={product.price}
                name={product.name}
                productId={product.productId}
                description={product.description}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple} />
    </div>
  );
};

export default PrintsPage;
