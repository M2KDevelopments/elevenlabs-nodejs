import axios from 'axios';
const instance = axios.create();
const BASE_URL = `https://api.elevenlabs.io/v1`;

// Documentation -  https://api.elevenlabs.io/docs
export class ElevenlabsAPI {

    apiKey: string; // Declare the apiKey property
    headers: any // Headers for API

    /**
     * Get started with Elevenlabs API
     * @param {*} apiKey ElevenLabs API key - https://docs.elevenlabs.io/api-reference/quick-start/authentication
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.headers = {
            'accept': 'audio/mpeg',
            'xi-api-key': `${apiKey}`,
            'Content-Type': 'application/json'
        }
    }

    /**
     * Get all preset voices
     * @returns A json array of {name, voice_id, ...} and more 
     */
    async getVoices(): Promise<Array<any>> {
        const url = `${BASE_URL}/voices`;
        return (await instance.get(url, this.headers)).data;
    }

    /**
     * 
     * @param {*} text The text you want to convert to an audio file
     * @param {*} voiceID The voice id. You can get voices by called the 'getVoices' function.
     * @returns Audio file
     */
    async getAudio(text: string, voiceID: string) {
        const url = `${BASE_URL}/text-to-speech/${voiceID}`
        const data = {
            "text": text,
            "model_id": "eleven_monolingual_v1",
            "voice_settings": {
                "stability": 0.5,
                "similarity_boost": 0.75
            }
        }
        return (await instance.post(url, data, this.headers)).data;
    }
}