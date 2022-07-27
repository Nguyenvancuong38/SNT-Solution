import axios from 'axios';

const URL_API_TOKEN = 'https://api.petfinder.com/v2/oauth2/token';
const URL_API_ANIMALS = 'https://api.petfinder.com/v2/animals?type=dog&page=2';

const details = {
    'grant_type': 'client_credentials',
    'client_id': 'v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ',
    'client_secret': '91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H'
};

let formBody = [];
for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

export const loginApi = async () => {
    const data = await axios.post(URL_API_TOKEN, formBody);
    return data;
};

export const getAnimals = async (access_token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access_token);

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const res = await fetch(URL_API_ANIMALS, requestOptions).catch(console.log("error"));
    const data = await res.json();
    return data;
};
