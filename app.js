function obtenerTareaPorTitulo(titulo) {
  const tareas = leerArchivo();
  const tareaEncontrada = tareas.find((tarea) => tarea.titulo === titulo);
  return tareaEncontrada;
}
