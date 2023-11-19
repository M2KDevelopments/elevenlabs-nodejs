# Elevenlabs Nodejs
<a href="https://www.buymeacoffee.com/app/m2kdevelopments" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>


The Nodes JS <a href="https://api.elevenlabs.io/docs">API</a> for ElevenLabs text-to-speech. Unleash the power of our cutting-edge technology to generate realistic, captivating speech in a wide range of languages.

## Installation
```
npm i elevenlabs-m2k --save
```
or 
```
yarn add elevenlabs-m2k
```

## Getting Started
Get your ElevenLabs API key from <a href="https://docs.elevenlabs.io/api-reference/quick-start/authentication">here</a>.

```
const apiKey = process.env.API_KEY;
const { ElevenlabsAPI } = require('elevenlabs-m2k');
const elevenlabs = new ElevenlabsAPI(apiKey);
```

## Get Voices
```
elevenlabs.getVoices().then(async (voices) => {
    const { voice_id, name } = voices[0];
    console.log(name, 'is speaking', `(${voice_id})`);
});
```

## Get Sample Voice Audio URL
```
elevenlabs.getSample(voice_id).then(url => console.log(url));
```


## Get Models
```
elevenlabs.getModels().then(async (data) => {
    const { model_id, name } = data.models[0];
    console.log(name, '=', `(${model_id})`);
});
```
 

## Get Audio
```
const audio = await elevenlabs.getAudio("Hello World", voice_id); // Get array buffer
```
