# Seg Bolivar

Proyecto Next.js con Tailwind CSS.

## Scripts

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm run start   # iniciar build de producción
npm run lint    # eslint
```

## Estructura

Todo el código vive en `src/`, organizado por tipo y por feature:

```
src/
  app/            # Routing (App Router)
  components/     # Componentes compartidos
    ui/           # Primitivas de UI (button, card, input...)
    layout/       # Navbar, Sidebar, Footer...
  features/       # Módulos por feature
    <feature>/
      components/
      hooks/
      api/
      types/
  hooks/          # Hooks compartidos globales
  lib/            # Utilidades/config compartidas
  services/       # Clientes de API globales
  types/          # Tipos compartidos globales
```