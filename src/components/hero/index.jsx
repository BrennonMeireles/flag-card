import './style.css'

import Visa from '../../img/294654_visa_icon.png'

export default function Hero({alignment}){
    return(
        <div className={`hero-container hero-${alignment}`}>
            <img src={Visa} alt="" />
            <div className="hero-text">
                <h6>Feature One</h6>
                <h2>Describe benefit of feature one</h2>
                <p>Lorem impsun da silva santos de almeida freitas arroba hotmail ponto com</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}