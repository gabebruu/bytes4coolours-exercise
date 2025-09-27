import { useState } from "react";

// Função que retorna uma string com uma cor aleatória em hexadecimal 
function randomHexColor() {
    let letters = "0123456789abcdef"; // todos os caracteres possíveis
    let color = "#";                  // começa com #

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16); // sorteia de 0 até 15
        color += letters[randomIndex]; // pega o caractere correspondente
    }

    return color;
}


export default function Bytes4Coolors() {
    // Array de cores [{ hex: "#aabbcc", locked: false }]
    const [paleta, setPaleta] = useState([
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false }
    ]);

    function gerarNovaPaleta() {
        setPaleta([
            { hex: randomHexColor(), locked: false },
            { hex: randomHexColor(), locked: false },
            { hex: randomHexColor(), locked: false },
            { hex: randomHexColor(), locked: false },
            { hex: randomHexColor(), locked: false }
        ]);
    };

    return (
        <div>
            <button onClick={gerarNovaPaleta}>Gerar Nova Paleta</button>
            {paleta.map((cor, index) => (
                <p key={index}>{cor.hex}</p>
            ))}
        </div>
    );
}