import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ItemCard from "../../ItemCard";
import "./AllProductPage.css";
import ProductData from "../../ProductData";

const AllProductPage = () => {
  let allProducts = [];
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";

  ProductData.map((typeProduct)=> {
    let type = typeProduct.type;
    typeProduct.products.forEach((product)=> {
      product.type = type;
    })
    allProducts = [...allProducts, ...typeProduct.products]
  })

  console.log(allProducts)
 
  
  return (
    <div>
      <Navbar backgroundColor={lightPurple} />
      <section id="prints-page">
        <h2>Prints</h2>
        <div className="prints-container">
          {allProducts.map((product, index) => {
            const {name, price, imgSrc, productId, description, type} = product;
            return (
              <ItemCard
                type={type}
                size="small"
                imgSrc={imgSrc}
                price={price}
                name={name}
                productId={productId}
                description={description}
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

export default AllProductPage;
