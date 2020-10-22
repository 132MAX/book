import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

function BoockDay() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
   //  let diff =Math.round( (tomorrow - now)/ 1000); разница в миллисекундах
    const [diff ,setDiff]=useState(Math.round( (tomorrow - now)/ 1000))
    const hours = Math.floor((diff / 60 / 60) % 24)
    const minutes=Math.floor((diff / 60) % 60)
    const seconds=Math.floor(diff % 60)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDiff(diff => diff - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <div className="info__title">
                <div className="info__text">Книга дня</div>
                <div className="info__time">

                    {hours}:{minutes}:{seconds}
                    
                   
                </div>
            </div>
            <div className="info__img">
                <img src="/olegroy.png" alt="" />
            </div>
            <p className="info__book">Корпоративное право</p>
            <p className="info__scribbling">Инвестирование: способы, риски, субъекты : монография</p>
            <p className="info__writer">Майфат А.В.</p>
            <p className="info__price">4 450 ₽ </p>
            <div className="info__button">
                <button className="info__button-basket">В корзину</button>
                <button className="info__button-postpone"></button>
            </div>
        </div>
    )
}
export default () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="info">
            <div className="conteiner info__content">
                <div className="info__selle">
                    <div className="info__selle-slider">
                        <Slider {...settings}>
                            <div className="info__selle-slider-item">
                                <img src="/salle.png" alt="" />
                            </div>
                            <div className="info__selle-slider-item">
                                <img src="/salle.png" alt="" />
                            </div>
                            <div className="info__selle-slider-item">
                                <img src="/salle.png" alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="info__selle-box">
                        <div className="info__selle-box-1">
                            <p >Бесплатно доставим ваш заказ при покупке от 2000 ₽</p>
                            <img src="/box11.png" alt="" />
                        </div>
                        <div className="info__selle-box-2">
                            <p >Скидка <br /> при регистрации до 15%</p>
                            <img src="/box22.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="info__day">

                    <BoockDay />
                </div>
            </div>
        </div>
    )
}


// function BoockDay() {
//      var date = new Date()
//     // var secondr = date.getSeconds()
//     // var formatter = new Intl.DateTimeFormat("ru", {
//     //     hour: "numeric",
//     //     minute: "numeric",
//     //     second: "numeric"
//     //   });
//     // const[dates , setDate]= useState(formatter.format(date))


//      const [seconds, setSeconds] = useState(date.getSeconds());



//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds(seconds => seconds - 1);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="">
//             <div className="info__title">
//                 <div className="info__text">Книга дня</div>
//                 <div className="info__time">
//                     {new Date().toLocaleTimeString()}
//                 </div>
//             </div>
//             <div className="info__img">
//                 <img src="/olegroy.png" alt="" />
//             </div>
//             <p className="info__book">Корпоративное право</p>
//             <p className="info__scribbling">Инвестирование: способы, риски, субъекты : монография</p>
//             <p className="info__writer">Майфат А.В.</p>
//             <p className="info__price">4 450 ₽ </p>
//             <div className="info__button">
//                 <button className="info__button-basket">В корзину</button>
//                 <button className="info__button-postpone"></button>
//             </div>
//         </div>
//     )
// }