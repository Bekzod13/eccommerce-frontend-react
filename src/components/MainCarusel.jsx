import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import icons
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';

const MainCarusel = ({caruselHeight}) => {
    console.log(caruselHeight);
    const settings = {
        customPaging: function(i) {
            return (
              <div className="carusel-dot">
              </div>
            );
          },
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className="slider-me container">
        <Slider {...settings}>
          <div className={caruselHeight && `slide-me slide-me-${caruselHeight}`} >
            <img src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_960_720.jpg" alt="" />
            <h1>olma</h1>
            <p>olmazor</p>
          </div>
          <div className={caruselHeight && `slide-me slide-me-${caruselHeight}`}  >
            <img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg" alt="" />
            <h1>olma</h1>
            <p>olmazor</p>
          </div>
        </Slider>
    </div>
  );
}

export default MainCarusel;


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='slide-arrow slide-arrow-right'
        onClick={onClick}
      ><FaAngleRight/></div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='slide-arrow slide-arrow-left'
        onClick={onClick}
      ><FaAngleLeft/></div>
    );
  }
