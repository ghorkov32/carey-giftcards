import QRCode from "react-qr-code";
import {
	useState,
} from 'react';


export const GenQR = () => {
	const [name, setName] = useState('')
	const [gift, setGift] = useState('')
	const [qrURL, setQrURL] = useState('')
	const onImageDownload = () => {
		const svg = document.getElementById("QRCode");
		const svgData = new XMLSerializer().serializeToString(svg);
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);
			const pngFile = canvas.toDataURL("image/png");
			const downloadLink = document.createElement("a");
			downloadLink.download = "QRCode";
			downloadLink.href = `${pngFile}`;
			downloadLink.click();
		};
		img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
	};

	return (
		<>
			<form>
				<label>
					Nombre:
					<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
				</label>
				<select value={gift} onChange={(e) => setGift(e.target.value)}>
					<option value="1">Combo 4 Sesiones 1 hora</option>
					<option value="2">Combo 4 Sesiones 1 hora y media</option>
					<option value="3">Sesión 1 hora</option>
					<option value="4">Sesión 1 hora y media</option>
				</select>
				<button onClick={(e) => {

					e.preventDefault();
					setQrURL(`https://carey-masoterapia.netlify.app/${ name }/${ gift }`)
				}}>Generar!</button>
			</form>

			{
				qrURL.length > 0 &&
				<>
                    <QRCode
                        id="QRCode"
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={qrURL}
                        viewBox={`0 0 256 256`}
                    />
                    <input type="button" value="Descargar" onClick={onImageDownload} />
				</>
			}
		</>
	);
};