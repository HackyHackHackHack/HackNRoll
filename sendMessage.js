// function to post API request

import axios from 'axios';
const baseUrl = 'https://api.callmebot.com';

export const sendTelegramMessage = (username, message) => {
    //TODO: message += user's username
    const url = `${baseUrl}/text.php?user=@${username}&text=${message}`;
    axios
        .get(url)
        .then(response => console.log(response.data))
        .catch(console.err);
};