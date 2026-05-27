# DESIGN.md — Powerload UI Kit Design System

> Documento vivo. Todo agente, desarrollador o IA que genere interfaces
> para la plataforma Powerload debe leer y seguir este archivo antes de
> producir cualquier código o diseño.

---

## 1. Plataforma — Qué es Powerload

Powerload es una plataforma SaaS B2B de gestión logística para el
transporte de mercancías por carretera. Conecta **cargadores**
(empresas que necesitan mover mercancía) con **transportistas**
(conductores y flotas) a través de un marketplace inteligente de
cargas, contratos, pujas y planificación de rutas.

La plataforma también gestiona gasolineras corporativas, colaboradores,
automatización de procesos y análisis de datos de flota. La IA juega un
rol central: búsqueda de transportistas, llamadas automatizadas,
matching de cargas y detección de anomalías.

### 1.1 Qué transmitimos

| Dimensión       | Intención                                                        |
|-----------------|------------------------------------------------------------------|
| **Confianza**   | Interfaces limpias, datos bien organizados, jerarquía clara      |
| **Eficiencia**  | Densidad informativa sin ruido, acciones siempre accesibles      |
| **Modernidad**  | Tipografía refinada, espaciados generosos, color controlado      |
| **Profesional** | Paleta sobria con acento corporativo, sin decoración innecesaria |
| **Energía**     | El rojo primario aporta carácter y urgencia donde importa        |

Los diseños deben verse **densos pero respirados**: tablas con mucha
información pero con buen padding, títulos claros, acciones bien
diferenciadas. Nunca recargados, nunca vacíos.

---

## 2. Tipos de usuario

| Rol               | Descripción                                                       |
|-------------------|-------------------------------------------------------------------|
| **Cargador**      | Empresa que publica cargas, gestiona contratos y pujas            |
| **Transportista** | Conductor o flota que acepta cargas y gestiona sus viajes         |
| **Colaborador**   | Agente externo con acceso parcial (operador, agencia, etc.)       |
| **Administrador** | Acceso total a configuración, usuarios y datos de la organización |

Cada rol puede ver un sidebar y secciones distintas. El sistema de
diseño es común a todos los roles; solo cambian las secciones
disponibles y algunas etiquetas.

---

## 3. Design Tokens

Todos los tokens están declarados en `index.css` como variables CSS.
**Nunca usar colores hard-coded** en los componentes; siempre referenciar
el token.

### 3.1 Color

```css
/* Marca y acción principal */
--primary:            #c22339;   /* Rojo corporativo Powerload */
--primary-foreground: #ffffff;   /* Texto sobre primary */
--accent:             #FFF5F6;   /* Fondo tenue de acento (hover, badges suaves) */
--accent-foreground:  #c22339;

/* Superficie */
--background:         #FAFAFA;   /* Fondo de página / contenedor principal */
--card:               #ffffff;   /* Sidebar, topbar, cards, modales */
--popover:            #ffffff;

/* Texto */
--foreground:         #2A2A38;   /* Texto principal */
--muted-foreground:   #BDBDD1;   /* Texto secundario, placeholders, labels */
--card-foreground:    #2A2A38;
--popover-foreground: #7E7E97;

/* Bordes e inputs */
--border:             #F3F3F9;   /* Borde general de cards y separadores */
--input:              #D2D2E1;   /* Borde de inputs, selects y botones outlined */
--muted:              #ECECF4;   /* Fondo de pills, badges neutros, hover sutil */

/* Sistema */
--ring:               #c22339;
--destructive:        #c22339;
--secondary:          #ffffff;
--secondary-foreground: #c22339;

/* Sidebar */
--sidebar:            #ffffff;
--sidebar-foreground: #2A2A38;   /* Texto de items de menú */
--sidebar-primary:    #c22339;
--sidebar-accent:     #FFF5F6;   /* Fondo de item activo */
--sidebar-border:     #ffffff;   /* Sin borde visible en sidebar */
```

### 3.2 Uso de color resumido

