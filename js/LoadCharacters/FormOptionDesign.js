export const createOption = ( {firstName, lastName, color} ) => {
    const option = document.createElement('option');

    option.setAttribute('value', firstName);
    option.setAttribute('data-color', color);
    option.textContent = `${firstName} ${lastName}`;

    return option;
};