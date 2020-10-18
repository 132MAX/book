import React, { useState, useEffect } from "react"
import "./style.css"
export default()=>{
    return(
        <div className="discount">
             <div className="conteiner discount__conteiner">
                 <p>Скидка 200 ₽ при подписке на рассылку Издательства</p>
                <input type="email" placeholder="Введите ваш Email"/>
                <button>Подписаться</button>
             </div>
        </div>
    )
}