import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navswithlogo from "../components/Navswithlogo";
import Imagesec from "../components/Imagesec";
import FigComSec from "../components/FigComSec";
import LinksSec from "../components/LinksSec";


function Home() {
  return (
    <div>
      <Navswithlogo />
        <div className="bg-dark p-5">
          <Imagesec />
        </div>
        <FigComSec />
        <LinksSec />
    </div>
  )
}

export default Home
