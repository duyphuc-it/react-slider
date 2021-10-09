import "./App.css";
import SlideItem from "./components/SlideItem/SlideItem";
import Slider from "./components/Slider/Slider";

const listCoffee = [
  {
    id: 1,
    name: "Phin sữa đá",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png",
  },
  {
    id: 2,
    name: "Phin đen đá",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png",
  },
  {
    id: 3,
    name: "Phin đen nóng",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png",
  },
  {
    id: 4,
    name: "Bạc xỉu đá",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/thumbs/270_crop_Bac_Xiu_Da.png",
  },
  {
    id: 5,
    name: "Hồng trà",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/12_2020/thumbs/270_crop_PHINDI_Hong_Tra.png",
  },
  {
    id: 6,
    name: "Phin choco",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/thumbs/270_crop_phindi_choco_new.png",
  },
  {
    id: 7,
    name: "Phin kem sữa",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/thumbs/270_crop_phindi_kem_sua_new.png",
  },
  {
    id: 8,
    name: "MOCha",
    amount: 200000,
    url: "https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_ESPRESSO.png",
  },
];

function App() {
  return (
    <div className="App">
      <div className="wrapper-slider">
        <Slider listCoffee={listCoffee} maxSlidesToShow={3} />
      </div>
    </div>
  );
}

export default App;
