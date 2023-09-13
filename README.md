# Elevenlabs Nodejs
The Nodes JS <a href="https://api.elevenlabs.io/docs">API</a> for ElevenLabs text-to-speech.

## Getting Started
```
const apiKey = process.env.API_KEY;
const { ElevenlabsAPI } = require('elevenlabs-m2k');
const elevenlabs = new ElevenlabsAPI(apiKey);
```

## Get Voices
```
elevenlabs.getVoices().then(async (data) => {
    const { voice_id, name } = data.voices[0];
    console.log(name, 'is speaking', `(${voice_id})`);
});
```

```
const data = await elevenlabs.getVoices();
const { voice_id, name } = data.voices[0];
console.log(name, 'is speaking', `(${voice_id})`);
```


## Get Audio
```
const audio = await elevenlabs.getAudio("Hello World", voice_id);
```