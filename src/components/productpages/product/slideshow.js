import React, { useState } from "react";
import classes from "./slideshow.module.css";
import Image from "next/image";
import SwiperCore, { Pagination, Navigation, Thumbs, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Thumbs, Scrollbar]);

function SlideShow(props) {
  const { images_paths } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <Swiper
        id="main"
        tag="section"
        loop={false}
        thumbs={{ swiper: thumbsSwiper }}
        effect="coverflow"
        observer={true}
        observeParents={true}
        spaceBetween={0}
        slidesPerView={1}
        // pagination ..
        // pagination={{
        //   type: "progressbar",
        // }}
        scrollbar={{ draggable: true }}
        navigation={true}
        className={classes.swiper}
      >
        {images_paths?.map((image) => (
          <SwiperSlide
            key={image.image_id}
            tag="li"
            style={{ listStyle: "none", transform: "none" }}
          >
            <Image
              src={image.image_path}
              alt=""
              height={746}
              width={840}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        id="thumbs"
        tag="ul"
        effect="coverflow" // do not change to fade! there is a bug
        loop={false}
        observer={true}
        observeParents={true}
        spaceBetween={5}
        slidesPerView={5}
        centeredSlides={false}
        className={classes.sub_swiper}
        onSwiper={setThumbsSwiper}
      >
        {images_paths?.map((image) => (
          <SwiperSlide
            key={image.image_id}
            tag="li"
            style={{ listStyle: "none" }}
          >
            <Image
              src={image.image_path}
              alt=""
              height={746}
              width={840}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}

export default SlideShow;
