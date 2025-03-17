// 🔹 Gerar 9 números aleatórios
function gerarNoveNums() {
    return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
}

// 🔹 Calcular um dos dígitos verificadores
function calcularDigito(numeros, pesoInicial) {
    let peso = pesoInicial;
    const soma = numeros.reduce((acumulador, num) => acumulador + (num * peso--), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

// 🔹 Formatar CPF no padrão XXX.XXX.XXX-YY
function formatarCPF(cpf) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
}

// 🔹 Gerar CPF válido
function gerarCPF() {
    const noveNumeros = gerarNoveNums();
    const primeiroDigito = calcularDigito(noveNumeros, 10);
    const segundoDigito = calcularDigito([...noveNumeros, primeiroDigito], 11);
    const cpfCompleto = `${noveNumeros.join('')}${primeiroDigito}${segundoDigito}`;
    return formatarCPF(cpfCompleto);
}

// 🔹 Validar CPF
function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, ''); // Remove pontos e traço

    if (cpfLimpo.length !== 11) return false;

    const noveNumeros = cpfLimpo.slice(0, 9).split('').map(Number);
    const digito1 = Number(cpfLimpo[9]);
    const digito2 = Number(cpfLimpo[10]);

    const primeiroCalculado = calcularDigito(noveNumeros, 10);
    const segundoCalculado = calcularDigito([...noveNumeros, primeiroCalculado], 11);

    return digito1 === primeiroCalculado && digito2 === segundoCalculado;
}

// 🔹 Atualizar interface ao gerar CPF
function gerarNovoCPF() {
    const cpfGerado = gerarCPF();
    document.getElementById("cpfInput").value = cpfGerado;
    mostrarResultado(`CPF Gerado: ${cpfGerado}`, "valid");
}

// 🔹 Atualizar interface ao validar CPF digitado
function validarCPFInput() {
    const cpfDigitado = document.getElementById("cpfInput").value;
    const valido = validarCPF(cpfDigitado);
    mostrarResultado(valido ? "CPF Válido ✅" : "CPF Inválido ❌", valido ? "valid" : "invalid");
}

// 🔹 Função para exibir mensagem no HTML
function mostrarResultado(mensagem, classe) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = mensagem;
    resultado.className = classe;
}
