import Adds from "@/components/Adds";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News from "@/components/News";

function Home() {
  return (
    <>
      <Navbar />
      <Adds />
      <News />
      <Card />
      <section id="Footer">
        <Footer />
      </section>
      
    </>
  );
}

export default Home;
