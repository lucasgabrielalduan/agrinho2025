// Função para mostrar/esconder informações dos eventos
function mostrarInfo(idEvento) {
    const info = document.getElementById(idEvento);
    if (info.style.display === 'none' || info.style.display === '') { // Verifica também se está vazio (estado inicial)
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}

// Função para enviar formulário de contato (simulada)
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário (opcional, mas bom para demonstração)
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simulação de envio
    console.log('Dados do formulário enviados:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);
    
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso e em breve entraremos em contato.`);
    
    // Limpar o formulário após o envio simulado
    e.target.reset();
});