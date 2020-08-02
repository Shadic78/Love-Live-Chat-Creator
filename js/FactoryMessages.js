import {createWhatsAppMessage} from './MessageDesigns/WhatsAppDesign.js';

export const createMessage = (character, imgValue, message, style) => {
    if(style == 'WhatsApp') {
        return createWhatsAppMessage(character, imgValue, message);
    }
    else if(style == 'Original') {
        console.log('Original message');
    }
}