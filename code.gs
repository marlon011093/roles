// Función para obtener los datos de las fotos desde Google Sheets
function obtenerDatosFotos() {
  // Obtiene la hoja activa y selecciona una hoja por su nombre (cámbialo si tu hoja tiene otro nombre)
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  
  // Obtiene todos los datos de la hoja en forma de arreglo bidimensional
  const datos = hoja.getDataRange().getValues();
  
  // Procesa los datos ignorando la primera fila (encabezados)
  const fotos = datos.slice(1).map(fila => ({
    url: fila[0],       // Primera columna para la URL de la imagen
    titulo: fila[1]     // Segunda columna para el título
  }));
  
  return fotos;  // Devuelve un arreglo con objetos { url, titulo } para cada foto
}

// Función para servir la interfaz web cuando se accede a la URL
function doGet() {
  // Retorna la página HTML (index.html) como salida
  return HtmlService.createHtmlOutputFromFile('index').setTitle("Galería de Fotos");
}