| Situación                          | Token / Valor                   |
|------------------------------------|---------------------------------|
| CTA principal                      | `--primary` (#c22339)           |
| Hover / estado activo suave        | `--accent` (#FFF5F6)            |
| Fondo de página                    | `--background` (#FAFAFA)        |
| Cards, topbar, sidebar             | `--card` / `--sidebar` (#ffffff)|
| Texto principal                    | `--foreground` (#2A2A38)        |
| Texto secundario / desactivado     | `--muted-foreground` (#BDBDD1)  |
| Bordes de cards / separadores      | `--border` (#F3F3F9)            |
| Bordes de inputs y botones outlined| `--input` (#D2D2E1)             |
| Badges neutros / pills             | `--muted` (#ECECF4)             |
| Destructivo / error                | `--destructive` (#c22339)       |

### 3.3 Badges de estado semántico (no tokens, usar clases directas)

| Estado      | Fondo     | Texto     |
|-------------|-----------|-----------|
| Éxito       | `#D1FAE5` | `#065F46` |
| Advertencia | `#FEF3C7` | `#92400E` |
| Error       | `#FEE2E2` | `#991B1B` |
| Info / IA   | `#EDE9FE` | `#7C3AED` |
| Neutro      | `#ECECF4` | `#2A2A38` |

---

## 4. Tipografía

Fuente única: **Poppins** — siempre, en absolutamente todos los textos.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

--font-body:    Poppins;
--font-heading: Poppins;

body { font-family: var(--font-body); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
```

> Nunca usar `system-ui`, `Inter`, ni ninguna otra fuente como fallback
> visible. Poppins es parte de la identidad visual.

### 4.1 Escala tipográfica

| Rol                          | Tamaño     | Peso  | Color token                       |
|------------------------------|------------|-------|-----------------------------------|
| Título de página             | `2rem`     | 600   | `--primary` (#c22339)             |
| Título de sección / card     | `1.125rem` | 600   | `--foreground`                    |
| Subtítulo / descripción      | `0.875rem` | 400   | `--muted-foreground`              |
| Label de campo / columna     | `0.6875rem`| 600   | `--muted-foreground`              |
| Body / dato de tabla         | `0.875rem` | 400–500 | `--foreground`                  |
| Dato primario destacado      | `0.875rem` | 600   | `--foreground`                    |
| Dato secundario / sublabel   | `0.75rem`  | 400   | `--muted-foreground`              |
| Badge / pill                 | `0.625rem` | 600   | según estado semántico            |
| Nav link (topbar)            | `0.6875rem`| 600   | `--muted-foreground`              |
| Nav link activo (topbar)     | `0.6875rem`| 600   | `--primary`                       |
| Botón principal              | `0.875rem` | 600   | `--primary-foreground`            |
| Botón secundario / outlined  | `0.75rem`  | 500   | `--foreground`                    |
| Acción de tabla ("Ver más")  | `0.75rem`  | 500   | `--primary`                       |
| Logo "POWER"                 | `1.25rem`  | 700   | `--foreground`                    |
| Logo "LOAD"                  | `1.25rem`  | 700   | `--primary`                       |

---

## 5. Espaciado

El sistema usa la escala de Tailwind CSS con las siguientes convenciones:

| Contexto                            | Valor                      |
|-------------------------------------|----------------------------|
| Padding horizontal de página        | `px-10`                    |
| Padding vertical de página (top)    | `pt-8 pb-10`               |
| Gap entre secciones principales     | `gap-6`                    |
| Padding de card / table container   | `p-6`                      |
| Padding de row de tabla             | `py-4 px-6`                |
| Padding de header de tabla          | `py-3 px-6`                |
| Gap entre columnas de cards resumen | `gap-4`                    |
| Padding de botón principal          | `px-5 py-2.5`              |
| Padding de botón outlined / ghost   | `px-4 py-2`                |
| Padding de input de búsqueda        | `px-4 py-2`                |
| Ancho máximo del contenido          | `max-w-[1600px] mx-auto`   |

---

## 6. Radios de borde

```css
--radius:    0.5rem;   /* base → botones, inputs, cards */
--radius-md: 0.375rem; /* pills pequeñas, badges */
--radius-lg: 0.5rem;   /* cards, modales */
--radius-xl: 0.75rem;  /* cards grandes, paneles */
```

| Elemento                     | Radio                              |
|------------------------------|------------------------------------|
| Card / contenedor            | `rounded-xl`                       |
| Botón principal / outlined   | `rounded-lg`                       |
| Input / select               | `rounded-lg`                       |
| Badge / pill pequeña         | `rounded-full`                     |
| Avatar                       | `rounded-full`                     |
| Tab lateral "Chatea"         | `rounded-tl-lg rounded-bl-lg`      |

---

## 7. Sombras

Todas las sombras son sutiles. Nunca sombras pronunciadas.

```css
--shadow: 0px 2px 8px 0px rgb(42 42 56 / 0.02);
```

Usar `shadow-sm` en cards y tablas. En modales y popovers, `shadow-md`.

---

## 8. Layout de página

### 8.1 Estructura global

```
┌─────────────────────────────────────────────────┐
│                   TOPBAR (h-16)                 │
├──────────┬──────────────────────────────────────┤
│          │                                      │
│ SIDEBAR  │   CONTENIDO DE PÁGINA                │
│          │   max-w-[1600px] mx-auto             │
│          │   bg-[#FAFAFA]                       │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

- **Sidebar**: panel izquierdo, posición fija, `bg-white` (`--sidebar`)
- **Topbar**: franja superior, fija, `bg-white` (`--card`), `border-b border-[#F3F3F9]`
- **Contenido**: `bg --background` (#FAFAFA), `max-w-[1600px] mx-auto`, `px-10 pt-8`
- **Cards de contenido**: `bg-white` (`--card`), `rounded-xl border border-[#F3F3F9] shadow-sm`

**Regla de color de superficie:**

| Superficie              | Color      |
|-------------------------|------------|
| Fondo de página         | `#FAFAFA`  |
| Sidebar, topbar, cards  | `#ffffff`  |

### 8.2 Título de página

Algunas páginas tienen un título prominente en la parte superior del
área de contenido, antes de las cards o tabs.

```
Gestión de gasolineras y combustible
text-[2rem] font-semibold text-[#c22339] font-[Poppins]
```

- Siempre en rojo primario
- Seguido de subtítulo opcional en `text-sm text-[--muted-foreground]`
- Margen inferior `mb-6` antes de las tabs o cards

---

## 9. Sidebar

### 9.1 Comportamiento

| Estado      | Ancho aprox. | Comportamiento                                                              |
|-------------|-------------|-----------------------------------------------------------------------------|
| Expandido   | 240px       | Muestra logo, labels de menú e ítems completos. Breadcrumb topbar oculta.  |
| Contraído   | 64px        | Solo iconos. Topbar muestra ruta activa como breadcrumb Menú › Submenú.    |

### 9.2 Colores del sidebar

| Elemento                  | Color / Token                    |
|---------------------------|----------------------------------|
| Fondo sidebar             | `#ffffff` (`--sidebar`)          |
| Texto de ítem inactivo    | `#2A2A38` (`--sidebar-foreground`)|
| Fondo de ítem activo      | `#FFF5F6` (`--sidebar-accent`)   |
| Texto / icono activo      | `#c22339` (`--sidebar-primary`)  |
| Separadores internos      | `#F3F3F9` (`--border`)           |
| Sin borde exterior visible| `--sidebar-border: #ffffff`      |

### 9.3 Estructura del ítem de menú

- Icono (Lucide, 18px) + label (`text-sm font-medium Poppins`)
- Activo: `bg-[#FFF5F6] text-[#c22339]`, icono en `#c22339`, `rounded-lg`
- Hover inactivo: `hover:bg-[#ECECF4]`
- Submenu desplegable: indent de 12px, texto más pequeño (`text-xs`)

---

## 10. Topbar

- `h-16`, `bg-white`, `border-b border-[#F3F3F9]`, `sticky top-0 z-50`
- **Logo**: `'POWER'` `font-bold text-[#2A2A38]` + `'LOAD'` `font-bold text-[#c22339]`, `text-xl`, `tracking-tight`, Poppins
- **Nav links (center)**: `text-[11px] font-semibold Poppins uppercase`
  - Inactivo: `text-[#BDBDD1]`
  - Activo: `text-[#c22339]` con `border-b-2 border-[#c22339]` a altura completa
- **Breadcrumb** (visible solo con sidebar contraído):
  - `text-xs text-[#BDBDD1] Poppins` → Menú > Submenú con `text-[#2A2A38]` en el último nivel
  - Se oculta cuando el sidebar está expandido
- **Iconos derecha**: User, MessageSquare, Bell
  - Cada uno en `w-9 h-9 rounded-lg border border-[#F3F3F9]`
  - Icono en `#BDBDD1`, hover: `bg-[#FFF5F6] text-[#c22339]`
  - Bell: small red dot badge absoluto

---

## 11. Tabs de sección

Usadas para navegar entre vistas dentro de una misma página.

- `border-b border-[#F3F3F9]` en el contenedor de tabs
- Cada tab: `text-sm font-medium Poppins py-3 px-1 mr-6`
- Activo: `text-[#c22339]`, subrayado `border-b-2 border-[#c22339]` animado (`motion.div layoutId`)
- Inactivo: `text-[#BDBDD1]`, hover: `text-[#2A2A38]`
- Los tabs pueden llevar iconos Lucide a la izquierda (16px, mismo color que el texto)

---

## 12. Tablas de datos

Las tablas viven dentro de una card blanca:
`bg-white rounded-xl border border-[#F3F3F9] shadow-sm overflow-hidden`

### 12.1 Zona de acciones y filtros (top de la card)

Fila horizontal sobre la tabla con `px-6 py-4 flex items-center justify-between border-b border-[#F3F3F9]`:

**Izquierda** — botón de acción principal de la vista:
```
bg-[#c22339] text-white px-5 py-2.5 rounded-lg text-sm font-semibold Poppins
```
Con icono Lucide relevante a la acción.

**Derecha** — controles de búsqueda y filtrado en fila `gap-3`:

- **Input de búsqueda**: `border border-[#D2D2E1] rounded-lg px-4 py-2 text-xs Poppins`, placeholder `text-[#BDBDD1]`, icono Search interno
- **Botón Filtros**: `border border-[#D2D2E1] rounded-lg px-4 py-2 text-xs text-[#2A2A38] Poppins`, icono Filter + texto `'Filtros ▽'`
- **Botón Mostrar N**: `border border-[#D2D2E1] rounded-lg px-4 py-2 text-xs text-[#2A2A38] Poppins`, icono ChevronDown + texto `'Mostrar 25'`

### 12.2 Header de tabla

```
bg-white | border-b-2 border-[#c22339] | py-3 px-6
Texto: text-[11px] font-semibold text-[#BDBDD1] Poppins uppercase tracking-wider
```

> El `border-b-2 border-[#c22339]` es el rasgo visual más distintivo de las tablas Powerload.

La primera columna puede llevar checkbox global (seleccionar todo).

### 12.3 Filas de tabla

- `border-b border-[#F3F3F9]`, `py-4 px-6`, `hover:bg-[#FAFAFA]`
- Dato primario: `text-sm font-semibold text-[#2A2A38] Poppins`
- Dato secundario (sublabel): `text-xs text-[#BDBDD1] Poppins`
- Acción de fila: `text-xs font-medium text-[#c22339] Poppins cursor-pointer`
- Última fila: sin `border-b`

### 12.4 Columna de acciones inline

Iconos de acción (Mail, Phone, MessageCircle, MoreVertical) en small icon buttons:
`w-8 h-8 rounded-lg`, icono `#BDBDD1`, hover: `bg-[#FFF5F6] text-[#c22339]`

### 12.5 Paginación

Centrada bajo la tabla, `mt-6 flex items-center justify-center gap-2`:

| Elemento         | Estilo                                                                              |
|------------------|-------------------------------------------------------------------------------------|
| `← Previo`       | `border border-[#D2D2E1] rounded-full px-4 py-1.5 text-sm text-[#2A2A38] Poppins` |
| Página activa `1`| `bg-[#c22339] text-white rounded-full px-3.5 py-1.5 text-sm font-semibold Poppins`|
| `Siguiente →`    | Igual a `← Previo`                                                                  |

---

## 13. Cards de resumen / métricas

Usadas en la parte superior de algunas páginas para mostrar totales o KPIs.

- Grid de 3 o 4 columnas, `gap-4`
- Cada card: `bg-white rounded-xl border border-[#F3F3F9] shadow-sm p-8`
- Valor: `text-[1.75rem] font-bold text-[#2A2A38] Poppins`
- Label: `text-xs font-medium text-[#BDBDD1] uppercase tracking-wider Poppins`
- Opcionalmente: icono Lucide de 20px en `#BDBDD1` a la derecha del valor

---

## 14. Botones

| Tipo       | Estilo                                                                                          |
|------------|-------------------------------------------------------------------------------------------------|
| Primary    | `bg-[#c22339] text-white rounded-lg px-5 py-2.5 text-sm font-semibold Poppins hover:bg-[#a81e30]` |
| Outlined   | `border border-[#D2D2E1] text-[#2A2A38] rounded-lg px-4 py-2 text-xs font-medium Poppins hover:bg-[#ECECF4]` |
| Ghost/Link | `text-[#c22339] text-sm font-medium Poppins hover:underline`, sin borde ni fondo               |
| Disabled   | `bg-[#D2D2E1] text-white cursor-not-allowed`, sin hover                                        |
| Danger     | `bg-[#c22339] text-white` (igual a primary; el contexto da el significado de peligro)          |
| Pill       | Cualquier variante con `rounded-full`                                                           |

---

## 15. Inputs y formularios

```
border border-[#D2D2E1] rounded-lg px-4 py-2.5 text-sm Poppins bg-white
```

- Focus: `outline outline-2 outline-[#c22339]/30 border-[#c22339]`
- Placeholder: `text-[#BDBDD1]`
- Label de campo: `text-xs font-semibold text-[#2A2A38] Poppins mb-1`
- Error: `border-[#c22339]` + mensaje `text-xs text-[#c22339] Poppins mt-1`

---

## 16. Avatares

- `rounded-full`, tamaños: `w-9 h-9` (tabla), `w-12 h-12` (perfil)
- Con imagen: `object-cover`
- Sin imagen: iniciales en 2 letras, `text-xs font-bold text-white Poppins`
- Colores de fondo por usuario (asignar consistentemente por nombre/id):

| Color  | Hex       |
|--------|-----------|
| Teal   | `#0D9488` |
| Blue   | `#3B82F6` |
| Purple | `#7C3AED` |
| Orange | `#F97316` |
| Green  | `#16A34A` |
| Red    | `#c22339` |

---

## 17. Tab lateral "Chatea con nosotros"

Elemento fijo en el borde derecho de la pantalla, presente en todas las páginas.

```
position: fixed; right: 0; top: 50%; transform: translateY(-50%)
bg-[#c22339]; color: white; border-radius: rounded-tl-lg rounded-bl-lg
padding: px-2 py-3; writing-mode: vertical-rl; transform: rotate(-90deg)
font: text-xs font-medium Poppins
icono: MessageSquare (Lucide, 14px) encima del texto
cursor: pointer
```

---

## 18. Reglas de consistencia — Checklist para cada página

Antes de finalizar cualquier implementación, verificar:

- [ ] Fuente Poppins importada y aplicada en todo el componente
- [ ] Colores solo de tokens (nunca hex hard-coded salvo los de estado semántico documentados)
- [ ] Fondo de página `#FAFAFA`, cards/sidebar/topbar `#ffffff`
- [ ] `max-w-[1600px] mx-auto` en el contenedor de contenido
- [ ] Header de tabla con `border-b-2 border-[#c22339]`
- [ ] Columnas de tabla con `text-[11px] font-semibold uppercase tracking-wider text-[#BDBDD1]`
- [ ] Sidebar presente a la izquierda
- [ ] Topbar con `h-16`, sticky, `border-b`
- [ ] Breadcrumb en topbar solo cuando sidebar está contraído
- [ ] Título de página en `#c22339` si la página lo tiene
- [ ] Tab lateral "Chatea con nosotros" en `#c22339` fijo a la derecha
- [ ] Paginación centrada con pill rojo en página activa
- [ ] Todos los botones CTA en `#c22339`, outlined en `border-[#D2D2E1]`
- [ ] Badges de estado con colores semánticos documentados
- [ ] Sombras sutiles (`shadow-sm`) en cards y tablas

---

*Powerload UI Kit — Design System v1.0*
*Última actualización: mayo 2026*
