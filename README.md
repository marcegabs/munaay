# ✨ Angel Whispers Masterclass - Angel Discovery Tool

Una experiencia interactiva mágica para descubrir tu Arcángel Guardián basada en numerología angelical. Desarrollado para el taller **Angel Whispers Masterclass** de MUNAAY Cósmico.

![MUNAAY Cósmico](assets/munaay.svg)

## Acerca de

Este artifact interactivo forma parte del taller **Angel Whispers Masterclass**, un evento transformador en línea donde participantes descubren su Arcángel Guardián a través de:

- **Rituales de meditación** guiados
- **Numerología angelical** según el Código de Tus Ángeles
- **Descubrimiento personalizado** de su arcángel protector
- **Experiencia compartible** para redes sociales

**Evento**: Angel Whispers Masterclass  
**Facilitadora**: MUNAAY Cósmico (@munaaycosmico)  
**Fecha**: 26 de Octubre, 2026  
**Horario**: 7:00 - 9:00 PM (UTC-6)  
**Aportación**: $333 USD  

---

## Características

✨ **Ritual de Conexión**  
Una meditación guiada visual que prepara el espacio energético del usuario.

🔮 **Cálculo Automático**  
Determina el Número de Esencia del usuario mediante su día de nacimiento.

✅ **11 Arcángeles Celestiales**  
Cada uno con características, título y código sagrado único.

📱 **Descargable y Compartible**  
Genera una tarjeta hermosa en PNG que puede descargarse o compartirse en redes sociales.

🎨 **Diseño Celestial**  
Estética mágica con gradientes dorados, animaciones suaves y glow effects.

---

## Los Arcángeles

| Esencia | Arcángel | Rol | Código |
|---------|----------|-----|--------|
| 1 | Miguel | Protector Divino | 613 |
| 2 | Chamuel | Mensajero del Corazón | 725 |
| 3 | Gabriel | Mensajero Celestial | 881 |
| 4 | Uriel | Guardián de la Sabiduría | 411 |
| 5 | Jofiel | Portador de Luz | 521 |
| 6 | Rafael | Sanador Divino | 29 |
| 7 | Raziel | Guardián del Misterio | 679 |
| 8 | Zadquiel | Agente del Cambio | 389 |
| 9 | Metatrón | Escriba Celestial | 331 |
| 11 | Nathaniel | Catalizador del Destino | 334 |
| 22 | Sandafón | Guardián de la Naturaleza | 820 |

---

## Cómo Usar

1. **Ingresa tu nombre** en el campo de entrada
2. **Selecciona tu día de nacimiento** (se usa solo el día)
3. **Presiona "Revelar mi Arcángel"**
4. **Participa en el ritual** de respiración (4 segundos de meditación)
5. **Descubre tu arcángel** con su información y mensaje personalizado
6. **Descarga tu tarjeta** o **comparte** en redes sociales

### Cálculo del Número de Esencia

- Suma los dígitos de tu día de nacimiento hasta obtener un solo dígito
- **Excepción**: Los días 11 y 22 son Números Maestros y no se reducen

**Ejemplos:**
- Día 15 → 1 + 5 = 6 (Rafael)
- Día 23 → 2 + 3 = 5 (Jofiel)
- Día 11 → 11 (Nathaniel) - No se reduce
- Día 22 → 22 (Sandafón) - No se reduce

---

## Stack Tecnológico

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **html2canvas** para exportar tarjetas PNG
- **Responsive Design** - Funciona en desktop, tablet y mobile
- **Sin dependencias externas** - Todo lo que necesitas en un archivo

---

## Instalación

### Opción 1: Usar Online
Abre `index.html` directamente en tu navegador.

### Opción 2: Clonar el Repositorio
```bash
git clone https://github.com/marcelagomezabundis/angel-whispers-masterclass.git
cd angel-whispers-masterclass
# Abre index.html en tu navegador
```

### Opción 3: Host Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server
```

Luego accede a `http://localhost:8000`

---

## Estructura del Proyecto

```
angel-whispers-masterclass/
├── index.html              # Artifact interactivo principal
├── README.md              # Este archivo
├── LICENSE               # MIT License
├── assets/
│   ├── munaay.svg       # Logo MUNAAY color
│   └── munaay_white.svg # Logo MUNAAY blanco
└── docs/
    └── angel-codes.md    # Referencia completa de códigos
```

---

## Fuente de Contenido

Basado en **"El Código de Tus Ángeles - Numerología Angelical"** por Yazmín Barajas Zavaleta, Numeróloga.

Los 11 arcángeles, sus características, mensajes y códigos sagrados provienen de este sistema tradicional de numerología angelical.

---

## Personalización

### Cambiar Colores
En el archivo `index.html`, busca la sección `<style>` y modifica:

```css
background: linear-gradient(135deg, #d4af37 0%, #f4a540 100%);
/* Cambia estos valores hexadecimales por tus colores */
```

### Agregar Mensajes Personalizados
Edita el objeto `messages` en JavaScript:

```javascript
const messages = {
  1: '✨ Tu mensaje personalizado aquí',
  // ... más arcángeles
};
```

### Cambiar Arcángeles
Modifica el objeto `angels` con nueva información:

```javascript
const angels = {
  1: {
    name: 'Miguel',
    title: 'Tu Título',
    role: 'Tu Rol',
    code: 'CÓDIGO',
    description: 'Tu descripción',
    characteristics: ['Característica 1', 'Característica 2']
  }
};
```

---

## Funcionamiento del Ritual

**Fase 1: Formulario** (Entrada de datos)
- Usuario ingresa nombre y fecha de nacimiento
- Validación en tiempo real

**Fase 2: Ritual** (4 segundos)
- Pantalla de meditación
- Círculo de respiración animado
- Texto guía: "Cierra los ojos, respira profundo"

**Fase 3: Revelación** (Animación suave)
- Aparición del arcángel con fade-in
- Glow effect continuo
- Información completa del arcángel

**Fase 4: Integración** (Opciones)
- Descarga PNG de la tarjeta
- Compartir en redes sociales
- Iniciar otro descubrimiento

---

## Compatibilidad

- ✅ Chrome / Chromium (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requisitos:**
- JavaScript habilitado
- Soporte para Fetch API
- Navegador moderno (2020+)

---

## Licencia

MIT License - Ver archivo LICENSE para más detalles

---

## Autor

Desarrollado por **Marcela Gómez Abundis**  
Diseñadora Estratégica & UX Professional

**MUNAAY Cósmico**  
@munaaycosmico

---

## Créditos

- **Numerología**: Yazmín Barajas Zavaleta
- **Facilitadora**: Janine Sosa (MUNAAY Cósmico)
- **Desarrollo**: Marcela Gómez Abundis
- **Diseño**: Inspirado en energía celestial y branding MUNAAY Cósmico

---

## Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, abre un issue primero para discutir qué cambiarías.

---

## Contacto

- **MUNAAY Cósmico**: @munaaycosmico
- **Portfolio**: marcelagomezabundis.com
- **GitHub**: github.com/marcelagomezabundis

---

**Hecho con ✨ mágica y 💜 intención**
