import "./imagecouarsel.css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../hooks/useFetch";

const api_url = "http://localhost:1337";
export default function ImageCouarsel() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/carousels?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  
  return (
    <>
      <div className="couarselBox">
        <div className="couarsel">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.data.map((e) => (
              <SwiperSlide>
                <img
                  src={api_url + e.attributes.carouselimage.data[0].attributes.formats.small.url}
                ></img>
                <div className="caption">
                  <h2>{e.attributes.carouseltitle}</h2>
                  <p>{e.attributes.carouseldescription}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
