import { useRef } from "react";
import Slide from "../utils/slide/Slide";

const Pc = () => {
  const myRef = useRef<any>([]);

  const scrollTo = (index: number) => {
    myRef.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const imgs = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/line/DSC09823.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/line/ForestLounge.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/line/PJW04934.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div class="wrap">
      <div class="inner">
        <div class="nav">
          <div class="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2F%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%8F%E3%82%9A%E3%82%A4%E3%82%A2LOGO.png?alt=media&token=fc5df080-39d1-45cf-a0ff-4ccb4d856ab7"
              alt="logo"
            />
          </div>
          <div class="desc">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2FLINE_APP_iOS.png?alt=media&token=5939087c-eeab-402d-b2bd-f0f101601c99"
                alt="logo"
              />
            </div>
            <div>
              <p>
                公式LINEと <br />
                今すぐ友達になる！
              </p>
            </div>
          </div>
          <div class="btns">
            <div>
              <img
                onClick={() => scrollTo(0)}
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2F1.png?alt=media&token=93779d9a-58e2-4848-9930-e57fcce096f8"
                alt="btn1"
              />
            </div>
            <div>
              <img
                onClick={() => scrollTo(1)}
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2F2.png?alt=media&token=33878ed7-053b-4c85-b8a5-6d0d4558528a"
                alt="btn2"
              />
            </div>
            <div>
              <img
                onClick={() => scrollTo(2)}
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2F3.png?alt=media&token=66fc7284-a0b2-4d58-ac65-ca1af1d61396"
                alt="btn3"
              />
            </div>
          </div>
        </div>

        <div class="scroll">
          <div class="section">
            <img
              class="bg-img"
              src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2FIntro.png?alt=media&token=98467b53-a6c3-4c12-99a4-de3d4bff00ac"
              alt="intro"
            />
            <div class="text-box">
              <div class="para">
                <span class="title">登録だけでお得に！</span>
                <p class="content">
                  プレゼントキャンペーンや、
                  <br />
                  クーポンなどお得な情報のみをお届け！
                  <br />
                  LINE限定のオファーをお見逃しなく！
                </p>
              </div>
              <div>
                <span class="title">登録だけでお得に！</span>
                <p class="content">
                  韓国で最先端かつ話題のエンターテインメント
                  <br />
                  アトラクションをインスパイアで楽しもう！
                  <br />
                  限定オファーや最新のリゾート情報をお届けします！
                </p>
              </div>
            </div>
            <div class="slide-wrap">
              <Slide imgs={imgs} settings={settings} />
            </div>
          </div>

          {/* accordian start */}
          <div class="section1">
            <div
              id="accord1"
              class="accordian"
              ref={(el) => (myRef.current[0] = el)}
            >
              <div>
                <div class="img-box">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord1_open.png?alt=media&token=c0af32bf-231d-47f0-8ccc-6ae3f846af17"
                    alt=""
                  />
                </div>
                <div class="accord-box">
                  <div class="accord-wrap">
                    <div class="img-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2F%E3%83%9E%E3%82%B9%E3%82%AF%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%201.png?alt=media&token=d059abf6-ad76-4f88-8078-3474b6931e1e"
                        alt=""
                      />
                    </div>
                    <div class="accord-content">
                      LINEアプリをインストールした
                      <br />
                      スマートフォンで下記リンクボタンから
                      <br />
                      アクセスし、「友だち追加はコチラ」
                      <br />
                      ボタンをタップしてください。
                      <br />
                      LINEアプリが起動しますので、画面の指示に
                      <br />
                      従って友だち追加をしてください。
                    </div>
                    <a
                      href="https://liff.line.me/2004687746-l8g3jMx3/landing?follow=%40015eltte&lp=tnyQR3&liff_id=2004687746-l8g3jMx3"
                      target="_blank"
                    >
                      <div class="a_btn">今すぐ友だちを追加</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="accod2"
              class="accordian"
              ref={(el) => (myRef.current[1] = el)}
            >
              <div>
                <div class="img-box">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord2_open.png?alt=media&token=9e6c9506-93a8-4186-b285-3dd5cb7c20fc"
                    alt=""
                  />
                </div>
                <div class="accord-box">
                  <div class="accord-wrap">
                    <div class="accord-content">
                      1.LINEアプリを起動し、画面上端の
                      <br />
                      「友だち追加」から「QRコード」を
                      <br />
                      　選択してください。
                      <br />
                      <br />
                      2.読み取りカメラが起動しますので、
                      <br />
                      　下記の「QRコード」を読み込み、画面の
                      <br />
                      　指示に従って友だち追加をしてください。
                    </div>
                    <div class="img-box">
                      <img
                        id="line-qr"
                        src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/line/LINE+LP+QR_0826.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="accod3"
              class="accordian"
              ref={(el) => (myRef.current[2] = el)}
            >
              <div>
                <div class="img-box">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord3_open.png?alt=media&token=ece0fa7a-a93a-49af-9251-fa8dc19fc38f"
                    alt=""
                  />
                </div>
                <div class="accord-box" style={{ paddingTop: 0 }}>
                  <div class="accord-wrap">
                    <div class="accord-content">
                      LINEアプリを起動し、
                      <br />
                      画面上端の「友だち追加」から
                      <br />
                      「検索」を選択してください。
                      <br />
                      <br />
                      検索対象が「ID」になっていることを
                      <br />
                      確認して、「@inspirekorea_japan」と
                      <br />
                      入力し検索を行ってください。
                      <br />
                      インスパイア公式アカウントを選択し、
                      <br />
                      友だち追加してください。
                    </div>
                    <div class="insta_btn">@inspirekorea_japan</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p class="ps">
                ※LINEプラットフォーム上で提供するサービスにおいて、
                <br />
                ユーザーに関わる情報が共通で利用されることがあります。
              </p>
            </div>
          </div>

          <div class="footer">
            <a href="https://lin.ee/YCTwrXE" target="_blank">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Flinefooter.png?alt=media&token=1f7fa083-5ff9-45e3-9b41-9f1fcbf88546"
                alt="footer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc;
