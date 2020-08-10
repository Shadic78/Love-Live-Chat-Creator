export const createElement = ( {firstName, img} ) => {
    const container = document.createElement('div');
    container.className = 'col-4 col-md-3 col-lg-2';

    const image = document.createElement('img');
    image.className = 'ImgCharacterSelector';
    image.setAttribute('src', `img/${img}`);
    image.setAttribute('data-char', firstName);
    image.setAttribute('imgName', img);

    container.appendChild(image);

    return container;
};