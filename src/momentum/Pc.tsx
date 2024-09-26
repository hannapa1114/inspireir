import Slide from "../utils/slide/Slide";

const Pc = () => {
  const imgs = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/Life.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/Elite.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/Prestige.png",
  ];

  const imgs1 = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/MJsteakhouse_0101_H+res_crop2.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/MJsteakhouse_0101_H+res_crop3.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/MJsteakhouse_0101_H+res_crop4.png",
  ];

  const setting1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const setting2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  return (
    <div class="momentum-bg">
      <div class="inner">
        <div class="nav">
          <div class="img-box">
            <img
              src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/lifestyle.png"
              alt="logo"
            />
          </div>
          <div class="momentum-text">
            <div class="momentum-subtitle">モメンタム・ライフスタイル会員</div>
            <div class="momentum-title">無料登録受付開始</div>
          </div>
          <a
            href="https://www.inspirekorea.com/ja/momentum/join-momentum#utm_source=inspireir_momentum&utm_medium=posting&utm_campaign=inspireir_momentum&utm_id=Japan_momentum&utm_term=momentum_lp&utm_content=landingpage"
            target="_blank"
          >
            <div class="momentum-btn">無料登録はこちら</div>
          </a>
          <div class="img-box" style={{ marginTop: "2em" }}>
            <img
              src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/card.png"
              alt="card"
            />
          </div>
        </div>

        <div class="scroll">
          <div class="momentum-sec1">
            <div>
              <img
                class="hero-content"
                src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/hero.png"
                alt="hero"
              />
            </div>
            <div>
              <img
                class="hero-desc"
                src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/anjfktlqmfnTKtsh.png"
                alt="hero desc"
              />
            </div>
          </div>

          {/* accordian start */}

          <div class="momentum-sec2">
            <div class="icon-box">
              <img
                src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/icon1.png"
                alt=""
              />
              <img
                src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/icon2.png"
                alt=""
                style={{ padding: "0 2em" }}
              />
              <img
                src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/icon3.png"
                alt=""
              />
            </div>

            <div class="white-box">
              <div>
                <img
                  src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/benefit1.png"
                  alt="bene 1"
                  style={{ margin: "50px 0" }}
                />
              </div>
              <div class="momentum-slide">
                <Slide imgs={imgs} settings={setting1} />
              </div>
              <div className="momentum-slide1">
                <Slide imgs={imgs1} settings={setting2} />
              </div>

              <div>
                <img
                  src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/benefit2.png"
                  alt="bene 2"
                  style={{ margin: "10px 0 30px" }}
                />
              </div>
            </div>
          </div>

          <div class="momentum-sec3">
            <div class="sec3-title">
              <img
                src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/howto.png"
                alt="how to"
              />
            </div>
            <div
              class="white-box"
              style={{ padding: "1.5em 0 2em", width: "100%" }}
            >
              <div>
                <img
                  src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/joinimg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/join.png"
                  alt=""
                  style={{ margin: "2em 0" }}
                />
              </div>

              <a
                href="https://www.inspirekorea.com/ja/momentum/join-momentum#utm_source=inspireir_momentum&utm_medium=posting&utm_campaign=inspireir_momentum&utm_id=Japan_momentum&utm_term=momentum_lp&utm_content=landingpage"
                target="_blank"
              >
                <div class="momentum-btn">無料登録はこちら</div>
              </a>
            </div>
          </div>

          <div class="momentum-footer">
            <img
              src="https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/momentum/footer.png"
              alt="footer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc;
