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

// Função para exibir a página de login e ocultar a página de mapeamento
function showLoginPage() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('parking-map').style.display = 'none';
}

// Função para exibir a página de mapeamento e ocultar a página de login
function showMapPage() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('parking-map').style.display = 'block';
}

// Event listener para o formulário de login
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio do formulário padrão

    // Aqui você pode adicionar a lógica para verificar as credenciais de login
    // Por exemplo, verificar se o nome de usuário e senha estão corretos

    // Após verificar as credenciais, você pode mostrar a página de mapeamento
    showMapPage();
});

// Event listener para o botão de logout
document.getElementById('logout').addEventListener('click', function() {
    // Voltar para a página de login ao clicar em Logout
    showLoginPage();
});

// Exibir a página de login inicialmente
showLoginPage();
