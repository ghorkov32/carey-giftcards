import './App.css';
import {
	useParams,
} from "react-router-dom";
import stars from './stars.gif';
import igIcon from './ig.svg';


function App() {
	const params = useParams();
	let productText;
	let { amount, product, name } = params;
	const prefixCombo = `${ Number(amount) === 1
							? 'un Combo'
							: `${ amount } Combos` } ${ Number(amount) > 1
														? 'mensuales'
														: `mensual` }`;
	const prefixSession = `${ Number(amount) === 1
							  ? 'una Sesión'
							  : `${ amount } Sesiones` }`;
	switch (product) {
		case '1':
			productText = `${ prefixCombo } de 4 sesiones de 1 hora`;
			break;
		case '2':
			productText = `${ prefixCombo } de 4 sesiones de 1 hora y media`;
			break;
		case '3':
			productText = `${ prefixSession } de una hora`;
			break;
		case '4':
			productText = `${ prefixSession } de una hora y media`;
			break;
		default:
			break;
	}
	return (
		<div className={ 'container' }>
			<div className={ 'top' }></div>
			<p className={ 'title' }>
				{ `Hola ${ name }!` }
			</p>
			<p className={ 'content' }>
				{ `Te han obsequiado ${ productText } de masajes relajantes/descontracturantes!` }
			</p>
			<div className={ 'footer' }>
				<img className={ 'stars' } src={ stars } />
				<div className={ 'footer-text' }>
					<p className={ 'regards' }>
						{ `Que lo disfrutes!` }
					</p>
					<div className={ 'company-container' }>
                    <span className={ 'company' }
						  onClick={ () => window.open('https://www.instagram.com/carey.masoterapia/?hl=es') }>
                        <img className={ 'ig-icon' } src={ igIcon } />{ `CAREY MASOTERAPIA` }
                    </span>
					</div>
				</div>
				<img className={ 'stars' } src={ stars } />
			</div>
		</div>
	);
}

export default App;
