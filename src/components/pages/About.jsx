import Header from "../Header";
import Footer from "../Footer";
import bioPic from "../../assets/bioPic.jpg";

export default function About() {
  return (
    <div>
      <Header></Header>
      <h1>About Page</h1>
      <p>
        Hello! My name is Yuval, I'm enrolled in the Fullstack Bootcamp. I live
        in NYC after a year of traveling the world. I have experience with
        information security and data analysis. This is my portfolio, featuring
        some of the work I have done :)
      </p>
      <img id="bioPic" src={bioPic} alt="picture" />
      {/* <bioPic></bioPic> */}
      <Footer></Footer>
    </div>
  );
}
