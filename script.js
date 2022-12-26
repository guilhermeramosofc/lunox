const form = document.querySelector('form');
const osDetails = document.querySelector('#os-details');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Obtém o número da OS
  const osNumber = document.querySelector('#os-number').value;

  // Envia o número da OS para o servidor para obter os detalhes da OS
  fetch('/get-os-details', {
    method: 'POST',
    body: JSON.stringify({
      osNumber
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Exibe os detalhes da OS para o usuário
    osDetails.style.display = 'block';
    document.querySelector('#os-number-result').textContent = data.osNumber;
    document.querySelector('#name-result').textContent = data.name;
    document.querySelector('#equipment-result').textContent = data.equipment;
    document.querySelector('#status-result').textContent = data.status;
    document.querySelector('#observation-result').textContent = data.observation;
  })
  .catch(error => {
    // Exibe um erro para o usuário
    alert(`Ocorreu um erro ao obter os detalhes da OS: ${error}`);
  });
});