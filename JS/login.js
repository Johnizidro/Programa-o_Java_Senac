document.addEventListener('DOMContentLoaded', () => {
    let usuarios = [];

    const cadastroForm = document.querySelector('.signup-form form');
    const loginForm = document.querySelector('.login-form form');

    cadastroForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('signup-user').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const senha = document.getElementById('signup-pass').value;

       
    if (!usuario || !email || !senha) {
        alert('Por favor, preencha todos os dados de cadastro!');
        return;
    }

    const usuarioExistente = usuarios.find(u => u.usuario === usuario);
    if (usuarioExistente) {
        alert('Usuário já cadastrado!');
        return;
    }
    const emailExistente = usuarios.find(u => u.email === email);
    if (emailExistente) {
        alert('E-mail já cadastrado!');
        return;
    }
        usuarios.push({ usuario, email, senha });
        alert('Cadastro realizado com sucesso!');
        cadastroForm.reset();
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('login-user').value.trim();
        const senha = document.getElementById('login-pass').value;
        
        if (!usuario || !senha) {
            alert('Por favor, preencha todos os dados de Login!');
            return;
        }

        const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

        if (usuarioEncontrado) {
            alert(`Bem-vindo, ${usuario}!`);
        } else {
            alert('Usuário ou senha incorretos!');
        }

        loginForm.reset();
    });
});
