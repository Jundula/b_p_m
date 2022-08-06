import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Servicios from "../components/Servicios";
import Galleria from "../components/Galleria";
import Reviews from "../components/Reviews";
import Maps from "../components/Maps";
import Footer from "../components/Footer";
import { reviews } from "../reviews_data";
import bgXS from "../images/BarberXS.svg";
import bgB from "../images/Barber5.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   async function fetchReviews() {
  //     const { data } = await axios.get(
  //       `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJldaijTHBz4UR5nyFIbscRKE&key=AIzaSyDJRydMfHjRY-DibUmc10JZk0yRGJbBzWA`
  //     );
  //     console.log(data);
  //   }
  //   fetchReviews();
  // }, []);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative  ">
        <div>
          <div className="md:hidden">
            <Image
              src={bgXS}
              layout="fill"
              className="object-cover object-center   -z-20"
            />
          </div>
          <div className="hidden md:inline">
            <Image
              src={bgB}
              layout="fill"
              className=" object-cover object-center  -z-20"
            />
          </div>
        </div>
        <div className="relative z-10">
          <Header />
          <Landing />
        </div>
      </div>
      <Servicios />
      <Galleria />
      <Reviews data={reviews} />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
