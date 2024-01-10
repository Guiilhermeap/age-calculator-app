function validateForm() {
  var day = document.getElementById("ddia").value;
  var month = document.getElementById("mmes").value;
  var year = document.getElementById("aano").value;
  var errorMessage1 = document.getElementById("error-data1");
  var errorMessage2 = document.getElementById("error-data2");
  var errorMessage3 = document.getElementById("error-data3");

  // Verifique se os valores são numéricos
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    errorMessage1.innerText = "This field is required";
    errorMessage2.innerText = "This field is required";
    errorMessage3.innerText = "This field is required";

    var errorDia1 = document.getElementById("label-required1");
    var errorDia2 = document.getElementById("label-required2");
    var errorDia3 = document.getElementById("label-required3");
    errorDia1.style.color = "hsl(0, 100%, 67%)";
    errorDia2.style.color = "hsl(0, 100%, 67%)";
    errorDia3.style.color = "hsl(0, 100%, 67%)";

    var diasError = document.getElementById("ddia");
    var mesError = document.getElementById("mmes");
    var anoError = document.getElementById("aano");
    diasError.style.border = "2px solid hsl(0, 100%,67%)";
    mesError.style.border = "2px solid hsl(0, 100%,67%)";
    anoError.style.border = "2px solid hsl(0, 100%,67%)";
    return;
  }

  // Verifique se os valores estão no intervalo correto
  if (
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > 2024
  ) {
    errorMessage1.innerText = "data invalida";
    errorMessage2.innerText = "data invalida";
    errorMessage3.innerText = "data invalida";

    var errorDia1 = document.getElementById("label-required1");
    var errorDia2 = document.getElementById("label-required2");
    var errorDia3 = document.getElementById("label-required3");
    errorDia1.style.color = "hsl(0, 100%, 67%)";
    errorDia2.style.color = "hsl(0, 100%, 67%)";
    errorDia3.style.color = "hsl(0, 100%, 67%)";

    var diasError = document.getElementById("ddia");
    var mesError = document.getElementById("mmes");
    var anoError = document.getElementById("aano");
    diasError.style.border = "2px solid hsl(0, 100%,67%)";
    mesError.style.border = "2px solid hsl(0, 100%,67%)";
    anoError.style.border = "2px solid hsl(0, 100%,67%)";
    return;
  }

  // Calcule a diferença entre a data inserida e a data atual
  var currentDate = new Date();
  var inputDate = new Date(year, month - 1, day); // O mês no JavaScript é de 0 a 11

  if (inputDate > currentDate) {
    errorMessage.innerText =
      "A data inserida é no futuro. Por favor, insira uma data válida.";
    return;
  }

  var timeDifference = currentDate - inputDate;
  var years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
  var months = Math.floor(
    (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  var days = Math.floor(
    (timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  // Exiba os resultados nos elementos HTML correspondentes
  document.getElementById("resultado-anos").innerText = years;
  document.getElementById("resultado-meses").innerText = months;
  document.getElementById("resultado-dias").innerText = days;
  errorMessage.innerText = "";
}
