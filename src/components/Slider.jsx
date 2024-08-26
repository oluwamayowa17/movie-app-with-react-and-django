// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faStarHalfStroke, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image">

              <div className="black">
                <h1>Death on the Nile</h1>
                <div className="star">
                <FontAwesomeIcon icon={faStarSolid} />
                <FontAwesomeIcon icon={faStarSolid} />
                <FontAwesomeIcon icon={faStarSolid} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                <FontAwesomeIcon icon={faStar} />
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos repudiandae consequuntur facere, expedita fugiat itaque saepe laboriosam optio. 
                  Veritatis, provident impedit. 
                  Maxime ullam vel iure natus odio quibusdam pariatur doloribus!
                </p>
                <div className="genre">
                  <a href="#" className='category'> Action </a>
                  <a href="#" className='category'> Drama </a>
                  <a href="#" className='category'> <span>4K</span> </a>
                </div>
                <div className="watch">
                  <i>
                  <FontAwesomeIcon icon={faPlay} />
                  </i>
                  <p>watch trailer</p>
                </div>

                <img src="https://wallpapers.com/images/hd/death-on-the-nile-movie-poster-lt7zxaa14ymaqb6l.jpg" alt=""/>
              </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
