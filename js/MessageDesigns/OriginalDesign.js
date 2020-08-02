const getMessageStructure = (character, imgValue, message) => {
    return `
        <div class="col-lg-6 col-md-10 MessageContainer">
            <div class="row align-items-center margin mb-2">
                <img src="img/${imgValue}.png" class="ChatImgPersonaje"/>
                <div class="col-6 col-lg-6 ml-1 MessageCharacterName">
                    ${character}
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-11 col-lg-11 MessageText">
                    ${message}
                </div>
            </div>
            <hr>
        </div>   
    `;
};

export const createOriginalStyleMessage = (character, imgValue, message) => {
    const container = document.createElement('div');
    container.className = 'row justify-content-center';
    container.innerHTML = getMessageStructure(character, imgValue, message);

    return container;
};

