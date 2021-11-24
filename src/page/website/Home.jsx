import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import {useState} from "react";
import { list } from "../../api/productAPI";
import { Pagination} from 'antd';

export default function Home({products}) {

  const [toggleState,setToggleState] = useState(1);
  const [dataSearch, setDataSearch] = useState(products);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  function formatCash(str) {
    str = `${str}`;
      return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
      })
  }
  function onChageSearch(e) {
    var params = "q="+e.target.value;
    list(params).then((response) =>setDataSearch(response.data))
  }
  

  const contentStyle = {
    height: '500px',
    objectFit: 'cover',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
  };
  return (
    
    <main>
    <div className='banner' >
      <Carousel effect="scrollx" autoplay="true">
        <div>
          <img style={contentStyle} src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/banner-thang-1021/banner-921x280.webp" alt='' />
        </div>
        <div>
          <img style={contentStyle} src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/banner-thang-1021/website-3x1.webp" alt='' />
        </div>
        <div>
          <img style={contentStyle} src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/banner-thang-11/website-banner.webp" alt='' />
        </div>
        <div>
          <img style={contentStyle} src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/banner-thang-11/sp1k-banner-112021-01.webp" alt='' />
        </div>
      </Carousel>
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
                  <span>Chất lượng cao</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>3</span>
                </div>
                <div className='department-item-content'>
                  <span>Đội ngũ lành nghề</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>4</span>
                </div>
                <div className='department-item-content'>
                  <span>Chăm sóc chu đáo</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='bg-department-item'>
                <img src={process.env.PUBLIC_URL + '/assets/images/bg-department.png'} alt='' />
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
            </div>
          </div>
        </div>
      </div>
      <div className='box-generality'>
        <div className='container'>
          <div className='generality-title'>
            <h2>Danh mục sản phẩm</h2>
            <div className='generality-title-decor'></div>
          </div>
          <div className='row services-tab'>
            <Link to={"/loai-san-pham/1"} className="col-md-4 col-lg-2 service-tab-item">
                <img src={process.env.PUBLIC_URL + '/assets/images/icon_tab_1.png'} alt='' />
                <span>Thuốc trị ngoài da</span>
            </Link>
            <Link to={"/loai-san-pham/2"} className="col-md-4 col-lg-2 service-tab-item">
              <img src={process.env.PUBLIC_URL + '/assets/images/icon_tab_2.png'} alt='' />
              <span>Thuốc chữa bệnh</span>
            </Link>
            <Link to={"/loai-san-pham/3"} className="col-md-4 col-lg-2 service-tab-item">
              <img src={process.env.PUBLIC_URL + '/assets/images/icon_tab_3.png'} alt='' />
              <span>Thiết bị nội soi</span>
            </Link>
            <Link to={"/loai-san-pham/4"} className="col-md-4 col-lg-2 service-tab-item">
              <img src={process.env.PUBLIC_URL + '/assets/images/icon_tab_4.png'} alt='' />
              <span>Dụng cụ test covid</span>
            </Link>
            <Link to={"/loai-san-pham/5"} className="col-md-4 col-lg-2 service-tab-item">
              <img src={process.env.PUBLIC_URL + '/assets/images/icon_tab_5.png'} alt='' />
              <span>Xét nghiệm di truyền</span>
            </Link>
            <Link to={"/loai-san-pham/6"} className="col-md-4 col-lg-2 service-tab-item">
              <img src={process.env.PUBLIC_URL + '/assets/images/icon_tab_6.png'} alt='' />
              <span>Tế bào học</span>
            </Link>
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
              <input type='text' placeholder='Tìm sản phẩm khác...' onInput={(e) => onChageSearch(e)}/>
              <button><i className='fas fa-search'></i></button>
            </form>
          </div>
          <div className='box-product-showroom row'>
            {
              dataSearch.length > 0?
              dataSearch.map((data,index) => {
                return (
                  <div className="product-item col-lg-3 col-md-2" key={index}>
                      <div className="product-image">
                          <Link to={"/product/"+data.id}>
                              <img className="img-primary" src={data.imager}/>
                          </Link>
                          <div className="icon-on-image-product">
                            <Link to={"/product/"+data.id}>
                              <img className="icon-gif-cart" src={process.env.PUBLIC_URL + '/assets/images/addToCart3.gif'} alt="" />
                            </Link>
                          </div>
                      </div>
                      <div className="product-information">
                        <Link to={"/product/"+data.id}>
                            <p>{data.name}</p>
                            <div className="box-price">
                                <span className="price-primary">{formatCash(data.price-(data.price*data.discount/100))} đ</span>
                                <span className="price-sub">{formatCash(data.price)} đ</span>
                            </div>
                        </Link>
                      </div>
                      <span className="product-sale">-{formatCash(data.discount)} %</span>
                  </div>);
              })
              : <p className="data_sreach_empty">Không tìm thấy sản phẩm nào !</p>
            }
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

