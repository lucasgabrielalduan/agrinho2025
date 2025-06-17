// Função para mostrar/esconder informações dos eventos
function mostrarInfo(idEvento) {
    const info = document.getElementById(idEvento);
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}

// Simulação de envio do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    console.log('Dados do formulário enviados:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);
    
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso e em breve entraremos em contato.`);
    
    e.target.reset();
});
