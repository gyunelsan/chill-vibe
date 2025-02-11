import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PevArrow from "./PevArrow";
import NextArrow from "./NextArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PevArrow className="translate-x-56" />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const item1 = {
    image:
      "https://cdn.closed.com/generated/product/5/768_1152_85_webp/C94422-25E-22-914.jpg",
    title: "BROWN SHIRT",
    price: "$55.00",
  };
  const item2 = {
    image:
      "https://cdn.closed.com/generated/product/5/768_1152_85_webp/CYY271-04Q-4F-MBL.jpg",
    title: "DENIM WIDE LEG PANTS",
    price: "$65.00",
  };
  const item3 = {
    image:
      "https://cdn.closed.com/generated/product/1/768_1152_85_webp/C97328-355-22-914.jpg",
    title: "BROWN BLAZER JACKET",
    price: "$50.00",
  };
  const item4 = {
    image:
      "https://cdn.closed.com/generated/product/5/768_1152_85_webp/C94432-28N-22-108.jpg",
    title: "COTTON WHITE SHIRT",
    price: "$70.00",
  };
  const item5 = {
    image:
      "https://cdn.closed.com/generated/product/5/768_1152_85_webp/C99502-83V-22-201.jpg",
    title: "BEIGE FLATS",
    price: "$95.00",
  };
  const item6 = {
    image:
      "https://cdn.closed.com/generated/product/7/768_1152_85_webp/C90432-88H-22-100.jpg",
    title: "BLACK BAG",
    price: "$55.00",
  };
  const item7 = {
    image:
      "https://cdn.closed.com/generated/product/6/768_1152_85_webp/C97328-54G-22-998.jpg",
    title: "BEIGE BLAZER JACKET",
    price: "$55.00",
  };
  const item8 = {
    image:
      "https://cdn.closed.com/generated/product/5/768_1152_85_webp/C94375-23K-ST-529.jpg",
    title: "BLUE SHIRT",
    price: "$55.00",
  };
  const item9 = {
    image:
      "https://cdn.closed.com/generated/product/5/768_1152_85_webp/C98043-921-22-100.jpg",
    title: "BASIC TRIKO DRESS",
    price: "$55.00",
  };

  const sellingItems = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
  ];

  return (
    <div className="py-24">
      <h1 className="uppercase hover:underline text-4xl lg:ml-[11%] xl:ml-[11%] lg:text-start xl:text-start sm:text-center xm:text-center sm:ml-0 xm:ml-0">
        SHOP
      </h1>
      <div className="flex gap-1 flex-wrap w-full mt-10 items-center">
        <Slider {...settings} className="w-[80%] mx-auto z-0">
          {sellingItems.map((item, index) => (
            <li key={index} className="list-none w-[20%] mx-auto px-4">
              <div>
                <img
                  src={item.image}
                  height={300}
                  width={400}
                  alt="image2"
                  className="transition-transform hover:scale-95"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />

                <FontAwesomeIcon
                  icon={faHeart}
                  className={`${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  } p-1 absolute
                            z-50 ml-5 top-8 h-7 w-auto bg-white transition-opacity rounded`}
                  color="#F72C5B"
                />
              </div>
              <a href="#">{item.title}</a>
              <p>{item.price}</p>
              <button>ADD TO CART</button>
            </li>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
