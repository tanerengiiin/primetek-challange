import React from 'react'
import topSales from "@/lib/topSalesData"
import Image from 'next/image'
const TopSales = () => {
    return (
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
                            <Image src={data.productUrl} alt={data.name} width={0} height={0} sizes='100vw' />
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
    )
}

export default TopSales