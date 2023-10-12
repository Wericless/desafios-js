const senhas = ["senha123"];

function senhaUsuario() {
  const password = document.getElementById("password");
  const confirmarPassword = document.getElementById("confirmarPassword");
  const nota = document.getElementById("nota");
  const concluido = document.getElementById("concluido");

  if (password.value === "" || confirmarPassword.value === "") {
    nota.innerHTML = "<span>Por favor, Preencher todos os campos</span>";
    password.style.border = "1px solid red";
    confirmarPassword.style.border = "1px solid red";
  } else if (password.value !== confirmarPassword.value) {
    nota.innerHTML = "<span>Senhas não correspondem</span>";
    password.style.border = "1px solid red";
    confirmarPassword.style.border = "1px solid red";
  } else if (senhas.includes(password.value)) {
    nota.innerHTML =
      "<span>Senha já registrada. Escolha uma nova senha.</span>";
  } else {
    concluido.innerHTML = "<span>Senha cadastrada com sucesso!</span>";
    password.style.border = "";
    confirmarPassword.style.border = "";
    nota.innerHTML = "";
  }
}
