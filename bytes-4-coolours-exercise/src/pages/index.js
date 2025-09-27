import { useState, useEffect } from "react";
import FirstComponent from "../components/FirstComponent";

function randomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

export default function Bytes() {
  const [paleta, setPaleta] = useState(
    Array.from({ length: 5 }, () => ({ hex: randomHexColor(), locked: false })) //aqui o 5 sao numero de cores
  );

  // Gera nova paleta (respeitando cores travadas)
  function gerarNovaPaleta() {
    setPaleta(paleta.map(c => (c.locked ? c : { hex: randomHexColor(), locked: false })));
  }

  // Alterna bloqueio da cor
  function toggleLock(index) {
    P
    setPaleta(
      paleta.map((c, i) => (i === index ? { ...c, locked: !c.locked } : c))
    );
  }

  // tecla "Space"
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Space") {
        e.preventDefault();
        gerarNovaPaleta();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Remove o listener quando o componente desmonta
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paleta]);

  return (
    // fundo
    <div className="p-5 min-h-screen flex flex-col items-center justify-center bg-gray-190">
      <button
        onClick={gerarNovaPaleta}
        className="mb-5 px-4 py-2 bg-pink-600 text-white rounded hover:bg-white-100"
      >
        Gerar Nova Paleta
      </button>


      <div className="relative flex gap-2">
        {/* Título mais pra cima, sobreposto às colunas */}
        <div className="absolute top-25 left-1/2 transform -translate-x-1/2 z-10">
          <h1 className="text-6xl font-bold text-white bg-black/30 px-6 py-4 rounded-lg shadow-lg">
            Bytes4Coolours
          </h1>
        </div>

        {/* Colunas de cores */}
        {paleta.map((cor, index) => (
          <FirstComponent
            key={cor.hex + index}
            cor={cor}
            index={index}
            toggleLock={toggleLock}
          />
        ))}
      </div>
    </div>
  );
}
