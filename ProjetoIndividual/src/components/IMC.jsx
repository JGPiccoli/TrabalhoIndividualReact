import { useState } from "react";

export default function IMC() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [texto, setTexto] = useState("");
  const [resposta, setResposta] = useState("");

  function CalcularImc(event) {
    event.preventDefault();

    const calcAltura = parseFloat(altura) / 100;
    const imc = peso / (calcAltura * calcAltura);
    let resultado = "";

    if (imc < 18.5) {
      resultado = "baixo peso";
    } else if (imc < 24.9) {
      resultado = "peso ideal";
    } else if (imc < 29.9) {
      resultado = "sobrepeso";
    } else if (imc < 34.9) {
      resultado = "obesidade de grau 1";
    } else if (imc < 39.9) {
      resultado = "obesidade de grau 2";
    } else {
      resultado = "obesidade extrema";
    }
    setTexto(resultado);
    setResposta(
      `${nome} com a sua altura de ${altura} cm e seu peso de ${peso}Kg você está com ${texto}`
    );
    console.log(
      `Com a sua altura de ${altura} cm e seu peso de ${peso}Kg você está com ${texto}`
    );
  }

  return (
    <div>
      <div className="caixa">
        <form onSubmit={CalcularImc}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Digite o seu Nome"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <hr />
          <label>Peso: </label>
          <input
            type="number"
            placeholder="Digite o seu Peso"
            name="peso"
            onChange={(e) => setPeso(parseFloat(e.target.value))}
          />
          <hr />
          <label>Altura: </label>
          <input
            type="number"
            placeholder="Digite a sua Altura"
            name="altura"
            onChange={(e) => setAltura(parseFloat(e.target.value))}
          />
          <hr />
          <button type="submit" onClick={resposta}>
            Calcular IMC
          </button>
          {resposta && <p>{resposta}</p>}
        </form>
      </div>
    </div>
  );
}
