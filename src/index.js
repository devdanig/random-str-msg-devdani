const messages = [
  "Inicio del caos organizado.",
  "Commit sin pruebas. ¡Que Dios nos ayude!",
  "Aquí empieza el legado... de los bugs.",
  "Comité este commit bajo presión.",
  "100% funcional en mi máquina 🧠💻",
  "Agregado: 1 línea, roto: 23 funciones.",
  "Este commit hizo llorar a un linter.",
  "Ya vendrán los tests... algún día.",
  "No tengo idea de lo que estoy haciendo, pero parece funcionar.",
  "Si esto falla, fue culpa del merge anterior.",
  "Hice cosas. No me juzgues.",
  "Commit zen: compila, luego pregunta.",
  "La documentación está en mi cabeza.",
  "Fix mágico ✨ (ni yo sé cómo funcionó)",
  "Commit para que parezca que trabajé.",
  "El código no se toca, se reza 🙏",
  "Esto es arte. Inestable, pero arte.",
  "Me rendí. Lo dejé así.",
  "Todo mal, pero ya lo empujé.",
  "No lo entendí, pero lo arreglé.",
  "Capa 8",
  "Commit de último minuto, como siempre.",
  "¿Qué hace este código? No lo sé, pero funciona.",
  "Commit de viernes por la tarde, ¡a ver qué pasa!",
  "Este commit es un misterio, incluso para mí.",
  "Código escrito con amor y un poco de desesperación.",
  "Commit de supervivencia: si funciona, no lo toques.",
  "Este commit es como un café: oscuro y lleno de sorpresas."
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};