
export default {
    getMessages () {
        let messages = [];
        for (let i = 0; i < 10; i++) {
            messages.push({
                title: 'title' + i,
                content: 'content' + i
            })
        }
        return messages
    }
};
