# Elevenlabs Nodejs
The Nodes JS <a href="https://api.elevenlabs.io/docs">API</a> for ElevenLabs text-to-speech. Unleash the power of our cutting-edge technology to generate realistic, captivating speech in a wide range of languages.

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

# Get Sample Voice Audio URL
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