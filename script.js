function procesar() {
  const texto = document.getElementById("texto").value;
  const charset = document.getElementById("charset").value;
  const modulo = parseInt(document.getElementById("modulo").value);
  const shift = parseInt(document.getElementById("shift").value);
  const metodo = document.getElementById("metodo").value;
  const modo = document.getElementById("modo").value;

  if (charset.length === 0) {
    alert("El conjunto de caracteres está vacío");
    return;
  }

  let resultado = "";

  
  let desplazamiento = modo === "descifrar" ? -shift : shift;

  for (let c of texto) {
    let i = charset.indexOf(c);

    
    if (i === -1) {
      resultado += c;
      continue;
    }

    let nuevoIndice;

    if (metodo === "cesar") {
     
      nuevoIndice = (i + desplazamiento) % modulo;
      if (nuevoIndice < 0) nuevoIndice += modulo;
      nuevoIndice = nuevoIndice % charset.length;
    }

    if (metodo === "atbash") {
      nuevoIndice = (modulo - 1 - i) % charset.length;
    }

    resultado += charset[nuevoIndice];
  }

  document.getElementById("resultado").textContent = resultado;
}
