import Navbar from "../Navbar";
import Collection from "../Collection";
import Footer from "../Footer";

const CollectionPage = () => {
  const lightPurple = "#CBD3FF";
  const white = "#FFFFFF";
  const darkerPurple = "#8C85DC";
  return (
    <div>
      <Navbar backgroundColor={lightPurple}/>
      <Collection backgroundColor={white} />
      <Footer backgroundColor={lightPurple} iconColor={darkerPurple}/>
    </div>
  );
};

export default CollectionPage;
