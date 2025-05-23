# Angular Basic Concepts

Este proyecto es una demostración práctica de conceptos básicos de Angular. Se desarrolla desde cero utilizando Angular CLI, sin enrutamiento y con SCSS como preprocesador de estilos.

He incluido el uso de ``Angular Material`` para añadir iconos a los botones, junto con tooltips que muestran su funcionalidad. Además, he utilizado el pipe ``date`` con el formato ``'dd/MM/yyyy'`` para dar formato a las fechas en el formulario.

Desplegado en GitHub Pages: https://danielcaldes.github.io/angular-basic-concepts/

## Tecnologías usadas
- Angular
- SCSS
- TypeScript
- GitHub Pages para despliegue

## Cómo ejecutar localmente
1. ``git clone https://github.com/DanielCaldes/angular-basic-concepts.git``
2. ``cd angular-basic-concepts``
3. ``npm install``
4. ``ng serve``
5. Accede a la app en ``http://localhost:4200``

Cómo desplegar en GitHub Pages
1. ``ng build --base-href "https://danielcaldes.github.io/angular-basic-concepts/"``
2. ``npx angular-cli-ghpages --dir=dist/angular-basic-concepts/browser``

## Descripción del proyecto

1. Componente: Lista de elementos (list)
- Permite agregar elementos a una lista.
- Cada elemento puede ser eliminado individualmente.
- Usa eventos y *ngFor para renderizar dinámicamente la lista.

2. Componente: Contador (counter)
- Muestra un valor numérico que puede:
  - Incrementarse
  - Decrementarse (sin bajar de 0)
  - Reiniciarse a 0

3. Componente: Formulario de usuario (user-form)
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
```
📁 src/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📁 counter/
│   │   │   ├── 📄 counter.component.html
│   │   │   ├── 📄 counter.component.scss
│   │   │   ├── 📄 counter.component.spec.ts
│   │   │   └── 📄 counter.component.ts
│   │   ├── 📁 list/
│   │   │   ├── 📄 list.component.html
│   │   │   ├── 📄 list.component.scss
│   │   │   ├── 📄 list.component.spec.ts
│   │   │   └── 📄 list.component.ts
│   │   └── 📁 user-form/
│   │       ├── 📄 user-form.component.html
│   │       ├── 📄 user-form.component.scss
│   │       ├── 📄 user-form.component.spec.ts
│   │       └── 📄 user-form.component.ts
│   ├── 📁 models/
│   │   └── 📄 user.model.ts   //Modelo de datos para el formulario user-form
│   ├── 📄 app.component.html
│   ├── 📄 app.component.scss
│   ├── 📄 app.component.spec.ts
│   └── 📄 app.component.ts
├── 📁 assets/
└── 📄 styles.scss
```
