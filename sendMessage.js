// function to post API request

import axios from 'axios';
import { sms } from './sms';
const baseUrl = 'https://api.callmebot.com';

export const sendMessage = (user, username, message, number) => {
    console.log('HERE'+number);
    return sendTelegramMessage(user, username, message) && makeTelegramCall(user, username, message) && sms(number, message);
}

export const sendTelegramMessage = (currentUser, username, message) => {
    const url = `text.php?user=${username}&text=MEOW from ${currentUser}: ${message}`;
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

export const makeTelegramCall = (currentUser, username, message) => {
    const url = `start.php?user=${username}&text=${encodeURI(`MEOW from ${currentUser} ${message}`)}&rpt=6`;
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