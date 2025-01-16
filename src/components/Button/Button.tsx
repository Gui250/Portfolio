import './Button.module.css'
import { useState, useEffect } from 'react'


export function Button(): JSX.Element { 
    const [botaoTexto, setBotaoTexto] = useState("Baixar Currículo");
    const [baixando, setBaixando] = useState(false); // Indica se o download está em progresso
  
    // useEffect para monitorar o estado de download
    useEffect(() => {
      if (baixando) {
        const timeout = setTimeout(() => {
          setBotaoTexto("Download Completo!");
          setBaixando(false); // Reseta o estado após o download
        }, 2000); // Simula 2 segundos de "download"
  
        return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
      }
    }, [baixando]);
  
    // Função para iniciar o download
    const iniciarDownload = () => {
      setBotaoTexto("Baixando...");
      setBaixando(true);
  
      // Baixar o arquivo real
      const link = document.createElement("a");
      link.href = "/curriculo.pdf"; // Caminho do arquivo na pasta public
      link.download = "Curriculo.pdf"; // Nome do arquivo baixado
      link.click();
    };
  
    return (
      <div>
        <button
          onClick={iniciarDownload}
          disabled={baixando} 
        >
          {botaoTexto}
        </button>
      </div>
    );
}