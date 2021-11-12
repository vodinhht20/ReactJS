import { Link } from 'react-router-dom';
export default function Home({products}) {

  function formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
      })
  }
  return (
    <main>
    <div className='banner'>
      <img src={require('../assets/images/slider_1.jpg').default} alt='' />
    </div>
    <div className='content'>
      <div className='box-introduces'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 departments'>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>1</span>
                </div>
                <div className='department-item-content'>
                  <span>Thiết bị hiện đại</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>2</span>
                </div>
                <div className='department-item-content'>
                  <span>Thiết bị hiện đại</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>3</span>
                </div>
                <div className='department-item-content'>
                  <span>Thiết bị hiện đại</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>4</span>
                </div>
                <div className='department-item-content'>
                  <span>Thiết bị hiện đại</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='bg-department-item'>
                <img src={require('../assets/images/bg-department.png').default} alt='' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6 introduce'>
              <div className='title-sub'>
                <span>Giới Thiệu</span>
              </div>
              <div className='title-primary'>
                <h1>Chứng nhận <br /> Xét nghiệm <span>chuẩn đoán</span></h1>
              </div>
              <div className='introduce-main'>
                <p>
                  Ego Medical Center tự hào về các kỹ năng được đào tạo cần thiết
                  cho việc chuẩn bị kiểm tra đa dạng. Chúng tôi tin tưởng rằng
                  chẩn đoán kịp thời có thể loại bỏ vết sẹo của nhiều bệnh nghiêm
                  trọng. Nó có thể được thực hiện nếu bạn tham khảo ý kiến bác sĩ
                  cho các bệnh nghi ngờ.
                </p>
                <ul>
                  <li><i className='fas fa-check'></i>Tất cả các báo cáo cho khách
                    hàng được thực hiện đơn giản và dễ hiểu</li>
                  <li><i className='fas fa-check'></i>Trang web thân thiện với người
                    dùng</li>
                  <li><i className='fas fa-check'></i>Trang web dễ dàng được tùy chỉnh
                    dựa vào thiết lập tối ưu</li>
                </ul>
              </div>
              <div className='bnt-order-now'>
                <a href=''><span>Đặt lịch ngay
                    <i className='fas fa-arrow-right'></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box-generality'>
        <div className='container'>
          <div className='generality-title'>
            <h1>Xét nghiệm chuẩn đoán</h1>
            <div className='generality-title-decor'></div>
          </div>
          <div className='row services-tab'>
            <div className='col-md-4 col-lg-2 service-tab-item active'>
              <img src={require('../assets/images/icon_tab_1.png').default} alt='' />
              <span>Tầm soát ung thư</span>
            </div>
            <div className='col-md-4 col-lg-2 service-tab-item'>
              <img src={require('../assets/images/icon_tab_2.png').default} alt='' />
              <span>Mô học</span>
            </div>
            <div className='col-md-4 col-lg-2 service-tab-item'>
              <img src={require('../assets/images/icon_tab_3.png').default} alt='' />
              <span>Khám tổng quát</span>
            </div>
            <div className='col-md-4 col-lg-2 service-tab-item'>
              <img src={require('../assets/images/icon_tab_4.png').default} alt='' />
              <span>Xét nghiệm máu</span>
            </div>
            <div className='col-md-4 col-lg-2 service-tab-item'>
              <img src={require('../assets/images/icon_tab_5.png').default} alt='' />
              <span>Xét nghiệm di truyền</span>
            </div>
            <div className='col-md-4 col-lg-2 service-tab-item'>
              <img src={require('../assets/images/icon_tab_6.png').default} alt='' />
              <span>Tế bào học</span>
            </div>
          </div>
          <div className='services-main'>
            <div className='row service-main-item active'>
              <div className='col-md-12 col-lg-6'>
                <img className='covidimg' src={require('../assets/images/img_tab_1.jpg').default} alt='' />
              </div>
              <div className='col-md-12 col-lg-6 box-service-content'>
                <div className='content-title'>
                  <h2>Tầm soát ung thư</h2>
                </div>
                <div className='service-content'>
                  <p>Mỗi năm Việt Nam có hơn 126.000 ca mắc mới mắc bệnh ung thư,
                    trong số đó khoảng 94.000 người tử vong vì phát hiện quá muộn.
                    Việt Nam cũng là một trong những quốc gia có tỷ lệ người dân
                    đi tầm soát ung thư thấp nhất. Nếu được tầm soát và phát hiện
                    sớm, những căn bệnh ung thư sau có thể chữa khỏi hoàn toàn:
                  </p>
                  <ul>
                    <li><i className='fas fa-check'></i>Ung thư phổi</li>
                    <li><i className='fas fa-check'></i>Ung thư gan</li>
                    <li><i className='fas fa-check'></i>Ung thư dạ dày</li>
                    <li><i className='fas fa-check'></i>Ung thư vú</li>
                    <li><i className='fas fa-check'></i>Ung thư cổ tử cung</li>
                  </ul>
                  <p>Tầm soát ung thư là phương thức chẩn đoán nhằm phát hiện ra
                    mầm mống ung thư hoặc khi khối u c...</p>
                </div>
                <div className='bnt-order-now'>
                  <a href=''><span>Đặt lịch ngay
                      <i className='fas fa-arrow-right'></i></span></a>
                  <a href=''><span>Xem Thêm
                      <i className='fas fa-angle-double-right'></i></span></a>
                </div>
              </div>
            </div>
            <div className='row service-main-item'>
              <div className='col-md-12 col-lg-6'>
                <img src={require('../assets/images/img_tab_2.jpg').default} alt='' />
              </div>
              <div className='col-md-12 col-lg-6 box-service-content'>
                <div className='content-title'>
                  <h2>Mô học</h2>
                </div>
                <div className='service-content'>
                  <p>Xét nghiệm chẩn đoán mô bệnh học là xét nghiệm thực hiện trên
                    mẫu mô sau sinh thiết nội soi, sinh thiết kim hoặc trong bệnh
                    phẩm phẫu thuật. Bệnh phẩm được bảo quản trong môi trường
                    formol pha theo tỷ lệ quy định rồi được chuyển về phòng xét
                    nghiệm giải phẫu bệnh.
                    <br />Tại đây, mẫu bệnh phẩm được xử lí theo đúng quy trình
                    xét nghiệm để đưa ra kết quả chính xác nhất. Kết quả xét
                    nghiệm này là tiêu chuẩn vàng trong chẩn đoán bệnh lí ác tính.
                    <br />Xét nghiệm chẩn đoán hóa mô miễn dịch nhằm giúp xác định
                    chính xác nguồn gốc của các khối u kém biệt hóa. Xét nghiệm
                    này thường đ...
                  </p>
                </div>
                <div className='bnt-order-now'>
                  <a href=''><span>Đặt lịch ngay
                      <i className='fas fa-arrow-right'></i></span></a>
                  <a href=''><span>Xem Thêm
                      <i className='fas fa-angle-double-right'></i></span></a>
                </div>
              </div>
            </div>
            <div className='row service-main-item'>
              <div className='col-md-12 col-lg-6'>
                <img src={require('../assets/images/img_tab_3.jpg').default} alt='' />
              </div>
              <div className='col-md-12 col-lg-6 box-service-content'>
                <div className='content-title'>
                  <h2>Khám tổng quát</h2>
                </div>
                <div className='service-content'>
                  <p>– Xét nghiệm chỉ số máu (nhằm phát hiện tình trạng thiếu máu
                    và một số bệnh lý về máu, chẩn đoán tiểu đường và dung nạp
                    Glucose, đánh giá chức năng thận, chức năng gan, tầm soát
                    virus viêm gan B…)
                    <br />
                    – Xét nghiệm nước tiểu, nhằm phát hiện một số bệnh lý về thận,
                    tiết niệu…
                    <br />– Chẩn đoán hình ảnh, thăm dò chức năng (gồm: Chụp X
                    Quang ngực thẳng, điện tim đồ, siêu âm ổ bụng tổng quát
                    thường, chụp CT…). Tự hào là bệnh viện lớn, được xây dựng theo
                    tiêu chuẩn “Bệnh viện
                    <br />– Khách sạn và lọt Top 3 bệnh viện có điểm chất lượng
                    cao nhất
                    <br />– Bệnh viện ĐKQT Ego Medical là địa chỉ uy tín được
                    nhiều doanh nghiệp đăng...
                  </p>
                </div>
                <div className='bnt-order-now'>
                  <a href=''><span>Đặt lịch ngay
                      <i className='fas fa-arrow-right'></i></span></a>
                  <a href=''><span>Xem Thêm
                      <i className='fas fa-angle-double-right'></i></span></a>
                </div>
              </div>
            </div>
            <div className='row service-main-item'>
              <div className='col-md-12 col-lg-6'>
                <img src={require('../assets/images/img_tab_4.jpg').default} alt='' />
              </div>
              <div className='col-md-12 col-lg-6 box-service-content'>
                <div className='content-title'>
                  <h2>Xét nghiệm máu</h2>
                </div>
                <div className='service-content'>
                  <p>Có rất nhiểu bệnh có thể phát hiện được qua xét nghiệm máu.
                    Thông thường khi khám sức khỏe bác sĩ sẽ chỉ định thực hiện
                    những xét nghiệm máu sau:
                  </p>
                  <ul>
                    <li><i className='fas fa-check'></i>Xét nghiệm công thức máu</li>
                    <li><i className='fas fa-check'></i>Xét nghiệm đường máu</li>
                    <li><i className='fas fa-check'></i>Xét nghiệm mỡ máu</li>
                    <li><i className='fas fa-check'></i>Xét nghiệm viêm gan B</li>
                    <li><i className='fas fa-check'></i>Xét nghiệm HIV </li>
                  </ul>
                  <p>Tại khoa phòng cụ thể, các bác sĩ sẽ căn cứ vào tình trạng
                    sức khoẻ và những yếu tố nguy cơ bệnh để chỉ định làm xét
                    nghiệm máu.
                    <br />Tới tầng 7 – Đơn vị xét nghiệm Bệnh viện Ego Medical.
                    Người bệnh được chuyên viên y tế bệnh viện lấy máu xét nghiệm.
                    <br />Các dụng cụ lấy máu đều đảm bảo tính vệ sinh, vô ...</p>
                </div>
                <div className='bnt-order-now'>
                  <a href=''><span>Đặt lịch ngay
                      <i className='fas fa-arrow-right'></i></span></a>
                  <a href=''><span>Xem Thêm
                      <i className='fas fa-angle-double-right'></i></span></a>
                </div>
              </div>
            </div>
            <div className='row service-main-item'>
              <div className='col-md-12 col-lg-6'>
                <img src={require('../assets/images/img_tab_5.jpg').default} alt='' />
              </div>
              <div className='col-md-12 col-lg-6 box-service-content'>
                <div className='content-title'>
                  <h2>Xét nghiệm di truyền</h2>
                </div>
                <div className='service-content'>
                  <p><b>Xét nghiệm di truyền</b>
                    hay còn được gọi là xét nghiệm DNA, cho phép phân tích gen có
                    khả năng gây bệnh di truyền, và cũng có thể được sử dụng để
                    xác định quan hệ cha con/ mẹ con hoặc truy nguyên nguồn gốc tổ
                    tiên của một người hoặc các mối quan hệ huyết thống giữa những
                    người tham gia.
                    <br />Bên cạnh đó, các nghiên cứu ở mức độ nhiễm sắc thể của
                    con người theo hướng rộng mở bao gồm xét nghiệm sinh hóa tìm
                    kiếm khả năng hiện diện của các bệnh di truyền, hoặc dạng đột
                    biến của các gen quan trọng gia tăng nguy cơ của các rối loạn
                    di truyền. Xét nghiệm di truyền học xác định sự thay đổi trong
                    nhiễm s...
                  </p>
                </div>
                <div className='bnt-order-now'>
                  <a href=''><span>Đặt lịch ngay
                      <i className='fas fa-arrow-right'></i></span></a>
                  <a href=''><span>Xem Thêm
                      <i className='fas fa-angle-double-right'></i></span></a>
                </div>
              </div>
            </div>
            <div className='row service-main-item'>
              <div className='col-md-12 col-lg-6'>
                <img src={require('../assets/images/img_tab_6.jpg').default} alt='' />
              </div>
              <div className='col-md-12 col-lg-6 box-service-content'>
                <div className='content-title'>
                  <h2>Tế bào học</h2>
                </div>
                <div className='service-content'>
                  <p><b>Xét nghiệm tế bào học</b>
                    (Cytology hoặc Cytopathology) là xét nghiệm thông dụng và có
                    giá trị cao. Xét nghiệm tế bào học khảo sát các tế bào rời
                    hoặc một cụm tế bào lẫn trong chất dịch lỏng thấy được trên
                    kính hiển vi. Có khi chỉ cần một giọt máu hoặc chất dịch như
                    trong xét nghiệm FNA, nhưng có khi phải cần đến cả chai chất
                    <b>dịch màng phổi </b>hoặc ổ bụng.
                    <br />Lấy một mẫu thử tế bào, ít gây mệt, ít gây biến chứng và
                    đỡ tốn kém hơn cho người bệnh so với sinh thiết mô bệnh học.<br
                    />Trong nhiều trường hợp,
                    <b>sinh thiết </b>cho kết quả chính xác hơn. Tuy nhiên, với
                    một số trường hợp...
                  </p>
                </div>
                <div className='bnt-order-now'>
                  <a href=''><span>Đặt lịch ngay
                      <i className='fas fa-arrow-right'></i></span></a>
                  <a href=''><span>Xem Thêm
                      <i className='fas fa-angle-double-right'></i></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box-product'>
        <div className='container'>
          <div className='box-product-title'>
            <div className='box-product-title-sub'>
              <span>Chúng tôi có</span>
            </div>
            <div className='box-product-title-primary'>
              <h1>Sản phẩm y tế</h1>
            </div>
            <div className='box-product-title-decor'></div>
          </div>
          <div className='box-product-search'>
            <form action=''>
              <input type='text' placeholder='Tìm sản phẩm khác...' />
              <button><i className='fas fa-search'></i></button>
            </form>
          </div>
          <div className='box-product-showroom row'>
            {
              products.map((data) => {
                return (
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <article className="card-wrapper">
                      <div className="image-holder">
                        <Link to={"/product/"+data.id} className="image-holder__link"></Link>
                        <div className="image-liquid image-holder--original" style={{backgroundImage: `url(${data.imager})`,}}>
                        </div>
                        <div className="bnt-add-cart">
                          <i class="fas fa-cart-plus"></i>
                        </div>
                      </div>
                      <div className="product-description">
                        <h1 className="product-description__title">
                        <Link to={"/product/"+data.id}>{data.name}</Link>
                        </h1>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 product-description__price">
                          {formatCash(`${data.price}`)} đ
                          </div>
                          <div className="col-xs-12 col-sm-6 product-description__category secondary-text">
                          {formatCash(`${data.price}`)} đ
                          </div>
                        </div>
                        <hr />
                        <div className="description-short-wrapper">
                        {data.description_short}
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })
            }

            
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
