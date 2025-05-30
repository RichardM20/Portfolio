# Professional Portfolio - React + Vite

Un portafolio profesional modular y escalable desarrollado con React, Vite, TypeScript y Tailwind CSS.

## 🚀 Características

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - Última versión con hooks modernos
- 🎨 **Tailwind CSS** - Styling utility-first
- 🎭 **Framer Motion** - Animaciones fluidas
- 🌍 **Multi-idioma** - Español e Inglés
- 🌙 **Modo oscuro** - Toggle automático
- 📱 **Responsive** - Diseño mobile-first
- 🏗️ **Arquitectura modular** - Código escalable y mantenible
- 🔧 **TypeScript** - Tipado estricto

## 📁 Estructura del Proyecto

\`\`\`
src/
├── components/
│   ├── common/          # Componentes reutilizables
│   ├── layout/          # Componentes de layout
│   ├── sections/        # Secciones del portfolio
│   └── ui/              # Componentes base de UI
├── contexts/            # Context providers
├── hooks/               # Custom hooks
├── lib/
│   ├── config/          # Configuración personal
│   ├── constants/       # Constantes y configuraciones
│   ├── types/           # Definiciones TypeScript
│   └── utils/           # Utilidades y helpers
└── styles/              # Estilos globales
\`\`\`

## 🛠️ Instalación

1. **Clonar el repositorio**
\`\`\`bash
git clone <tu-repo>
cd professional-portfolio
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
\`\`\`

3. **Configurar información personal**
Edita `src/lib/config/personal.ts` con tu información:

\`\`\`typescript
export const personalInfo = {
  name: "Tu Nombre",
  email: "tu@email.com",
  // ... resto de configuración
}
\`\`\`

4. **Ejecutar en desarrollo**
\`\`\`bash
npm run dev
\`\`\`

5. **Build para producción**
\`\`\`bash
npm run build
\`\`\`

## ⚙️ Configuración

### Información Personal
Modifica `src/lib/config/personal.ts`:
- Datos personales
- Enlaces de redes sociales
- Proyectos
- Habilidades técnicas
- Estadísticas

### Imágenes
- Coloca tu foto de perfil en `public/profile.jpg`
- Coloca tu CV en `public/cv.pdf`
- Actualiza las URLs de imágenes de proyectos

### Traducciones
Agrega o modifica traducciones en `src/lib/translations.ts`

## 🎨 Personalización

### Colores
Modifica `tailwind.config.js` para cambiar la paleta de colores.

### Animaciones
Ajusta las configuraciones en `src/lib/constants/animations.ts`.

### Componentes
Todos los componentes son modulares y fáciles de personalizar.

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter ESLint
- `npm run type-check` - Verificación de tipos

## 🏗️ Arquitectura

### Principios Aplicados
- **Separación de responsabilidades**
- **DRY (Don't Repeat Yourself)**
- **Single Responsibility Principle**
- **Composición sobre herencia**
- **Tipado estricto con TypeScript**

### Patrones de Diseño
- **Custom Hooks** para lógica reutilizable
- **Context API** para estado global
- **Compound Components** para UI compleja
- **Render Props** para compartir lógica

## 🚀 Deployment

### Vercel (Recomendado)
\`\`\`bash
npm run build
# Subir carpeta dist/ a Vercel
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Subir carpeta dist/ a Netlify
\`\`\`

### GitHub Pages
\`\`\`bash
npm run build
# Configurar GitHub Pages para servir desde dist/
\`\`\`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

MIT License - ve el archivo [LICENSE](LICENSE) para más detalles.
\`\`\`

¡Perfecto! 🎉 Ahora tienes un portafolio completamente convertido a **React + Vite** con todas las características:

## ✨ **Ventajas de React + Vite:**

- ⚡ **Desarrollo ultra rápido** - HMR instantáneo
- 📦 **Bundle optimizado** - Tree shaking automático
- 🔧 **Configuración mínima** - Zero config por defecto
- 🚀 **Build rápido** - Rollup para producción
- 💡 **Mejor DX** - Mejor experiencia de desarrollo

## 🏗️ **Arquitectura Mantenida:**

- ✅ **Misma estructura modular**
- ✅ **Mismos principios de diseño**
- ✅ **TypeScript estricto**
- ✅ **Custom hooks reutilizables**
- ✅ **Componentes escalables**

## 🔧 **Para empezar:**

1. **Instalar dependencias**: `npm install`
2. **Configurar**: Editar `src/lib/config/personal.ts`
3. **Desarrollar**: `npm run dev`
4. **Build**: `npm run build`

¡El proyecto está listo para usar con React + Vite manteniendo toda la funcionalidad y arquitectura profesional! 🚀
