function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return "CPF inválido: deve conter 11 dígitos.";
    }
  
    // Verifica se todos os dígitos são iguais (caso contrário, o CPF é inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return "CPF inválido: todos os dígitos são iguais.";
    }
  
    // Calcula os dois dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
  
    // O primeiro dígito verificador deve ser igual ao décimo dígito do CPF
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
      return "CPF inválido: primeiro dígito verificador incorreto.";
    }
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
  
    // O segundo dígito verificador deve ser igual ao décimo primeiro dígito do CPF
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
      return "CPF inválido: segundo dígito verificador incorreto.";
    }
  
    // Se passar por todas as verificações, o CPF é válido
    return "CPF válido!";
}
  
  // Exemplo de uso
//   const resultado = validarCPF("123.456.789-09");
//   console.log(resultado);
  