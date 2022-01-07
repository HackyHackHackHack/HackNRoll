// function to post API request

import axios from 'axios';
const baseUrl = 'https://api.callmebot.com';

export const sendMessage = (username, message) => {
    sendTelegramMessage(username, message);
    telegramCall(username, message);
}

export const sendTelegramMessage = (username, message) => {
    //TODO: message += by user's username
    const url = `text.php?user=${username}&text=${message}`;
    axios
        .get(`${baseUrl}/${url}`)
        .then(response => console.log(response.data))
        .catch(console.err);
};

export const telegramCall = (username, message) => {
    const url = `start.php?user=${username}&text=${encodeURI(message)}&rpt=10`;
    axios
        .get(`${baseUrl}/${url}`)
        .then(response => console.log(response.data))
        .catch(console.err);
}