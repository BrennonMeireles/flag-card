// import Visa from '../../../src/img/294654_visa_icon.png'
// import Elo from '../../../src/img/elo_icon.png'
// import Hiper from '../../../src/img/hipercard_icon.png'
// import Master from '../../../src/img/mastercard.png'
// import Maestro from '../../../src/img/maestro-icon.svg'

// import './style.css'

// const flagImg = {
//     Visa : Visa,
//     Elo : Elo,
//     Hiper : Hiper,
//     Master : Master,
//     Maestro : Maestro
//   }

// export default function Brand({ brand }) {

//     switch (flag) {
//         case 1: return <img src={Visa} />
//         case 2: return <img src={Elo} />
//         case 3: return <img src={Hiper} />
//         case 4: return <img src={Master} />
//         case 5: return <img src={Maestro} />

//         default: return <h1>Selecione uma Bandeira disponivel</h1>
//     }

//     return (
//         <img src={flagImg} alt={`imagem da bandeira ${brand}`} />
//     )
// }


import React   from 'react';
import Visa    from '../../../src/img/294654_visa_icon.png';
import Elo     from '../../../src/img/elo_icon.png';
import Hiper   from '../../../src/img/hipercard_icon.png';
import Master  from '../../../src/img/mastercard.png';
import Maestro from '../../../src/img/maestro-icon.svg';

import './style.css';

// Mapeia o nome da bandeira para a imagem correspondente
const flagImg = {
    Visa,
    Elo,
    Hiper,
    Master,
    Maestro
};

export default function Brand({ brand }) {
    // Obtém o caminho da imagem com base no nome da bandeira
    const imageSrc = flagImg[brand];

    return (
        imageSrc ? (
            <img src={imageSrc} alt={`imagem da bandeira ${brand}`} />
        ) : (
            <h1>Selecione uma bandeira disponível</h1>
        )
    );
}
