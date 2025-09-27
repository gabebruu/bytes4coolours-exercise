// src/components/FirstComponent.jsx
export default function FirstComponent({ cor, index, toggleLock }) {
  return (
    <div
  className="flex flex-col items-center justify-center w-90 h-180 rounded-lg p-2 text-white relative transition-all duration-500"
  style={{ backgroundColor: cor.hex }} //aqui sao as colunas de cores
>

      {/* Mostra o valor hexadecimal, fonte, tamanho espaçamento */}
      <span className="mb-2 font-arial">{cor.hex}</span>
      {/* Botões Copiar e Bloquear */}
      <div className="flex gap-2">
        <button
          onClick={() => navigator.clipboard.writeText(cor.hex)}
          className="bg-white/20 hover:bg-white/35 text-sm px-2 py-1 rounded cursor-pointer"
        >
          Copiar 
        </button>
        <button
          onClick={() => toggleLock(index)}
          className="bg-white/20 hover:bg-white/30 text-sm px-2 py-1 rounded cursor-pointer"
        >
          {cor.locked ? "🔒" : "🔓"}
        </button>
      </div>
    </div>
  );
}
