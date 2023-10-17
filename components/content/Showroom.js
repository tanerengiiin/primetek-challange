import React from 'react'
import showroomData from "@/lib/showroomData"
import Image from 'next/image'

const Showroom = () => {
    return (
        <div id='contentBody__showroom'>
            {showroomData.map((data, i) => (
                <div key={data.id} className='card'>
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
    )
}

export default Showroom