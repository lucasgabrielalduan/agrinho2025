// Função para mostrar informações dos eventos
function mostrarInfo(evento) {
    const info = document.getElementById(evento);
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}

// Função para enviar formulário de contato (simulada)
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Sua mensagem foi enviada com sucesso!');
    
    // Limpar o formulário
    e.target.reset();
});
