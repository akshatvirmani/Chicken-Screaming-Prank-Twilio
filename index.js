require('dotenv').config();
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MP3Url = 'https://chickensound-1470.twil.io/ch.mp3'; // Hosted MP3 file URL

async function createCall() {
  const call = await twilio.calls.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "number", // Replace with your phone number
    twiml: `<Response> <Play> ${MP3Url} </Play> </Response>`,
  });
}

createCall();