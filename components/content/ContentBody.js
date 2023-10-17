import React from 'react'
import topSales from "@/lib/topSalesData"
import showroomData from "@/lib/showroomData"
import Image from 'next/image'
const ContentBody = () => {
  return (
    <div id='contentBody'>
      <div id='contentBody__heading'>
        <h1>Popular Products</h1>
        <h2>Selected Exclusively</h2>
      </div>
      <div id='contentBody__topSales'>
        <div className='card'>
          <div className='contentBody__topSales--heading'>
            <h5 className='contentBody__topSales--headingTitle'>
              Top Sales
            </h5>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5 5.90625C11.3457 5.90625 12.0312 5.22069 12.0312 4.375C12.0312 3.52931 11.3457 2.84375 10.5 2.84375C9.65431 2.84375 8.96875 3.52931 8.96875 4.375C8.96875 5.22069 9.65431 5.90625 10.5 5.90625ZM10.5 12.0312C11.3457 12.0312 12.0312 11.3457 12.0312 10.5C12.0312 9.65431 11.3457 8.96875 10.5 8.96875C9.65431 8.96875 8.96875 9.65431 8.96875 10.5C8.96875 11.3457 9.65431 12.0312 10.5 12.0312ZM12.0312 16.625C12.0312 17.4707 11.3457 18.1562 10.5 18.1562C9.65431 18.1562 8.96875 17.4707 8.96875 16.625C8.96875 15.7793 9.65431 15.0938 10.5 15.0938C11.3457 15.0938 12.0312 15.7793 12.0312 16.625Z" fill="#607D8B" />
            </svg>

          </div>
          {topSales.map((data, i) => (
            <div key={data.id} className='row'>
              <div className='row__image'>
                <Image src={data.productUrl} alt={data.name} width={0} height={0} sizes='100vw'/>
              </div>
              <div className='row__content'>
                <h5>{data.name}</h5>
                <div className='row__content--product'>
                  <p className='row__content--productStore'>{data.store}</p>
                  {!!data.label && <span className='row__content--productLabel'>{data.label}</span>}
                  <span className='row__content--productPrice'>$12.34</span>
                </div>
                <div className='row__content--point'>
                  {Array(5).fill(null).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.32 5.76332C12.2956 5.68582 12.2498 5.61678 12.1879 5.56415C12.1259 5.51152 12.0504 5.47744 11.97 5.46582L8.80834 5.00499L7.39084 2.14082C7.35049 2.07314 7.29326 2.0171 7.22475 1.97818C7.15624 1.93925 7.0788 1.91879 7 1.91879C6.92121 1.91879 6.84376 1.93925 6.77525 1.97818C6.70674 2.0171 6.64951 2.07314 6.60917 2.14082L5.19167 5.00499L2.03 5.46582C1.94958 5.47744 1.87406 5.51152 1.81215 5.56415C1.75023 5.61678 1.70443 5.68582 1.68 5.76332C1.65393 5.84054 1.64995 5.92351 1.6685 6.00287C1.68705 6.08223 1.7274 6.15483 1.785 6.21249L4.08334 8.44082L3.54084 11.5908C3.52709 11.6719 3.53617 11.7553 3.56708 11.8315C3.59798 11.9077 3.64949 11.9739 3.71584 12.0225C3.78229 12.0698 3.86066 12.0977 3.94209 12.1028C4.02353 12.108 4.10478 12.0903 4.17667 12.0517L7 10.5642L9.82917 12.0517C9.89175 12.086 9.96196 12.104 10.0333 12.1042C10.1251 12.1031 10.2145 12.0747 10.29 12.0225C10.3563 11.9739 10.4079 11.9077 10.4388 11.8315C10.4697 11.7553 10.4788 11.6719 10.465 11.5908L9.91667 8.44082L12.2092 6.21249C12.2678 6.15546 12.3092 6.08315 12.3288 6.00376C12.3484 5.92436 12.3454 5.84107 12.32 5.76332Z" fill={i < data.point ? "#FBC02D" : "#BDBDBD"} />
                    </svg>
                  ))}
                </div>
                <div className='row__price--mobile'>
                  <h3>$12345.00</h3>
                  <h5>123K Reviews</h5>
                </div>
              </div>
              <div className='row__price'>
                <h3>$12345.00</h3>
                <h5>123K Reviews</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id='contentBody__showroom'>
        {showroomData.map((data, i) => (
          <div className='card'>
            <div className='contentBody__showroom--image'>
              <Image src={data.productUrl} alt={data.name} fill />
              <div className='contentBody__showroom--labelOverlay'>
                <div className='contentBody__showroom--label'>
                  {data.label}
                </div>
              </div>
            </div>
            <div className='contentBody__showroom--heading'>
              <div className='contentBody__showroom--headingTitle'>
                {data.name}
              </div>
              <div className='contentBody__showroom--headingPoint'>
                <span>
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1466 8.64497C19.11 8.52871 19.0413 8.42516 18.9484 8.34621C18.8556 8.26727 18.7423 8.21615 18.6216 8.19872L13.8791 7.50747L11.7529 3.21122C11.6924 3.1097 11.6065 3.02563 11.5038 2.96725C11.401 2.90887 11.2848 2.87817 11.1666 2.87817C11.0485 2.87817 10.9323 2.90887 10.8295 2.96725C10.7268 3.02563 10.6409 3.1097 10.5804 3.21122L8.45415 7.50747L3.71165 8.19872C3.59101 8.21615 3.47773 8.26727 3.38486 8.34621C3.29199 8.42516 3.22328 8.52871 3.18665 8.64497C3.14754 8.7608 3.14156 8.88525 3.16939 9.00429C3.19722 9.12333 3.25774 9.23223 3.34415 9.31872L6.79165 12.6612L5.9779 17.3862C5.95727 17.5079 5.9709 17.6329 6.01726 17.7472C6.06362 17.8616 6.14088 17.9608 6.2404 18.0337C6.34007 18.1047 6.45763 18.1465 6.57978 18.1542C6.70193 18.1619 6.82381 18.1354 6.93165 18.0775L11.1666 15.8462L15.4104 18.0775C15.5043 18.129 15.6096 18.1561 15.7166 18.1562C15.8543 18.1546 15.9884 18.112 16.1016 18.0337C16.2012 17.9608 16.2784 17.8616 16.3248 17.7472C16.3711 17.6329 16.3848 17.5079 16.3641 17.3862L15.5416 12.6612L18.9804 9.31872C19.0683 9.23318 19.1305 9.12471 19.1599 9.00562C19.1892 8.88653 19.1847 8.76159 19.1466 8.64497Z" fill="#FBC02D" />
                  </svg>
                </span>
                <span>
                  {data.point.toFixed(1)}
                </span>
              </div>
            </div>
            <div className='contentBody__showroom--description'>{data.description}</div>
            <div className='contentBody__showroom--price'>$123.00</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentBody