import { Carousel as CarouselSlider } from 'antd';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import { list } from "../../api/productAPI";
// import { Pagination} from 'antd';
import Carousel  from 'react-elastic-carousel';
export default function Home({products,categories}) {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 4, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 }
  ];
  const [dataCategories,setDataCategories] = useState(categories.filter(item => item.active));
  const [dataProducts, SetDataProducts] = useState(products);

  useEffect(() => {
    setDataCategories(categories.filter(item => item.active));
    SetDataProducts(products);
  },[categories])
  function formatCash(str) {
    str = `${str}`;
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
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
      <CarouselSlider effect="scrollx" autoplay="true">
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
      </CarouselSlider>
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
                  <span>Thi???t b??? hi???n ?????i</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>2</span>
                </div>
                <div className='department-item-content'>
                  <span>Ch???t l?????ng cao</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>3</span>
                </div>
                <div className='department-item-content'>
                  <span>?????i ng?? l??nh ngh???</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='department-item'>
                <div className='department-item-number'>
                  <span>4</span>
                </div>
                <div className='department-item-content'>
                  <span>Ch??m s??c chu ????o</span>
                </div>
                <div className='department-item-decor'></div>
              </div>
              <div className='bg-department-item'>
                <img src={process.env.PUBLIC_URL + '/assets/images/bg-department.png'} alt='' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6 introduce'>
              <div className='title-sub'>
                <span>Gi???i Thi???u</span>
              </div>
              <div className='title-primary'>
                <h1>Ch???ng nh???n <br /> X??t nghi???m <span>chu???n ??o??n</span></h1>
              </div>
              <div className='introduce-main'>
                <p>
                  Ego Medical Center t??? h??o v??? c??c k??? n??ng ???????c ????o t???o c???n thi???t
                  cho vi???c chu???n b??? ki???m tra ??a d???ng. Ch??ng t??i tin t?????ng r???ng
                  ch???n ??o??n k???p th???i c?? th??? lo???i b??? v???t s???o c???a nhi???u b???nh nghi??m
                  tr???ng. N?? c?? th??? ???????c th???c hi???n n???u b???n tham kh???o ?? ki???n b??c s??
                  cho c??c b???nh nghi ng???.
                </p>
                <ul>
                  <li><i className='fas fa-check'></i>T???t c??? c??c b??o c??o cho kh??ch
                    h??ng ???????c th???c hi???n ????n gi???n v?? d??? hi???u</li>
                  <li><i className='fas fa-check'></i>Trang web th??n thi???n v???i ng?????i
                    d??ng</li>
                  <li><i className='fas fa-check'></i>Trang web d??? d??ng ???????c t??y ch???nh
                    d???a v??o thi???t l???p t???i ??u</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box-generality'>
        <div className='container'>
          <div className='generality-title'>
            <h2>Danh m???c s???n ph???m</h2>
            <div className='generality-title-decor'></div>
          </div>
          <Carousel breakPoints={breakPoints} enableSwipe={true}>
            {
              dataCategories.map((data,index) => {
                return (
                  <Link to={"/loai-san-pham/"+data.id} className="col-md-4 col-lg-2 service-tab-item">
                      <img src={data.imgager} alt='' />
                      <span>{data.name}</span>
                  </Link>
                )
              })
            }
          </Carousel>
        </div>
      </div>
      <div className='box-product'>
        <div className='container'>
          <div className='box-product-title'>
            <div className='box-product-title-primary'>
              <h1>S???n ph???m n???i b???t</h1>
            </div>
            <div className='box-product-title-decor'></div>
          </div>
          <div className='mt-3 box-product-showroom row'>
            <Carousel breakPoints={breakPoints} enableAutoPlay={true} enableMouseSwipe={true} >
                {
                  dataProducts.map((data,index) => {
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
                                    <span className="price-primary">{formatCash(data.price-(data.price*data.discount/100))} ??</span>
                                    <span className="price-sub">{formatCash(data.price)} ??</span>
                                </div>
                            </Link>
                          </div>
                          <span className="product-sale">-{formatCash(data.discount)} %</span>
                      </div>
                      );
                  })
                }
              </Carousel>
          </div>
        </div>
      </div>
      <div className='box-product'>
        <div className='container'>
          <div className='box-product-title'>
            <div className='box-product-title-sub'>
              <span>Ch??ng t??i c??</span>
            </div>
            <div className='box-product-title-primary'>
              <h1>S???n ph???m y t???</h1>
            </div>
            <div className='box-product-title-decor'></div>
          </div>
          <div className='mt-4 box-product-showroom row'>
            {
              dataProducts.length > 0?
              dataProducts.map((data,index) => {
                if(index<8) {
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
                                  <span className="price-primary">{formatCash(data.price-(data.price*data.discount/100))} ??</span>
                                  <span className="price-sub">{formatCash(data.price)} ??</span>
                              </div>
                          </Link>
                        </div>
                        <span className="product-sale">-{formatCash(data.discount)} %</span>
                    </div>
                  );
                }
              })
              : <p className="data_sreach_empty">Kh??ng t??m th???y s???n ph???m n??o !</p>
            }
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

