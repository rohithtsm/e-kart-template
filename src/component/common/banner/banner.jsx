import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "./MasterBanner";
// import Link from "next/link";
// import { Container, Row, Col } from "reactstrap";

const Data = [
  {
    img: "home39",
    title: "save 10%",
    desc: "fresh vegetables",
    link: "#",
  },
  {
    img: "home38",
    title: "save upto 10%",
    desc: "fresh vegetables",
    link: "#",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
