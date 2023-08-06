import './App.css'
import {
    useParams,
} from "react-router-dom";

const getAmountText = (uses: number) => {
    return uses === 1 ? '1 sesión' : `${uses} sesiones`
}

function App() {
    const params = useParams();
    let productText;
    switch (params.product) {
        case '1': productText = 'una hora'; break;
        case '2': productText = 'una hora y media'; break;
        default: break;
    }
  return (
    <>
        <p>
            {`Hola ${params.name}!`}
        </p>
        <p>
            {`Recibiste una Gift Card valida por ${getAmountText(Number(params.uses))} de ${productText}!`}
        </p>
        <p>
            {`Que lo disfrutes!`}
        </p>
        <p>
            {`Carey Masoterapia`}
        </p>
    </>
  )
}

export default App
