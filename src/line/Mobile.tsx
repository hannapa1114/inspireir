import { useState } from "react";
import Slide from "../utils/slide/Slide";

const Intro = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

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
    <div class="wrapper">
      <div class="section">
        <img
          id="bg-img"
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
        <div id="accord1" class="accordian">
          {!btn1 ? (
            <img
              onClick={() => setBtn1(!btn1)}
              src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord1_close.png?alt=media&token=46bf8a8c-35a6-409c-97f2-46346743aa34"
              alt=""
            />
          ) : (
            <div onClick={() => setBtn1(!btn1)}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord1_open.png?alt=media&token=c0af32bf-231d-47f0-8ccc-6ae3f846af17"
                alt=""
              />
              <div class="accord-box">
                <div class="accord-wrap">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2F%E3%83%9E%E3%82%B9%E3%82%AF%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%201.png?alt=media&token=d059abf6-ad76-4f88-8078-3474b6931e1e"
                    alt=""
                  />
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
                  <a href="https://lin.ee/YCTwrXE" target="_blank">
                    <div class="a_btn">今すぐ友だちを追加</div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="accod2" class="accordian">
          {!btn2 ? (
            <img
              onClick={() => setBtn2(!btn2)}
              src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord2_close.png?alt=media&token=a628f9b0-7486-4623-9706-27d96c7d8ac7"
              alt=""
            />
          ) : (
            <div>
              <img
                onClick={() => setBtn2(!btn2)}
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord2_open.png?alt=media&token=9e6c9506-93a8-4186-b285-3dd5cb7c20fc"
                alt=""
              />
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
                  <img
                    id="line-qr"
                    src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/line/LINE+LP+QR_0826.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="accod3" class="accordian">
          {!btn3 ? (
            <img
              onClick={() => setBtn3(!btn3)}
              src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord3_close.png?alt=media&token=f9cd2d7e-6635-4690-8dc5-4a60edb9c473"
              alt=""
            />
          ) : (
            <div>
              <img
                onClick={() => setBtn3(!btn3)}
                src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Faccord3_open.png?alt=media&token=ece0fa7a-a93a-49af-9251-fa8dc19fc38f"
                alt=""
              />
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
          )}
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
            id="footer-img"
            src="https://firebasestorage.googleapis.com/v0/b/inspirekorea-event.appspot.com/o/jp_momentum%2Flinefooter.png?alt=media&token=1f7fa083-5ff9-45e3-9b41-9f1fcbf88546"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
