import React from "react";
import "./index.scss";
import HeaderNav from "../../../commons/HeaderNav/HeaderNav";

function AboutUs(props) {
  return (
    <div className="about-us-wrapper">
      <HeaderNav />
      <hr />
      <div className="about-us-content-wrapper">
        <div className="row-1 col-12 d-flex">
          <div className="col-6">
            <div className="col-10 mb-3">
              VietTravel là một trang web đặt tour du lịch hàng đầu với mục tiêu mang đến những trải nghiệm tuyệt vời cho du khách khám phá thế giới.
            </div>
            <div className="col-12">
              Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là đối tác đáng tin cậy của hàng triệu du khách trên khắp thế giới.
            </div>
          </div>
          <div className="col-6 d-flex">
            <div className="col-6">
              <div className="icon mb-2" style={{ color: "blue" }}>
                <i class="fa-solid fa-earth-asia"></i>
              </div>
              <div
                className="mb-2"
                style={{ fontSize: "20px", fontWeight: "700px" }}
              >
                Hiểu biết thế giới
              </div>
              <div>Chúng tôi có đội ngũ chuyên gia du lịch tận tâm và nhiệt huyết, luôn sẵn sàng chia sẻ kiến thức về các điểm đến trên toàn thế giới.</div>
            </div>
            <div className="col-6" style={{ marginLeft: "24px" }}>
              <div className="icon mb-2" style={{ color: "palevioletred" }}>
                <i class="fa-solid fa-image"></i>
              </div>
              <div
                className="mb-2"
                style={{ fontSize: "20px", fontWeight: "700px" }}
              >
                Trải nghiệm đáng nhớ
              </div>
              <div>Chúng tôi cam kết mang đến những trải nghiệm du lịch đáng nhớ và khó quên cho mỗi khách hàng.</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row-1 col-12 d-flex" style={{ marginTop: "30px" }}>
          <div className="col-6">
            <div className="col-10 mb-3">
              Chúng tôi luôn lắng nghe ý kiến của khách hàng và không ngừng cải tiến để mang đến dịch vụ tốt nhất.
            </div>
            <div className="col-12">
              Đến với VietTravel, bạn sẽ cảm nhận được sự chuyên nghiệp, uy tín và đáng tin cậy từ đội ngũ nhân viên của chúng tôi.
            </div>
          </div>
          <div className="col-6 d-flex">
            <div className="col-4">
              <div
                className="icon"
                style={{ width: "200px", height: "126px" }}
              >
                <img
                  width="100%"
                  src="https://agent.rever.vn/hubfs/Cham-soc-khach-hang-01.jpg"
                  alt="anh-1"
                />
              </div>
              <div className="icon" style={{ width: "200px", height: "135px" }}>
                <img
                  width="100%"
                  src="https://doanhnhanplus.vn/wp-content/uploads/2019/12/dnp-nghe-thuat-lang-nghe-khach-hang-1.jpg"
                  alt="anh-1"
                />
              </div>
            </div>
            <div className="col-8" style={{ marginLeft: "24px" }}>
              <img
                width="100%"
                src="https://media.vietravel.com/images/news/vietravel-co-uy-tin-khong223.jpg"
                alt="anh-3"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row-1 col-12" style={{ marginTop: "30px" }}>
          <div
            className="col-12 d-flex justify-content-center"
            style={{
              fontSize: "26px",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Nhận xét từ khách hàng
          </div>
          <div className="col-12 d-flex">
            <div className="col-4">
              <img style={{borderRadius: "50%" }}
                width="100%"
                src="https://img5.thuthuatphanmem.vn/uploads/2021/08/25/anh-dai-dien-an-danh_085759839.jpg"
                alt="anh-3"
              />
              <div className="mt-4">
                "Tôi đã có một chuyến du lịch tuyệt vời cùng với VietTravel. Dịch vụ tuyệt vời và nhân viên nhiệt tình."
              </div>
            </div>
            <div className="col-4" style={{ margin: "0 16px" }}>
              <img style={{borderRadius: "50%" }}
                width="100%"
                src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-06/64/hip-hop-black-male-512.png"
                alt="anh-3"
              />
              <div className="mt-4">
                "Chúng tôi đã có một trải nghiệm du lịch tuyệt vời cùng với VietTravel. Sẽ quay lại trong tương lai."
              </div>
            </div>
            <div className="col-4">
              <img style={{borderRadius: "50%" }}
                width="100%"
                src="https://scr.vn/wp-content/uploads/2020/07/Avatar-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-m%C3%A0u-s%E1%BA%AFc.jpg"
                alt="anh-3"
              />
              <div className="mt-4">
                "VietTravel là lựa chọn số một cho những chuyến du lịch của chúng tôi. Chúng tôi rất hài lòng với dịch vụ của họ."
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12">
          <div
            className="col-12 d-flex justify-content-center"
            style={{
              fontSize: "26px",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "30px",
              color: "#6faa41",
            }}
          >
            Về chúng tôi
          </div>
          <div className="col-12 d-flex justify-content-between">
            <div className="col-5">
              <img
                width="100%"
                src="https://png.pngitem.com/pimgs/s/571-5717205_conversation-hd-png-download.png"
              />
            </div>
            <div className="col-5">
              <div
                className="mb-4"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  fontStyle: "italic",
                  color: "#6faa41",
                }}
              >
                Chúng tôi giúp bạn
              </div>
              <div className="item mt-2 mb-1">
                ► Tận hưởng những chuyến du lịch tuyệt vời cùng với VietTravel.
              </div>
              <div className="item mt-2 mb-1">
                ► Khám phá thế giới và nhận được những trải nghiệm đáng nhớ.
              </div>
              <div className="item mt-2 mb-1">
                ► Tự tin lựa chọn VietTravel là đối tác du lịch tin cậy.
              </div>
              <div className="item mt-2 mb-1">
                ► Nhận được dịch vụ chuyên nghiệp và tận tâm từ đội ngũ nhân viên của chúng tôi.
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12" style={{ marginBottom: "100px" }}>
          <div
            className="col-12 d-flex justify-content-center"
            style={{
              fontSize: "26px",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "30px",
              fontStyle: "italic",
              color: "#fb853e",
            }}
          >
            Liên hệ chúng tôi
          </div>
          <div className="col-12 d-flex justify-content-between">
            <div className="col-5" style={{ paddingLeft: "150px" }}>
              <div className="col-10">
                <div
                  style={{
                    margin: "15px 0",
                    color: "#1e889e",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <span> Địa chỉ</span>
                </div>
                <div style={{ textIndent: "15px", fontWeight: "400" }}>
                  Số 1 Đại học bách khoa
                </div>
              </div>
              <div className="col-10">
                <div
                  style={{
                    margin: "15px 0",
                    color: "#1e889e",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <span>Email</span>
                </div>
                <div style={{ textIndent: "15px", fontWeight: "400" }}>
                  contact@viettravel.com
                </div>
              </div>
              <div className="col-10">
                <div
                  style={{
                    margin: "15px 0",
                    color: "#1e889e",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <span>Liên hệ</span>
                </div>
                <div style={{ textIndent: "15px", fontWeight: "400" }}>
                  0123 456 789
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="col-12">
                <div
                  style={{
                    fontSize: "18px",
                    fontStyle: "italic",
                    color: "#1e889e",
                    fontWeight: "600",
                  }}
                >
                  Liên hệ với chúng tôi
                </div>
                <div className="col-12 d-flex" style={{marginTop: '24px'}}>
                  <div className="col-6">
                    <input placeholder="Họ và tên" />
                  </div>
                  <div className="col-6">
                    <input placeholder="Email" />
                  </div>
                </div>
                <div className="col-12" style={{marginTop: '24px'}}>
                  <textarea placeholder="Nội dung" />
                </div>
                <div className="col-12" style={{marginTop: '24px'}}>
                  <button>Gửi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
