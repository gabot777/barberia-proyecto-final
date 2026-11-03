# AGENTS.md - Club La Barba

> **REGLA FUNDAMENTAL:**  
> Este es el archivo principal del proyecto. Contiene toda la información, arquitectura y reglas del proyecto.  
> **SIEMPRE** se debe leer este archivo antes de realizar cualquier acción o modificación, y **SIEMPRE** debe mantenerse actualizado ante cualquier cambio en la estructura o flujo de trabajo.

---

## 1. Descripción del Proyecto
Réplica fidedigna y moderna del sitio web oficial de **Club de la Barba** (https://www.clubdelabarba.cl/), desarrollada con **HTML5**, **JavaScript Vanilla** y estilizada con **Tailwind CSS v4**.

El proyecto se está construyendo modularmente y paso a paso (de arriba hacia abajo), asegurando máxima precisión en colores, fuentes, espaciados, interactividad y responsividad.

---

## 2. Tecnologías y Librerías
- **Node.js** (v24+) y **npm** (v11+)
- **HTML5 Semántico**
- **Tailwind CSS v4** (`tailwindcss` y `@tailwindcss/cli`)
- **Google Fonts:**
  - `Inter` (300, 400, 500, 600, 700, 800)
  - `Barlow Condensed` (600, 700, 800)
  - `Montserrat` (500, 600, 700, 800, 900)
- **JavaScript Vanilla** para interactividad de la barra de navegación, animaciones flotantes y observadores de visibilidad (`IntersectionObserver`).

---

## 3. Guía de Diseño e Identidad Visual (Design Tokens)

### Paleta de Colores
- **Dorado Principal (Gold):** `#c59d5f`
- **Dorado Claro (Light Gold / Hover):** `#dcb982`
- **Dorado Botón Hover:** `#e0bb7e`
- **Dorado Artesanal / Tostado:** `#826334`
- **Dorado Oscuro (gold-dark):** `#a0783c` (degradado del separador de secciones)
- **Azul (skip-link / acento sucursales):** `#5793cb`
- **Fondo Navbar:** `#111111f5` con efecto `backdrop-blur`
- **Fondo Hero / Dark:** `#111111` y sombras degradadas en `#080808`
- **Fondo Barbero a Domicilio:** `#171412`
- **Fondo Contacto / Tarjetas Oscuras:** `#1c1c1c`
- **Fondo Craft / Nuestro Oficio:** `#e9e7e2`
- **Fondo Scrolled:** `#000000f2`
- **Fondo Footer:** `#080808`
- **Fondo Editorial Página:** `#f5f4f1`
- **Texto Principal Claro:** `#ffffff` y `#f7f5f0`
- **Texto Principal Oscuro:** `#171717`
- **Texto Secundario Atenuado:** `#b7b7b7`, `#bbbbbb`, `#aaaaaa` y `#555555`
- **WhatsApp:** `#25d366`
- **Bordes y separadores sutiles:** `rgba(255, 255, 255, 0.1)`, `rgba(255, 255, 255, 0.15)` y `rgba(197, 157, 95, 0.2)`

---

## 4. Estructura del Proyecto

```plaintext
clublabarba.html/
├── .gitignore                   # Archivos y carpetas ignorados por Git
├── AGENTS.md                    # Archivo principal de reglas, contexto e información del proyecto
├── input/
│   └── input.css                # Fuente de Tailwind CSS con tokens @theme y clases personalizadas
├── node_modules/                # Dependencias de npm
├── package.json                 # Configuración del paquete y scripts npm
├── package-lock.json            # Árbol de dependencias bloqueado
├── vercel.json                  # Configuración de despliegue en Vercel (outputDirectory: src)
└── src/                         # Código fuente de la aplicación
    ├── index.html               # Punto de entrada web principal
    ├── clublabarba.html         # Página de réplica de Club La Barba
    ├── curso.html               # Página del Curso de Barbería Inicial
    ├── tienda.html              # Página de la Tienda (giftcards y productos)
    ├── servicios.html           # Página de Servicios (corte, barba, afeitado, visagismo)
    ├── contacto.html            # Página de Contacto (formulario, modal y sucursales)
    ├── barbero-a-domicilio.html # Página de Solicitud de barbero a domicilio
    └── assets/                  # Recursos estáticos
        ├── css/
        │   └── style.css        # CSS compilado y minificado por Tailwind CSS v4
        ├── image/               # Recursos gráficos y multimedia
        │   ├── favicon.ico      # Favicon oficial extraído
        │   ├── logo.png         # Logotipo oficial extraído
        │   ├── craft-stone-hand.webp  # Imagen editorial de fondo del Hero
        │   ├── barber-stone.webp      # Imagen retrato barbero (Nuestro Oficio)
        │   ├── clipper-photo.webp     # Fotografía máquina de corte flotante
        │   └── scissors-photo.webp    # Fotografía tijeras de barbero flotante
        └── js/
            └── main.js          # Lógica cliente (toggle móvil, scroll y IntersectionObserver)
```

---

## 5. Módulos y Estado de Avance

### Paso 1: Header y Barra de Navegación (COMPLETADO)
- [x] **Logotipo Oficial:** Descargado localmente en `src/assets/image/logo.png` con soporte para escalado e iluminación en modo oscuro.
- [x] **Enlaces Principales:** `Inicio`, `Curso`, `Tienda`, `Reservar`, `Solicitar barbero a domicilio`, `Beneficios`.
- [x] **Badges de Aplicaciones:** Botón oficial con SVG de **Apple (App Store)** y **Android (Google Play)**.
- [x] **Menú Desplegable de Contacto:** Enlaces a *Trabaja con nosotros*, *WhatsApp general* y sucursales (*Bellas Artes*, *Providencia*, *Ñuñoa*).
- [x] **Menú Móvil y Responsividad:** Botón hamburguesa interactivo (`aria-expanded`) y menú desplegable completo.
- [x] **Efecto Scroll Dinámico:** Clase `.nav-scrolled` con barra resplandeciente (`.nav-glow-line`) y transición de opacidad al hacer scroll en `src/assets/js/main.js`.

### Paso 2: Hero Editorial y Banner Principal con Fondo (COMPLETADO)
- [x] **Imagen de Fondo:** Extraída y guardada en `src/assets/image/craft-stone-hand.webp`, con doble gradiente superpuesto para máxima legibilidad.
- [x] **Eyebrow:** `CLUB DE LA BARBA / SANTIAGO, CHILE` en dorado con barra de acento lineal.
- [x] **Titular Principal:** `Probablemente LA MEJOR BARBERÍA DEL MUNDO.` en `Barlow Condensed` (800) y remate de énfasis en dorado `DEL MUNDO.`
- [x] **Acciones (CTA):** Botón `Agendar mi hora` en dorado interactivo y enlace `Ver tienda`.
- [x] **Horarios de Atención:** Resumen compacto con `Lunes a viernes · 10:30 a 19:30` y `Sábados · hasta las 16:30`.
- [x] **Manifiesto El Club:** Bloque editorial inferior con estadísticas destacadas (3 locales, más de 40 profesionales, más de 40.000 clientes) y enlace directo hacia `Ver sucursales`.

### Paso 3: Sección Nuestro Oficio (Corte, Barba y Estilo) (COMPLETADO)
- [x] **Composición Visual Editorial (`.tools-studio`):**
  - Fotografía de fondo: `src/assets/image/barber-stone.webp` (retrato del barbero frente a pared de piedra con la marca).
  - Capa de sombra degradada (`.studio-shade`).
  - Herramientas flotantes con animación interactiva fluida (`@keyframes tool-float`):
    - Máquina de corte profesional: `src/assets/image/clipper-photo.webp` (`.studio-clipper`).
    - Tijeras de barbero de acero pulido: `src/assets/image/scissors-photo.webp` (`.studio-scissors`).
  - Rendimiento y optimización: `IntersectionObserver` en `src/assets/js/main.js` para pausar la animación cuando la sección no está en pantalla o la pestaña está en segundo plano.
- [x] **Contenido Tipográfico (`.craft-copy`):**
  - Eyebrow: `NUESTRO OFICIO` en tono dorado artesanal (`#826334`).
  - Titular: `CORTE, BARBA Y ESTILO.` en `Barlow Condensed` (800) con acento dorado.
  - Descripción: *"Cortes modernos, afeitado clásico y visagismo personalizado. Elige tu servicio y al profesional que te va a atender."*
  - Enlace / CTA: `Elegir profesional` con borde inferior característico.
- [x] **Fondo Editorial:** Contenedor con tono `#e9e7e2` y diseño responsive en 2 columnas en pantallas medianas/grandes y 1 columna en móviles.

### Paso 4: Beneficios Esenciales y Asistencia / Apps (COMPLETADO)
- [x] **3 Tarjetas de Beneficios (`.hero-essentials`):**
  - Grid responsive de 3 columnas en desktop y 1 columna en móvil, con líneas divisorias verticales sutiles.
  - **Reserva online:** *Agenda online en pocos pasos y encuentra tu horario disponible al instante.*
  - **WhatsApp general:** *Consultas, orientación y ayuda rápida en un solo canal antes de elegir sucursal.*
  - **Tres sucursales:** *Bellas Artes, Providencia y Ñuñoa con contacto directo y acceso rápido a Google Maps.*
- [x] **Bloque de Asistencia y Descarga de Apps (`.hero-contact`):**
  - Contenedor con fondo `#1c1c1c` y borde superior fino.
  - Eyebrow: `CONTACTO` en dorado.
  - Titular: `Te ayudamos por WhatsApp.` en `Montserrat` (600).
  - Descripción y enlace: `Escribir por WhatsApp` hacia canal directo.
  - Badges destacados de descarga: **App Store** y **Google Play** en versión clara `.app-store-badge--default`.

### Paso 5: Accesibilidad, Barbero a Domicilio y Agenda Online (COMPLETADO)
- [x] **Enlace "Saltar al contenido principal":** link `sr-only` (`.focus:not-sr-only`) hacia `#main-content` para navegación por teclado.
- [x] **Enlaces de reserva reenrutados:** `Reservar`, `Agendar mi hora` y `Elegir profesional` ahora apuntan a `#agenda-online` (la sección de agenda real del sitio).
- [x] **Banner Barbero a Domicilio (`.home-barbero`):** fondo `#171412`, texto introductorio, CTA dorado `Solicitar barbero a domicilio` y nota de disponibilidad. Incluye `id="barbero-a-domicilio"`.
- [x] **Agenda Online (`.home-booking`):** réplica visual estática del componente de reserva:
  - `booking-shell` (tarjeta blanca), `booking-topline` (`CLUB DE LA BARBA / AGENDA ONLINE`), titular `Tu próxima visita, aquí.` en `Montserrat` (700) y enlace `Mis próximas horas`.
  - Paso 1 estático "Elige tu sucursal" con las 3 sucursales reales (enlaces a Google Maps).
  - Nota informativa y `booking-footer` con enlace a la agenda oficial de **VentaPlay** (`https://clubdelabarba.ventaplay.com`).
  - *Nota:* la reserva interactiva original usa un Web Component + Firebase; se replica el shell visual fiel y se enlaza al sistema real.

### Paso 6: Nuestras Sucursales (COMPLETADO)
- [x] **Encabezado:** `Nuestras Sucursales` en `.gradient-heading`.
- [x] **Panel de Contacto General:** `Contacto general` con CTA `WhatsApp general` (`wa.me/56972063315`) en fondo WhatsApp.
- [x] **3 Tarjetas de Sucursales (`.branch-card`):** grid responsive 1→2→3 columnas.
  - **Bellas Artes:** `Santo Domingo #648`, tel `+56 9 3019 2051`, WhatsApp `56930192051`, Google Maps.
  - **Providencia:** `Antonio Varas #394`, tel `+56 9 3305 7683`, WhatsApp `56933057683`, Google Maps.
  - **Ñuñoa:** `Brown Norte #100`, tel `+56 9 9266 0737`, WhatsApp `56992660737`, Google Maps.
- [x] **Detalles visuales:** `.location-panel` con dirección, enlace `Ver en Google Maps` (`.location-link`), teléfono (`tel:`) y WhatsApp por sucursal.

### Paso 7: Horarios de Atención (COMPLETADO)
- [x] **Encabezado:** `Horarios de Atención` en `.gradient-heading`.
- [x] **Badge de estado dinámico (`#status-badge`):** punto (`.status-dot`) + texto que muestra **Abierto ahora / Cerrado ahora** según la hora de Chile (`America/Santiago`) calculado en `src/assets/js/main.js`.
  - Lunes a viernes 10:30–19:30 y sábados 10:30–16:30 = abierto; resto = cerrado.
- [x] **Tarjeta de horarios (`.horarios-card`):** filas `.horarios-row` con `Lunes a Viernes`, `Sábados` y `Domingos (Cerrado)`.

### Paso 8: Footer y Botón Flotante de WhatsApp (COMPLETADO)
- [x] **Footer (`.site-footer`):** fondo `#080808`, logo (`.footer-logo` iluminado en blanco), enlaces a **Instagram** y **WhatsApp**, enlace `Trabaja con nosotros`, badges de descarga **App Store** y **Google Play** (`.app-store-badge--compact`) y copyright `© 2026 Club de la Barba. Todos los derechos reservados.`
- [x] **Glow superior (`.footer-glow`):** línea degradada dorada sutil en el borde superior.
- [x] **Botón flotante de WhatsApp (`.floating-whatsapp`):** fijo abajo a la derecha con icono en degradado verde, `backdrop-blur` y enlace a `wa.me/56972063315`.
- [x] **Separadores de sección (`.section-divider`):** línea degradada dorada con animación `divider-glow` (respeta `prefers-reduced-motion`).

### Paso 9: Tokens de Diseño Actualizados
- [x] `--color-gold-dark` corregido a `#a0783c` (coincide con el sitio real).
- [x] Añadido `--color-azul: #5793cb` (skip-link y acento de sucursales).
- [x] Añadido `--color-gold-artesanal: #826334` como token auxiliar.
- [x] Utilidades de layout `.px-gutter` y `.py-section-y` para secciones inferiores.

### Paso 10: Página Curso de Barbería Inicial (`curso.html`) (COMPLETADO)
- [x] **Nuevos tokens:** `--color-accent: #c59d5f` y `--font-display: 'Barlow Condensed'`.
- [x] **Navbar compartido** con enlaces internos (`index.html`, `curso.html`, `tienda.html`, `index.html#agenda-online`, `index.html#barbero-a-domicilio`).
- [x] **9 secciones fieles al sitio real:**
  1. Hero con eyebrow `Formación inicial para futuros barberos`, titular `Curso de Barbería Inicial`, CTAs (WhatsApp + Ver programa) y aside de datos (Curso, Modalidad, Lugar, Valor `$250.000`, Pagos, `Since 2017`).
  2. `Una entrada seria…` (Para quién es / Qué lo hace distinto + 4 pilares).
  3. `Aprendizaje en barbería real` (4 tarjetas).
  4. `Programa del curso` (`id="programa"`, 8 módulos).
  5. `Qué vas a aprender en la práctica` (7 habilidades).
  6. `Estructura recomendada` (8 semanas).
  7. `Metodología de aprendizaje` (5 pasos).
  8. `Por qué tomar este curso` + aside `Ideal para ti si…`.
  9. `Inscripción y contacto` con CTA de WhatsApp.
- [x] **WhatsApp del curso:** `wa.me/56967675584` (número `+56 9 6767 5584`) en CTAs y botón flotante.

### Paso 11: Página Tienda (`tienda.html`) (COMPLETADO)
- [x] **Contenido:** eyebrow `Tienda Club de la Barba`, titular `Elige qué quieres comprar.` y descripción.
- [x] **2 tarjetas:** `Giftcards` (entrega digital, botón dorado `Comprar giftcard`) y `Productos y kits` (retiro en sucursal, botón oscuro `Ver productos`).
- [x] **Enlaces de subpáginas:** apuntan al sitio real (`/giftcards` y `/productos`) en pestaña nueva, ya que aún no se clonan.
- [x] **Nota:** `Giftcards y productos se compran por separado.`
- [x] **WhatsApp general** (`wa.me/56972063315`) en el botón flotante.

### Paso 12: Navegación entre páginas
- [x] Enlaces del home (`index.html` / `clublabarba.html`): `Curso` → `curso.html`, `Tienda` → `tienda.html`, y `Ver tienda` (hero) → `tienda.html`.

### Paso 13: Páginas Servicios, Contacto y Barbero a domicilio (COMPLETADO)
- [x] **`servicios.html`:** hero `Corte, barba y estilo.`, tabs interactivas (Corte / Barba / Afeitado clásico / Visagismo), lista de precios, carrusel de testimonios y acordeón FAQ.
- [x] **`contacto.html`:** hero `Te ayudamos por WhatsApp.`, formulario de contacto (con modal de confirmación), datos de contacto, sucursales y horarios (con badge de estado).
- [x] **`barbero-a-domicilio.html`:** hero `Barbero a domicilio`, formulario de coordinación (datos, servicios, comuna, fecha/hora, consentimiento) con modal de confirmación, y aviso de cobertura.

### Paso 14: Menú de navegación reestructurado (6 ítems exactos)
- [x] Menú principal con **exactamente** estos 6 enlaces, conectados desde todas las páginas:
  1. `Inicio` → `index.html`
  2. `Curso` → `curso.html`
  3. `Tienda` → `tienda.html`
  4. `Servicios` → `servicios.html` (con dropdown de sub-servicios)
  5. `Solicitar barbero a domicilio` → `barbero-a-domicilio.html`
  6. `Contacto` → `contacto.html`
- [x] Botón CTA `Reservar` (dorado) → `index.html#agenda-online` en el menú.
- [x] `Beneficios` y badges de apps se movieron fuera del menú principal (footer).

### Paso 15: Elementos interactivos (emulación de página dinámica)
- [x] **Tabs** genéricas (`[data-tabs]`) en Servicios.
- [x] **Acordeón / colapsables** (`<details>` FAQ) en Servicios.
- [x] **Modales** genéricos (`[data-modal]`, abrir/cerrar por botón, backdrop y tecla Escape) en Contacto y Barbero a domicilio.
- [x] **Formularios simulados** (`[data-simulate-form]`) que abren modal de confirmación.
- [x] **Carrusel** de testimonios con autoplay, flechas y dots (`[data-carousel]`).
- [x] **Dropdown** de Servicios con hover/focus y **hover states** trabajados en todo el sitio.
- [x] Toda la interactividad vive en `src/assets/js/main.js` (JavaScript Vanilla).

---

## 6. Comandos y Flujo de Trabajo

### Compilación y Watch de Tailwind CSS:
- **Modo Watch (Desarrollo continuo):**
  ```bash
  npm run watch
  ```
  *Observa los cambios en `input/input.css` y archivos en `src/`, compilando automáticamente hacia `src/assets/css/style.css`.*

- **Modo Build (Producción / Minificado):**
  ```bash
  npm run build
  ```
  *Genera la versión optimizada y minificada de `src/assets/css/style.css`.*

---

## 7. Reglas para Desarrolladores y Agentes de IA

1. **Lectura obligatoria:** Antes de iniciar cualquier tarea, leer este archivo `AGENTS.md` para entender el contexto y las pautas vigentes.
2. **Actualización continua:** Cada vez que se complete un paso o se altere la arquitectura, registrarlo inmediatamente en este documento.
3. **Estilos con Tailwind CSS:**
   - La directiva principal de Tailwind v4 reside en `input/input.css`.
   - **NO** editar directamente `src/assets/css/style.css`, ya que es generado automáticamente por el compilador de Tailwind.
   - Cualquier directiva, tema o clase personalizada debe agregarse en `input/input.css` o directamente mediante clases utilitarias en los archivos HTML.
4. **Organización de archivos:**
   - HTMLs deben residir en `src/`.
   - Recursos gráficos deben ubicarse en `src/assets/image/`.
   - Scripts JS deben residir en `src/assets/js/`.
