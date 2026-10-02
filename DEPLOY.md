# Guía de Despliegue

Angel Whispers Masterclass puede desplegarse en múltiples plataformas sin necesidad de backend. Elige la opción que mejor se ajuste a tus necesidades.

## 1. GitHub Pages (Recomendado)

La forma más fácil de desplegar tu sitio.

### Pasos

1. **Sube tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/angel-whispers-masterclass.git
   git branch -M main
   git push -u origin main
   ```

2. **Activa GitHub Pages**
   - Ve a tu repositorio > Settings
   - Scroll down a "GitHub Pages"
   - En "Source", selecciona "main branch"
   - Click en "Save"

3. **¡Listo!**
   Tu sitio estará en: `https://tu-usuario.github.io/angel-whispers-masterclass`

---

## 2. Netlify

Despliegue automático con cada push.

### Pasos

1. **Instala Netlify CLI** (opcional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Conecta tu repositorio**
   - Ve a netlify.com
   - Click en "New site from Git"
   - Selecciona GitHub y autoriza
   - Elige tu repositorio
   - Deja las settings por defecto (no necesita build command)
   - Click en "Deploy"

3. **Personaliza el dominio**
   - En Netlify Dashboard > Site settings
   - Cambia el nombre del subdomain a algo como `angel-whispers`
   - Tu URL será: `https://angel-whispers.netlify.app`

### Con CLI
```bash
netlify deploy --prod
```

---

## 3. Vercel

Despliegue instantáneo con excelente rendimiento.

### Pasos

1. **Conecta tu repositorio**
   - Ve a vercel.com
   - Click en "New Project"
   - Importa tu repo de GitHub
   - Vercel detectará que es HTML puro
   - Click en "Deploy"

2. **Tu sitio estará en**
   - `https://angel-whispers.vercel.app` (o tu dominio personalizado)

### Con CLI
```bash
npm i -g vercel
vercel --prod
```

---

## 4. AWS S3 + CloudFront

Para máximo control y escalabilidad.

### Pasos

1. **Crear bucket S3**
   ```bash
   aws s3 mb s3://angel-whispers-masterclass
   ```

2. **Subir archivos**
   ```bash
   aws s3 sync . s3://angel-whispers-masterclass \
     --exclude ".git/*" --exclude "node_modules/*"
   ```

3. **Configurar como sitio web estático**
   - AWS Console > S3
   - Selecciona tu bucket
   - Properties > Static website hosting
   - Enable > Index document: "index.html"

4. **Crear CloudFront distribution**
   - CloudFront > Create distribution
   - Origin domain: tu bucket S3
   - Default root object: "index.html"

---

## 5. Local / Servidor Propio

Para desarrollo o servidor personal.

### Python 3
```bash
python -m http.server 8000
# Accede a http://localhost:8000
```

### Node.js
```bash
npx http-server
# Accede a http://localhost:8080
```

### Docker
```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
EXPOSE 80
```

```bash
docker build -t angel-whispers .
docker run -p 8080:80 angel-whispers
```

---

## 6. Firebase Hosting

Google Firebase para hosting de proyectos estáticos.

### Pasos

1. **Instala Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Autentica**
   ```bash
   firebase login
   ```

3. **Inicializa el proyecto**
   ```bash
   firebase init hosting
   ```
   - Selecciona tu proyecto
   - Public directory: `.` (raíz del proyecto)
   - Configure single-page app: `No`

4. **Deploy**
   ```bash
   firebase deploy --only hosting
   ```

Tu sitio estará en: `https://tu-proyecto.web.app`

---

## 7. Surge.sh

Más simple imposible.

### Pasos

```bash
npm install -g surge
surge

# Te pedirá:
# - Email
# - Password
# - Path (usa .)
# - Domain (ej: angel-whispers.surge.sh)

# ¡Listo!
```

---

## 8. 000webhost (Gratis)

Alojamiento web gratuito con soporte PHP.

### Pasos

1. Crea cuenta en 000webhost.com
2. Sube los archivos via FTP o File Manager
3. Tu sitio estará en: `https://tu-nombre.000webhostapp.com`

---

## Comparación Rápida

| Plataforma | Setup | Costo | Dominio | Recomendado |
|-----------|-------|-------|---------|------------|
| GitHub Pages | Muy Fácil | Gratis | GH Pages | ✅ Beginners |
| Netlify | Fácil | Gratis+Premium | Personalizado | ✅ Recomendado |
| Vercel | Muy Fácil | Gratis+Premium | Personalizado | ✅ Developers |
| AWS S3 | Difícil | Pago | Personalizado | Para escala |
| Firebase | Fácil | Gratis+Premium | Personalizado | ✅ Google |
| Surge | Muy Fácil | Gratis | Surge.sh | Dev rápido |
| Docker | Media | Pago | Variable | Profesional |

---

## Tips de Despliegue

### Performance
- Los archivos estáticos cargan muy rápido
- No hay necesidad de optimización especial
- Usa CDN (incluida en Netlify/Vercel)

### Dominios Personalizados
Todas las plataformas soportan dominios personalizados:
```
angelwhispers.com
tudominio.com/angel-whispers
```

### HTTPS
Todas las plataformas incluyen HTTPS gratis (excepto algunos alojamientos básicos).

### Analytics
Puedes agregar Google Analytics fácilmente:
```html
<!-- Antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Troubleshooting

### "404 - Página no encontrada"
- Asegúrate de que `index.html` esté en la raíz
- En GitHub Pages, podría estar en una carpeta (revisa settings)

### "Recursos no cargan"
- Usa rutas relativas: `./munaay.svg` no `/munaay.svg`
- Verifica que todos los archivos estén subidos

### "Scripts no funcionan"
- Revisa la consola del navegador (F12)
- Asegúrate de que html2canvas se carga correctamente

---

## Siguiente Paso

¿Necesitas ayuda?
- GitHub Issues: Para bugs o preguntas técnicas
- Email: munaay@cosmico.com
- Twitter: @munaaycosmico

Hecho con ✨ mágica
