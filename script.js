    // Abre o popup ao carregar
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById("popupOverlay").classList.add("show");
    });

    function confirmarNome() {
      const nome = document.getElementById("inputNome").value;
      const spanNome = document.getElementById("nomeUsuario");
      const musica = document.getElementById("audi");

      if (nome.trim() !== "") {
        // Adiciona o nome na mensagem
        spanNome.innerText = nome;

        // COnfiguração de Audio
        musica.muted = false;      
        musica.currentTime = 0;
        musica.play().catch(e => console.log("Erro ao tocar áudio:", e));

        // Fecha o popup
        document.getElementById("popupOverlay").classList.remove("show");

      } else {
        alert("Por favor, digite seu nome para continuar! 🎄");
      }
    }

    // Botao de 'Enter'
    document.getElementById("inputNome").addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        confirmarNome();
      }
    });