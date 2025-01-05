import React from "react";

import i1 from "../assets/image/1.jpg";
import i2 from "../assets/image/2.jpg";
import i3 from "../assets/image/3.jpeg";
import i4 from "../assets/image/4.jpeg";
import i5 from "../assets/image/5.jpeg";
import i6 from "../assets/image/6.jpeg";
import i7 from "../assets/image/7.jpeg";
import i8 from "../assets/image/8.jpeg";
import i9 from "../assets/image/9.jpeg";
import i10 from "../assets/image/10.jpeg";
import i11 from "../assets/image/11.jpg";
import i12 from "../assets/image/12.jpeg";
import i13 from "../assets/image/13.jpeg";
import i14 from "../assets/image/14.jpg";
import i15 from "../assets/image/15.jpg";
import i16 from "../assets/image/16.jpg";
import i17 from "../assets/image/17.jpeg";
import i18 from "../assets/image/18.jpg";
import i19 from "../assets/image/19.jpeg";
import i20 from "../assets/image/20.jpg";
import i21 from "../assets/image/21.jpeg";
import i22 from "../assets/image/22.jpg";
import i23 from "../assets/image/23.jpg";
import i24 from "../assets/image/24.jpg";
import i25 from "../assets/image/25.jpg";
import i26 from "../assets/image/26.jpeg";








import Marquee from "react-fast-marquee";

const Ss = () => {
  const images = [
    i1, i2, i3, i4, i5, i6, i7, i8, i9,
    i10, i11, i12, i13, i14, i15, i16, i17, i18, i19,
    i20, i21, i22, i23, i24, i25, i26,
];


  return (
    <div className="w-full bg-transparent overflow-hidden relative mt-8">
      <Marquee gradient={false} autoFill pauseOnHover speed={40} direction="left"
  gradientColor={[255, 255, 255]}
  gradientWidth={50}
  pauseOnClick={true}
  loop={0}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="h-52 w-52 mx-4 object-cover rounded-md"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Ss;
