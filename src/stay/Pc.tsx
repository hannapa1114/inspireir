// import { useRef } from "react";
import Slide from "../utils/slide/Slide";
import Carousel from "../utils/slide/Carousel";

const Pc = () => {
  const slide1 = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide1-1.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide1-2.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide1-3.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide1-4.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide1-5.png",
  ];

  const setting1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const slide2 = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide2-1.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide-2-4.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/slide2-3.png",
  ];

  const setting2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const towersetting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const oceanimg = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/ocean/OceanDeluxeKing3.jpg",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/ocean/OceanSuite_1.jpg",
  ];
  const forestimg = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/forest/ForestDeluxeKing_0.jpg",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/forest/ForestSuite_v2.jpg",
  ];
  const sunimg = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/sun/SunDeluxeKing1.jpg",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/sun/SunTowerInspireSuite_1.jpg",
  ];

  return (
    <div class="wrap">
      <div class="inner">
        <div class="stay-pc-nav">
          <div class="" style={{ textAlign: "center" }}>
            <img
              src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/logo.png"
              alt="logo"
            />
          </div>
          <div
            style={{
              fontSize: "3em",
              color: "#502875",
              fontFamily: "NotoSans_Bold",
            }}
          >
            今までにない韓国旅行
          </div>
          <div
            style={{
              fontSize: "1em",
              color: "#502875",
              fontFamily: "NotoSans_Regular",
            }}
          >
            アジア最新の次世代型エンターテイメントリゾートで
            <br />
            最高の非日常感を味わえる旅にお出かけください。
          </div>
          <a
            href="https://www.inspirekorea.com/ja/stay"
            target="_blank"
            style={{ color: "black" }}
          >
            <div class="stay-pc-btn">ご予約はコチラ</div>
          </a>
        </div>

        <div class="scroll">
          <div class="stay1">
            <div class="stay-slide">
              <Slide imgs={slide1} settings={setting1} />
            </div>
          </div>
          <div class="">
            <img
              class="bg-img"
              src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/stay2-1.png"
              alt="stay 2"
            />
            <div class="stay-tower">
              <div className="tower-box">
                <div class="white-slide-box-right">
                  <div id="ocean">
                    <Slide imgs={oceanimg} settings={towersetting} />
                  </div>
                </div>
                <div class="slide-text">
                  <h3>オーシャンタワー</h3>
                  <p>
                    海のように爽やかな空間で ゆっくり過ごす。
                    オーシャンタワーは機能性 の高いインテリアを備え、
                    仕事と休憩を充実させる 滞在をお約束いたします。
                  </p>
                </div>
              </div>
              <div className="tower-box">
                <div class="slide-text">
                  <h3>フォレストタワー</h3>
                  <p>
                    森のオアシスをイメージしたフォレストタワーは、豊かな色彩に包まれた快適な空間です。オレンジとブルーが調和した部屋は安らぎを与えてくれます。
                  </p>
                </div>
                <div class="white-slide-box-left">
                  <div id="forest">
                    <Slide imgs={sunimg} settings={towersetting} />
                  </div>
                </div>
              </div>
              <div className="tower-box" style={{ marginBottom: 0 }}>
                <div class="white-slide-box-right">
                  <div id="sun">
                    <Slide imgs={forestimg} settings={towersetting} />
                  </div>
                </div>
                <div class="slide-text">
                  <h3>サンタワー</h3>
                  <p>
                    力あふれる太陽にインスピ レーションを受けた、
                    優雅で華やかなサンタワー。 自然素材のインテリアと
                    アート作品で心温まる おもてなしをご提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="stay3">
            <div class="stay-slide1">
              <Slide imgs={slide2} settings={setting2} />
            </div>
          </div>
          <div class="stay4">
            <div class="service">
              <div id="service-box">
                <Carousel />
              </div>
              <div style={{ width: "40%" }}></div>
            </div>
            <div class="stay-footer">
              <span class="cta-desc">＼ お得なプランも多数ご用意 ／</span>
              <a href="https://www.inspirekorea.com/ja/stay" target="_blank">
                <div class="cta-btn">ご予約はコチラ</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc;
