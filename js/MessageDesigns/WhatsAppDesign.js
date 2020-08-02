const createNormalMessage = (character, imgValue, message) => {
    return `
        <div class="col-lg-12 col-md-11 MessageContainer">
            <div class="row">
                <div class="MessageImgContainer col-lg-1 col-2 col-sm-1 px-0">
                    <img src="img/${imgValue}.png" class="ChatImgPersonaje MessageImgCharacter"/>
                </div>
                <div class="pr-0 MessageRectangleContainer col-lg-10 col-9">
                    <div class="row MessageContent">
                        <span class="MessageTail"></span>
                        <div class="MessageTextContainer">
                            <div class="MessageUserNameContainer">
                                ${character}
                            </div>
                            <span class="MessageText">
                                ${message}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const createSpecialMessage = (character, imgValue, message) => {
    return `
        <div class="col-lg-12 col-md-11 MessageContainer">
            <div class="row">
                <div class="MessageImgContainer col-1 col-sm-2 col-lg-1 px-0"></div>
                <div class="pr-0 MessageRectangleContainer col-lg-10 col-9">
                    <div class="row MessageContentAnata">
                        <span class="MessageTailAnata"></span>
                        <div class="MessageTextContainer MessageTextContainerAnata">
                            <div class="MessageUserNameContainer" style="display:none;">
                                ${character}
                            </div>
                            <span class="MessageText">
                                ${message}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="MessageImgContainer col-lg-1 col-2 col-sm-1 px-0">
                    <img src="img/${imgValue}.png" class="ChatImgPersonaje MessageImgCharacter"/>
                </div>
            </div>
        </div>
    `;
};

export const createWhatsAppMessage = (character, imgValue, message) => {
    const container = document.createElement('div');
    container.className = 'row mb-2 MessageTemplateContainer justify-content-center';
    if (imgValue == "Anata") {
        container.innerHTML = createSpecialMessage(character, imgValue, message);
    }
    else {
        container.innerHTML = createNormalMessage(character, imgValue, message);
    }
    return container;
}

