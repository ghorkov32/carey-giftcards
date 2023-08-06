import './App.css'
import {
    useParams,
} from "react-router-dom";
import stars from './stars.gif';
import igIcon from './ig.svg'


function App() {
    const params = useParams();
    let productText;
    switch (params.product) {
        case '1': productText = 'un Combo mensual de 4 sesiones de 1 hora'; break;
        case '2': productText = 'un Combo mensual de 4 sesiones de 1 hora y media'; break;
        case '3': productText = 'una Sesión de una hora'; break;
        case '4': productText = 'una Sesión de una hora y media'; break;
        default: break;
    }
  return (
    <>
        <p className={'title'}>
            {`Hola ${params.name}!`}
        </p>
        <p className={'content'}>
            {`Te han obsequiado ${productText} de masajes relajantes/descontracturantes!`}
        </p>
        <div className={'footer'}>
            <img className={'stars'} src={stars}/>
            <div className={'footer-text'}>
                <p className={'regards'}>
                    {`Que lo disfrutes!`}
                </p>
                <span className={'company'} onClick={() => window.open('https://www.instagram.com/carey.masoterapia/?hl=es')}>
                    <img className={'ig-icon'} src={igIcon}/>{`CAREY MASOTERAPIA`}
                </span>
            </div>
            <img className={'stars'} src={stars}/>
        </div>
    </>
  )
}

export default App
