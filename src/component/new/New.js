import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
const books = [{
    price: 4500,
    img :"/b1.png",
    description: "Корпоративное право",
    scribbling: "Инвестирование: способы, риски, субъекты : монография" ,
writer : "Майфат А.В."
},
{
    price: 372,
    img :"/b2.png",
    description: "Договорное право",
    scribbling: "Договор коммерческой концессии (франчайзинг). Граж..." ,
writer : "Багдасарян А.Ф."
},
{
    price: 984,
    img :"/b3.png",
    description: "Конкурентное право",
    scribbling: "Договор коммерческой концессии (франчайзинг). Граж..." ,
writer : "Башлаков-Николаев И.В."
},
{
    price: 450,
    img :"/b1.png",
    description: "Корпоративное право",
    scribbling: "Инвестирование: способы, риски, субъекты : монография" ,
writer : "Майфат А.В."
},
{
    price: 1240,
    img :"/b3.png",
    description: "Корпоративное право",
    scribbling: "Инвестирование: способы, риски, субъекты : монография" ,
writer : "Майфат А.В."
}]
function BoockDay(props) {
    const [seconds, setSeconds] = useState();
    return (
        <div className="">

            <div className="new__book">

                <div className="new__img">
                    <img src={props.img} alt="" />
                </div>
    <p className="info__book">{props.description}</p>
    <p className="info__scribbling">{props.scribbling}</p>
                <p className="info__writer">{props.writer}.</p>
                <p className="info__price">{props.price} ₽ </p>
                <div className="info__appraisal">
                    <div className="info__appraisal-item1">4.9</div>
                    <div className="info__appraisal-item2">89% рекомендуют</div>
                </div>
                <div className="info__button">
                    <button className="info__button-basket">В корзину</button>
                    <button className="info__button-postpone"></button>
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
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="new">
            <div className="conteiner new__conteiner">
                <div className="new__title">Новое поступления</div>
                <Slider {...settings}>
                    {
                        books.map((elem, index) => {
                            return <BoockDay
                            price={elem.price}
                            img={elem.img}
                            description={elem.description}
                            scribbling={elem.scribbling}
writer={elem.writer}
                            />

                        })
}


                </Slider>
                <div className="nev__text">Показать все книги раздела</div>
            </div>
        </div>
    )
}