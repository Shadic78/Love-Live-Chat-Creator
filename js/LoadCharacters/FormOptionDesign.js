export const createOption = ( {firstName, lastName, color, img} ) => {
    const option = document.createElement('option');

    option.setAttribute('value', firstName);
    option.setAttribute('data-color', color);
    option.setAttribute('imgName', img);
    option.textContent = `${firstName} ${lastName}`;

    return option;
};