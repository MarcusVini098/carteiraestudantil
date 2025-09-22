function atualizarDataHora() {
  const agora = new Date();

  // Data formatada
  const dia = String(agora.getDate()).padStart(2, '0');
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const ano = agora.getFullYear();
  document.getElementById("data").textContent = `Data: ${dia}/${mes}/${ano}`;

  // Hora formatada
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  document.getElementById("hora").textContent = `Horário: ${horas}:${minutos}:${segundos}`;
}

// Atualiza assim que abrir
atualizarDataHora();
// E mantém em tempo real
//setInterval(atualizarDataHora, 1000);

