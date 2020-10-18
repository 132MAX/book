import React, { useState } from "react"
import './style.css';
const city = [
    "Балашиха",
    "Егорьевск",
    "Зарайск",
    "Химки",
    "Ступино",
    "Волоколамск",
    "Подольск",
    "Дмитров",
    "Лосино-Петровский ",
    "Королев",
    "Дубна",
    "Котельники",
    "Мытищи",
    "Павловский Посад ",
    "Старая Купавна",
    "Люберцы",
    "Ивантеевка",
    "Электрогорск",
    "Коломна",
    "Солнечногорск",
    "Рошаль",
    "Электросталь",
    "Климовск",
    "Черноголовка",
    "Железнодорожный",
    "Видное",
    "Пущино",
]
const citySort = city.sort()
function City(props) {


    return (<div className="address__city"
        style={props.flag ? { display: `none` } : { backgroundColor: `` }}
    >
        <div className="city__conteiner">

            <div className="city__title">
                <h3 className="city__title-h title">Ваш населённый пункт</h3>
                <div className="city__title-button"
                    onClick={() => (props.setFlag(!props.flag))}></div>
            </div>
            <p className="city__text">Поиск населенного пункта</p>
            <input className="city__input"
                onChange={(e) => props.setCityName(e.target.value)}
                type="text" placeholder="Откуда вы?" />
            <div className="city__name">
                {citySort.map((elem, index) => {
                    return (
                        <div
                            className={elem.toUpperCase() == props.cityName.toUpperCase() ? "city-optionTrue city-option" : "city-option"}
                            onClick={() => props.setCityName(elem)}
                        >
                            {elem}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}
export default () => {
    const [cityName, setCityName] = useState("Москва")
    const [flag, setFlag] = useState(true)
    return (
        <div className="address">


            <div className="conteiner address__line address__box">
                <div className="address__place">
                    <div className="address__place-location">
                    {/* address__place-location-city-name */}
                        <div className= {flag ? "address__place-location-city-name" : "address__place-location-city-name-pressed" }
                            onClick={() => (setFlag(!flag))}
                        >
                            {cityName}
                        </div>
                        <div className="address__place-location-city">
                            <City
                                cityName={cityName}
                                setCityName={setCityName}
                                flag={flag}
                                setFlag={setFlag}
                            />
                        </div>
                        <div className="address__place-location-delivery">Доставка и оплата</div>
                        <div className="address__place-location-hours">Адрес и часы работы</div>
                    </div>
                    <div className="address__place-connection">
                        <a className="address__place-connection-email" href="mailto:market@estatut.ru">market@estatut.ru</a>
                        <a className="address__place-connection-tel" href="tel:+79686606550"> 8 (968) 660-65-50</a>
                    </div>
                </div>
            </div>
        </div>

    )
}