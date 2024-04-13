// Definir o número total de vagas no estacionamento
const totalSpaces = 50;

// Definir o número de vagas inicialmente ocupadas
let occupiedSpaces = 20;

// Função para verificar a disponibilidade de vagas com base nos sensores de presença
function checkAvailability() {
    // Simular a detecção de presença aleatória para cada vaga
    for (let i = 1; i <= totalSpaces; i++) {
        const isPresent = Math.random() < 0.5; // Simula 50% de chance de presença
        if (isPresent) {
            occupiedSpaces++;
        }
    }

    const availableSpaces = totalSpaces - occupiedSpaces;
    const statusElement = document.getElementById('parking-status');
    statusElement.textContent = `Vagas disponíveis: ${availableSpaces}`;
}

// Event listener para o botão de verificação de disponibilidade
document.getElementById('check-availability').addEventListener('click', checkAvailability);

// Chamar a função inicialmente para exibir o status atual
checkAvailability();
