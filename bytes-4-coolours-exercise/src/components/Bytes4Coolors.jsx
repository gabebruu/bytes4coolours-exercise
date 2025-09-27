import { useState } from "react";

// Função que retorna uma string com uma cor aleatória em hexadecimal 
function randomHexColor() {
    return (
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
    );
}

export default function Bytes4Coolors() {
    const [paleta, setPaleta] = useState([
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false },
        { hex: randomHexColor(), locked: false }
    ]);

    function gerarNovaPaleta() {
        setPaleta((coresAtuais) =>
            coresAtuais.map((cor) =>
                cor.locked ? cor : { hex: randomHexColor(), locked: false }
            )
        );
    }

    function toggleLock(index) {
        setPaleta((coresAtuais) =>
            coresAtuais.map((cor, i) =>
                i === index ? { ...cor, locked: !cor.locked } : cor
            )
        );
    }

    function copiarHex(hex) {
        navigator.clipboard.writeText(hex);
        alert(`Cor ${hex} copiada!`);
    }

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Paleta de cores ocupando a tela inteira */}
            <div style={{ display: "flex", flex: 1 }}>
                {paleta.map((cor, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: cor.hex,
                            color: "#fff",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            fontSize: "1.2rem",
                            cursor: "pointer"
                        }}
                    >
                        <p>{cor.hex}</p>
                        {/* Botões ficam um pouco acima do centro */}
                        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                            <button onClick={() => copiarHex(cor.hex)}>Copiar</button>
                            <button onClick={() => toggleLock(index)}>
                                {cor.locked ? "Desbloquear" : "Bloquear"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão Gerar Nova Paleta centralizado embaixo */}
            <div
                style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#222",
                }}
            >
                <button
                    onClick={gerarNovaPaleta}
                    style={{
                        padding: "10px 20px",
                        fontSize: "1rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Gerar Nova Paleta
                </button>
            </div>
        </div>
    );
}
