    // Abre o popup ao carregar
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById("popupOverlay").classList.add("show");
    });

    function confirmarNome() {
      const nome = document.getElementById("inputNome").value;
      const spanNome = document.getElementById("nomeUsuario");
      const musica = document.getElementById("audi");

      if (nome.trim() !== "") {
        // Adiciona o nome à mensagem (com uma vírgula antes para gramática)
        spanNome.innerText = nome;

        // 2. CONFIGURAÇÃO DO ÁUDIO:
        musica.muted = false;      // Garante que não está mudo
        musica.currentTime = 0;    // Reinicia a música do zero
        musica.play().catch(e => console.log("Erro ao tocar áudio:", e));

        // Fecha o popup
        document.getElementById("popupOverlay").classList.remove("show");

      } else {
        alert("Por favor, digite seu nome para continuar! 🎄");
      }
    }

    // Permite apertar 'Enter' no teclado para fechar
    document.getElementById("inputNome").addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        confirmarNome();
      }
    });