const btn = document.getElementById("btn");
const status = document.getElementById("status");
const lista = document.getElementById("lista");

btn.addEventListener("click", carregarUsuarios );

async function carregarUsuarios() {
    status.textContent = "Carregando Usuários..."

    lista.innerHTML = "";
    btn.disabled = true;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const usuarios = await response.json();

        usuarios.forEach(usuario => {
            const li = document.createElement("li")
            li.textContent = `${usuario.name} - ${usuario.email}`;
            lista.appendChild(li);
        });
        status.textContent = "Usuários carregados com sucesso!";
    } catch (erro) {
        status.textContent = "Erro ao carregar usuários";
        console.error(erro);
    }
    btn.disable = false;
};