# Angular Basic Concepts

Este proyecto es una demostración práctica de conceptos básicos de Angular. Se desarrolla desde cero utilizando el Angular CLI, sin enrutamiento y con SCSS como preprocesador de estilos.

Desarrollado por DanielCaldes — desplegado en GitHub Pages: https://danielcaldes.github.io/angular-basic-concepts/

## Tecnologías usadas
- Angular
- SCSS
- TypeScript
- GitHub Pages para despliegue

## Cómo ejecutar localmente
git clone https://github.com/DanielCaldes/angular-basic-concepts.git
cd angular-basic-concepts
npm install
ng serve

Accede a la app en http://localhost:4200

Cómo desplegar en GitHub Pages
ng build --base-href "https://danielcaldes.github.io/angular-basic-concepts/"
npx angular-cli-ghpages --dir=dist/angular-basic-concepts/browser

## Descripción del proyecto

1. Componente: Lista de elementos (ListComponent)
- Permite agregar elementos a una lista.
- Cada elemento puede ser eliminado individualmente.
- Usa eventos y *ngFor para renderizar dinámicamente la lista.

2. Componente: Contador (CounterComponent)
- Muestra un valor numérico que puede:
  - Incrementarse
  - Decrementarse (sin bajar de 0)
  - Reiniciarse a 0
- Utiliza @Input/@Output y manejo de estado interno.

3. Componente: Formulario de usuario (UserFormComponent)
- Formulario que recoge:
  - Nombre
  - Apellido
  - Teléfono
  - Fecha de nacimiento
- Al enviar el formulario, los datos se muestran en una tabla HTML.
- Valida que todos los campos sean completados antes de agregar.

4. Componente principal (AppComponent)
- Integra los 3 componentes anteriores y los organiza en secciones.
- Estilizado con SCSS para una mejor presentación visual.

## Estructura del proyecto
📁 src/
├── 📁 app/
│   ├── 📄 counter/
│   ├── 📄 list/
│   ├── 📄 user-form/
│   └── 📄 app.component.ts
├── 📁 assets/
└── 📄 styles.scss
