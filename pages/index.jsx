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
      <div className="bg-[url('../images/BarberXS.svg')] lg:bg-[url('../images/Barber5.svg')] bg-cover bg-center	  bg-no-repeat">
        <Header />
        <Landing /> 
      </div>
      <Servicios/>
      <Galleria />
      <Reviews data={reviews} />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
