# CV de Jazmin Quispe — web multipágina

Web estática (HTML + CSS + JS, sin dependencias ni fuentes externas), en español e inglés.

## Inicio rápido
1. Abre la carpeta en VS Code y lanza `index.html` con Live Server (o ábrelo en el navegador).
2. **Fotos** (ahora hay imágenes de ejemplo):
   - Portada: sustituye `assets/images/perfil.webp` (vertical, aprox. 4:5).
   - Sobre mí: sustituye `assets/images/sobre-mi.jpg` (otra foto distinta, vertical).
     Las rutas están en `profile.photos` de `js/data.js`. Si una foto no se encuentra, se muestran las iniciales «JQ».
   - Mosaico «En acción» de la portada: sustituye `trabajo-1.webp`, `trabajo-2.jpg` y `trabajo-3.jpg`.
     Las fotos rotan entre las tres casillas cada 4,5 s. Las leyendas se editan en `home.gallery` de
     `js/data.js`, y se pueden añadir más fotos agregando elementos a esa lista.
3. Usa el menú para navegar y el botón EN/ES para cambiar de idioma.

## Archivos
- `index.html`: portada (presentación, empresas, cifras, áreas y llamada a la acción).
- `sobre-mi.html`: retrato, perfil profesional y datos clave.
- `experiencia.html`: línea de tiempo con funciones, logros y herramientas de cada puesto, más proyectos.
- `formacion.html`: estudios, cursos desplegables y taller UCM.
- `habilidades.html`: competencias agrupadas e idiomas.
- `contacto.html`: LinkedIn, email y ubicación.
- `js/data.js`: **todo el contenido ES/EN** (lo único que hay que tocar para cambiar textos).
- `js/main.js`: pinta el contenido, navegación y animaciones.
- `css/styles.css`: estilos. Los colores están en `:root` al principio del archivo.

## Estilo
- Paleta: fondo papel cálido, texto gris pizarra, acento ciruela (`--accent`) y detalles arena (`--sand`).
- Titulares en serif (Palatino / Georgia, ya instaladas en los sistemas), texto en sans-serif.
- Movimiento sutil: entrada escalonada, texto rotativo de especialidades, franja de empresas,
  contadores de cifras, línea de tiempo que se rellena al hacer scroll, transición entre páginas.
- Todo el movimiento se desactiva si el sistema tiene activado «reducir movimiento».

## Publicar en GitHub Pages (gratis)
1. Crea un repositorio público en GitHub (por ejemplo `cv-jazmin`).
2. Sube el contenido de esta carpeta (con `index.html` en la raíz). El `.gitignore` evita subir el CV en .docx/.pdf.
3. En el repositorio: Settings → Pages → Source: «Deploy from a branch» → rama `main`, carpeta `/ (root)` → Save.
4. En 1–2 minutos estará en `https://<usuario>.github.io/cv-jazmin/`.
