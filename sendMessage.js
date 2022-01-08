// function to post API request

import axios from 'axios';
const baseUrl = 'https://api.callmebot.com';

export const sendMessage = (username, message) => {
    return sendTelegramMessage(username, message) && makeTelegramCall(username, message);
}

export const sendTelegramMessage = (username, message) => {
    const url = `text.php?user=${username}&text=MEOW from ${username}: ${message}`;
    return axios
                    .get(`${baseUrl}/${url}`)
                    .then(response => {
                        console.log(response.data);
                        return response.status === 200;
                    })
                    .catch(error => {
                        console.error(error);
                        return false;
                    });
};

export const makeTelegramCall = (username, message) => {
    const url = `start.php?user=${username}&text=${encodeURI(`MEOW from ${username} ${message}`)}&rpt=6`;
    return axios
        .get(`${baseUrl}/${url}`)
        .then(response => {
            console.log(response.data);
            return response.status === 200;
        })
        .catch(error => {
            console.error(error);
            return false;
        });
};