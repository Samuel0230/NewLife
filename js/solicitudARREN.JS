$(document).ready(function () {
    // Función para descargar archivos .fpf
    function downloadFPFFile(filename) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," +
          encodeURIComponent("Contenido del archivo FPF")
      );
      element.setAttribute("download", filename + ".fpf");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

    // Evento click para descargar archivo 1
    $("#downloadFile1").click(function () {
      downloadFPFFile("archivo1");
    });

    // Evento click para descargar archivo 2
    $("#downloadFile2").click(function () {
      downloadFPFFile("archivo2");
    });
  });