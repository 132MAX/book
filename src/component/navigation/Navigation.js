import React, { useState } from "react"
import './style.css';



export default () => {

    return (
        <div className="navigatiion">
            <div className="conteiner navigatiion__content">

                <div className="navigatiion__client">
                    <div className="navigatiion__client-boxLeft">
                        <div className="navigatiion__client-logo">
                            <img src="./logo.png" alt=""/>
                        </div>
                        <div className="navigatiion__client-search">
                            <input type="text" className="navigatiion__client-search-input"
                            placeholder="Автор, название, ISBN"/>
                            <button className="navigatiion__client-search-button">Искать</button>
                        </div>
                    </div>
                    <div className="navigatiion__client-boxRight">
                        <a href="" className="navigatiion__client-postponed">Отложено</a>
                        <a href="" className="navigatiion__client-enter">Войти</a>
                        <a href="" className="navigatiion__client-basket">Корзина</a>
                    </div>
                </div>
                <div className="navigatiion__menu">
                    <div className="navigatiion__menu-item"><a href="">Каталог</a></div>
                    <div className="navigatiion__menu-item"><a href="">Авторы</a></div>
                    <div className="navigatiion__menu-item"><a href="">Новинки</a></div>
                    <div className="navigatiion__menu-item"><a href="">Скидки</a></div>
                    <div className="navigatiion__menu-item"><a href="">Партнёрам</a></div>
                    <div className="navigatiion__menu-item"><a href="">Мы</a></div>
                </div>

            </div>
        </div>

    )
}