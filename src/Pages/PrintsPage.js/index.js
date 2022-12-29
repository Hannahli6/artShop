import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ItemCard from "../../ItemCard";
import "./PrintsPage.css";

const PrintsPage = ()=>{
  const lightPurple = "#CBD3FF";
  const darkerPurple = "#8C85DC";

  return(
    <div>
      <Navbar backgroundColor={lightPurple}/>
      <section id="prints-page">
        <h2>Prints</h2>
        <div className="prints-container">
          <ItemCard size="small" price={40} name="Animal Print"/>
          <ItemCard size="small" price={40} name="Animal Print"/>
          <ItemCard size="small" price={40} name="Animal Print"/>
          <ItemCard size="small" price={40} name="Animal Print"/>
        </div>
      </section>
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple}/>
    </div>
  )
}

export default PrintsPage;