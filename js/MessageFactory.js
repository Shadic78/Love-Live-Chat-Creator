import {createWhatsAppMessage} from './MessageDesigns/WhatsAppDesign.js';
import {createOriginalStyleMessage} from './MessageDesigns/OriginalDesign.js';

export const createMessage = (character, imgValue, message, style) => {
    if(style == 'WhatsApp') {
        return createWhatsAppMessage(character, imgValue, message);
    }
    else if(style == 'Original') {
        return createOriginalStyleMessage(character, imgValue, message);
    }
}