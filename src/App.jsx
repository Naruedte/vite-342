import { useState } from "react";
import "./App.css";
import "./index.css";

export default function App() {
  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(300);

  //ให้อาหาร
  const foodPig = (foodValue) => {
    setLevel((prevLevel) => prevLevel + foodValue);
    setSize((prevSize) => prevSize + foodValue);
  };

  const getPigImage = () => {
    if (level < 100) {
        return "http://1.bp.blogspot.com/-PX-SGqsemRk/VGHAPOdlUoI/AAAAAAAAAZ8/yr1UGrUg6h0/s1600/Hair%2BLess%2BCavy01108thinks.jpg";
    } else if (level < 200) {
        return "https://www.mumkhao.com/img1/9/191205q2dvw.jpg";
    } else {
        return "https://i.ytimg.com/vi/qGkiZGSprFU/maxresdefault.jpg";
    }
};

  const imageSrc = `${getPigImage()}?t=${Date.now()}`;

  const reset = () => {
    setLevel(1);
    setSize(300); //รีเกม
  };

  return (
    <>
      <div>
        <h1>เลี้ยงหมูเด้งให้โตขึ้น!</h1>
      </div>
      <div class="image-with-border" >
      <div class="container">
        <div>
          <h2>Level {level}</h2>
        </div>
        <div className="pig">
          <img
            src={imageSrc}
            alt="หมูเด้ง"
            style={{ width: size, height: size }}
          />
        </div>

        <div className="food" class="image-row">
          <img
            src="https://s.isanook.com/he/0/ud/6/32261/watermelon.jpg?ip/crop/w728h431/q80/webp"
            alt="แตงโม"
            onClick={() => foodPig(5)}
          />
          <img
            src="https://s359.kapook.com/pagebuilder/0ff2a8de-8873-49fe-948d-5d061bff52c1.jpg"
            alt="ผักรวม"
            onClick={() => foodPig(20)}
          />
          <img
            src="https://laz-img-sg.alicdn.com/p/11d823c14ef8ad0391f35cd6f804f763.jpg"
            alt="หญ้า"
            onClick={() => foodPig(10)}
          />
        </div>

        <div className="button">
          <button onClick={reset}>Reset</button>
        </div>
        </div>
      </div>
    </>
  );
}
