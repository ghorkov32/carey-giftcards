import { QRCodeSVG } from 'qrcode.react';
import {
	useState,
} from 'react';


export const GenQR = () => {
	const [ name, setName ] = useState('');
	const [ amount, setAmount ] = useState(1);
	const [ gift, setGift ] = useState('1');
	const [ qrURL, setQrURL ] = useState('');
	const download = () => {
		const svg = document.getElementById("QRCode");
		const svgData = new XMLSerializer().serializeToString(svg ?? new HTMLElement());
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx!.drawImage(img, 0, 0);
			const pngFile = canvas.toDataURL("image/png");
			const downloadLink = document.createElement("a");
			downloadLink.download = "QRCode";
			downloadLink.href = `${ pngFile }`;
			downloadLink.click();
		};
		img.src = `data:image/svg+xml;base64,${ btoa(svgData) }`;
	};

	return (
		<>
			<form>
				<label>
					Nombre:
					<input type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) } />
				</label>
				<select value={ gift } onChange={ (e) => setGift(e.target.value) }>
					<option value="1">Combo 4 Sesiones 1 hora</option>
					<option value="2">Combo 4 Sesiones 1 hora y media</option>
					<option value="3">Sesión 1 hora</option>
					<option value="4">Sesión 1 hora y media</option>
				</select>
				<input value={ amount } onChange={ (e) => setAmount(Number(e.target.value)) } type={ 'number' } />
				<button onClick={ (e) => {

					e.preventDefault();
					setQrURL(`https://carey-giftcards.netlify.app/${ encodeURIComponent(name) }/${ gift }/${ amount }`);
				} }>Generar!
				</button>
			</form>

			{
				qrURL.length > 0 &&
                <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                    <QRCodeSVG
                        id="QRCode"
                        size={ 128 }
                        level={ "L" }
                        includeMargin={ false }
                        value={ qrURL }
                    />
                    <input type="button" value="Descargar" onClick={ download } />
                </div>
			}
		</>
	);
};