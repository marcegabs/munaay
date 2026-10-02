# ⚡ Quick Start - Sube a GitHub en 5 Minutos

## Paso 1: Descargar el ZIP
Descarga: `angel-whispers-masterclass.zip`

## Paso 2: Descomprime
Extrae el ZIP en tu computadora.

## Paso 3: Crea el Repositorio en GitHub
1. Ve a https://github.com/new
2. Repository name: `angel-whispers-masterclass`
3. Description: `Angel Discovery Tool - Descubre tu Arcángel Guardián`
4. Public
5. **NO** marques "Add README" (ya lo tenemos)
6. Click **"Create repository"**

## Paso 4: Abre Terminal/CMD

```bash
# Ve a la carpeta descomprimida
cd angel-whispers-masterclass

# Inicializa git
git init

# Agrega todos los archivos
git add .

# Commit
git commit -m "Initial commit: Angel Whispers Masterclass"

# Agrega el remote (REEMPLAZA: tu-usuario/tu-repositorio)
git remote add origin https://github.com/TU_USUARIO/angel-whispers-masterclass.git

# Cambia a main
git branch -M main

# Sube todo
git push -u origin main
```

## Paso 5: Activa GitHub Pages (Opcional)

1. Ve a tu repo en GitHub
2. Settings → Pages
3. Branch: main
4. Save
5. ¡Listo! Tu sitio estará en: 
   `https://tu-usuario.github.io/angel-whispers-masterclass`

---

## ✨ Verificación Rápida

Después de subir, abre en tu navegador:
- `index.html` debe funcionar perfectamente
- Los logos MUNAAY deben cargar
- Puedes descargar tarjetas en PNG
- Puedes compartir en redes

---

## 🆘 Si algo falla

### "fatal: not a git repository"
```bash
git init
```

### "permission denied"
Asegúrate de haber copiado la URL correcta desde GitHub

### "already exists"
```bash
rm -rf .git
git init
```

---

## 📱 Para Probar Localmente

Antes de subir, prueba:

**Con Python 3:**
```bash
python -m http.server 8000
# Abre http://localhost:8000
```

**Con Node:**
```bash
npx http-server
# Abre http://localhost:8080
```

---

**Hecho en ⚡ 5 minutos**

¿Preguntas? Abre un issue en GitHub o contacta a @munaaycosmico
