import React, { useState, useEffect } from "react"
import './style.css';

const playmentElem=[{
    img:"/time.png",
    title: "Быстрая доставка",
    text:"Доставим бесплатно от 2000 ₽ по всей России"

},{
    img:"/map.png",
    title: "Безопасная оплата",
    text:"Плати безопасно и легко онлайн на нашем сайте."

},{
    img:"/star.png",
    title: "Бонусная программа",
    text:"Дополнительная скидка 15% при регистрации"

},{
    img:"/package.png",
    title: "Большой выбор",
    text:"Ежегодно выходит в свет более 100 книг"

}]
function Playment(props){
    return(
        <div className="playment__box">
            <img src={props.img} alt=""/>
            <div className="playment__box-text">
    <p>{props.title}</p>
    <p>{props.text}</p>
            </div>
        </div>
    )
}
export default()=>{
    return(
        <div className="playment">
             <div className="conteiner playment__conteiner">
                 <div className="playment__item">
                     {playmentElem.map((elem ,index)=>{
                         return<Playment
                         img= {elem.img}
title= {elem.title}
text= {elem.text}
                         />
                     })}
                     
                 </div>
             </div>
            
        </div>
    )
}