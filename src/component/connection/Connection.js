import React, { useState, useEffect } from "react"
import './style.css';


export default () => {

    return (
        <div className="connection">
            <div className="conteiner connection__conteiner">
                <img src="/logo.png" alt=""/>
                <div className="connection__input">
                    <input type="text" placeholder="Введите свой Email и получите скидку" />
                    <button></button>
                </div>
                <div className="connection__soz">
                    <div className="f"></div>
                    <div className="i"></div>
                    <div className="t"></div>
                </div>
            </div>
        </div>
        
    )
}