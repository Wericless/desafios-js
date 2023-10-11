const senhas = ["senha123"];

function senhaUsuario() {
  const password = document.getElementById("password").value;
  const confirmarPassword = document.getElementById("confirmarPassword").value;

  if (password === "" || confirmarPassword === "") {
    alert("Prenencher todos os campos");
  } else if (password !== confirmarPassword && password.includes(senhas)) {
    alert("Senhas não correnspondem");
  } else if (senhas.includes(password)) {
    alert("Senha já registrada. Escolha uma nova senha.");
  } else {
    alert("senha cadastrada com sucesso");
  }
}
