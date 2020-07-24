This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## About
La idea es que se muestra el clima rastreando la localización usando ip-api, junto con el de las 5 ciudades a elección.
Tambien las cards son seleccionables, podes ver el pronóstico para los próximos 5 días.

Mejoras que haría:
- Implementación de Store: Algo que no me convenció fue pegarle a la API tanto en la home como en la sección /clima, ya que trae la misma data, en caso de usar store (Context,Redux, etc..) o LocalStorage, Cookies quedaria guardada la  data y no pediria 2 veces los datos. 
Esto haría tambien que no sea necesario pasar los párametros en la uri como por ej el nombre  de la ciudad que es algo que no me devolvía la API

- Los estilos custom dejarlos más ordenados o si se usarian en otras pantallas los agregaria en un ui kit o componente

- Paginas de error más personalizadas

- Test en los payload de las APIs

- Componente para la tipografía del sitio 

- En caso de que crezca implementaria Storybook para ver los componentes que tienen que ver con ui

- Cypress para test end-to-end

Nota:
Tuve que hacer una lógica fea en el front para cortar el periodo de 7 días a 5 que es lo que se pide! eso hizo que
tenga que correr un día con el index + 1 cuando muestro el periodo de pronóstico,  ya que arrancaba con el día de hoy y esa información se estaba mostrando en el banner previamente.
