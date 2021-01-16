import '../css/component.css';

export const saludar = (nombre) => {
    console.log(`Creando etiqueta H1`);

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} que tal estuvo el fin de semana? (._.")`;

    document.body.append(h1);
}