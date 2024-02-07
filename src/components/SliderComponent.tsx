import { useState, useRef } from 'react'
import { data } from '../data/slider'
import Slider,{Setting} from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderCard from './SliderCard'
import ArrowLeft from './ArrowLeft'
import RightArrow from './RightArrow'



const SliderComponent = () => {
  const [sldierData] = useState(data)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<Slider>(null)


  var settings: Setting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <RightArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    setCurrentSlide(value)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(value)
    }
  }

  return (
    <div className="m-3">
      <Slider
        ref={sliderRef}
        className="services-slider relative"
        {...settings}
      >
        {sldierData.map((item, i) => {
          return <SliderCard icon={item.icon} title={item.title} key={i} />
        })}
      </Slider>

      <div className="sliderRangeControler w-[50%]  m-auto">
        <input
          type="range"
          min={0}
          max={data.length - 1}
          value={currentSlide}
          onChange={handleRangeChange}
          className="carousel__scroll__slider w-full"
        />
      </div>
    </div>
  )
}

export default SliderComponent
