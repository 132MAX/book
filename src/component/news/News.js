import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
const books = [{
    price: 4500,
    img :"/n1.png",
    scribbling: "Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..." ,
writer : "18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
},
{
    price: 372,
    img :"/n2.png",
    scribbling: "Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..." ,
writer : "18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
},
{
    price: 984,
    img :"/n3.png",
    scribbling: "Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..." ,
writer : "18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
},
{
    price: 450,
    img :"/n1.png",
    scribbling: "Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..." ,
writer : "18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
},
{
    price: 1240,
    img :"/n3.png",
    scribbling: "Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в рос..." ,
writer : "18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч..."
}]
function BoockDay(props) {
    const [seconds, setSeconds] = useState();
    return (
        <div className="">

            <div className="news">

                <div className="news__img">
                    <img src={props.img} alt="" />
                </div>
                <p className="info__book news__date">16 июня 2020</p>
    <p className="info__scribbling news__scribbling">{props.scribbling}</p>
                <p className="info__writer news__writer">{props.writer}.</p>
                <div className="info__button">
                    <button className="info__button-basket news__button-basket">Читать</button>
                    
                </div>
            </div>


          
        </div>
    )
}

export default () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="new news">
            <div className="conteiner new__conteiner">
                <div className="new__title">Новости</div>
                <Slider {...settings}>
                    {
                        books.map((elem, index) => {
                            return <BoockDay
                            price={elem.price}
                            img={elem.img}
                            scribbling={elem.scribbling}
writer={elem.writer}
                            />

                        })
}


                </Slider>
            </div>
        </div>
    )
}