export let chatState = {
    title: 'School group',
    messages: [],
    addMessage(character, imgValue, message) {
        this.messages.push({
            character,
            imgValue,
            message
        });
    },
    setTitle(newTitle) {
        this.title = newTitle;
    }
};