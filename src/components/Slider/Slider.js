import { useEffect, useState } from "react";
import "./Slider.styles.css";

function Slider({ listCoffee, maxSlidesToShow }) {
  const [slideShowIndexs, setSlideShowIndexs] = useState([]);
  const [slidesShow, setSlidesShow] = useState([]);

  const findSlideShowByIndex = (indexs) => {
    let _slidesShow = [];
    indexs.forEach((item) => {
      let _slide = listCoffee.find((m, index) => index === item);
      if (_slide) _slidesShow.push(_slide);
    });
    return _slidesShow;
  };

  useEffect(() => {
    let indexsShow = listCoffee
      .slice(0, maxSlidesToShow)
      .map((item, index) => index);
    setSlideShowIndexs(indexsShow);
    setSlidesShow(findSlideShowByIndex(indexsShow));
  }, []);

  const nextIndex = (prevIndex) => (prevIndex + 1) % listCoffee.length;

  const prevIndex = (currentIndex) =>
    (currentIndex - 1 + listCoffee.length) % listCoffee.length;

  const nextSlide = () => {
    let newIndexs = slideShowIndexs.map((item) => nextIndex(item));
    setSlideShowIndexs(newIndexs);
    setSlidesShow(findSlideShowByIndex(newIndexs));
  };

  const prevSlide = () => {
    let newIndexs = slideShowIndexs.map((item) => prevIndex(item));
    setSlideShowIndexs(newIndexs);
    setSlidesShow(findSlideShowByIndex(newIndexs));
  };

  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <div className="slider-root">
      <div className="slider-next-prev">
        <button className="prev-slide" onClick={prevSlide}>
          <span>&#8249;</span>
        </button>
        <button className="next-slide" onClick={nextSlide}>
          <span>&#8250;</span>
        </button>
      </div>
      <div className="slider-main">
        {slidesShow.map((item, index) => (
          <img key={index} src={item.url} style={{}}></img>
        ))}
      </div>
    </div>
  );
}

export default Slider;
