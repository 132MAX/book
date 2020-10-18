import React, { useState, useEffect } from "react"
import './style.css';
const table=[{
    title:"Покупателям",
    p1:"Наша почта",
    p2:"Оплата и доставка",
    p3:"Вопросы и ответы"},

{
    title:"Издательство",
    p1:"О компании",
    p2:"Авторам",
    p3:"Вакансии",
    p4:"Контакты"
},
{
    title:"Книги",
    p1:"Все категории",
    p2:"Бестселлеры",
    p3:"Новинки",
    p4:"Скидки и акции"
},
{
    title:"Прайс-лист",
    p1:"Скачать прайс-лист"
},
{
    title:"Телефон и Email",
    p1:"market@estatut.ru",
    p2:"8 (968) 660-65-50"
}]

export default () => {
    return (
        <div className="footer">
            <div className="conteiner footer__conteiner">
                <div className="footer_top">
                    {table  .map((elem , index)=>{
                        return <div className="footer__teble">
                            <div className="fotter__tetle">{elem.title}</div>
                    <a href="">{elem.p1}</a>
                    <a href="">{elem.p2}</a>
                    <a href="">{elem.p3}</a>
                    <a href="">{elem.p4}</a>
                        </div>
                    })}
                </div>
                <div className="footer__bottom">
                    <div className="">© 2020 Издательство «Статут»</div>
                <div className="">ул. Лобачевского, 92, корп. 2 119454, г. Москва</div>
                <div className="">Политика конфиденциальности</div>
               <div className="">Договор оферты</div>
                </div>
            </div>
        </div>
    )
}