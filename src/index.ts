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
            'accept': 'audio/*',
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
        return (await instance.get(url, { headers: this.headers })).data.voices;
    }

    /**
     * Get all preset voices
     * @returns A json array of {name, model_id, ...} and more 
     */
    async getModels(): Promise<Array<any>> {
        const url = `${BASE_URL}/models`;
        return (await instance.get(url, { headers: this.headers })).data;
    }

    /**
     * Get all preset voices
     * @returns A sample Audio from voice url
     */
    async getSample(voice_id: string): Promise<string> {
        const url = `${BASE_URL}/voices/${voice_id}`;
        const response = await instance.get(url, { headers: this.headers });
        const voice = response.data;
        return voice.preview_url;
    }

    /**
     * 
     * @param {*} text The text you want to convert to an audio file
     * @param {*} voiceID The voice id. You can get voices by calling the 'getVoices' function.
     * @param stability 
     * @param similarity_boost 
     * @param model_id Identifier of the model that will be used, You can get models by calling the 'getModels' function.
     * @returns Audio file
     */
    async getAudio(text: string, voiceID: string, stability: number = 0.5, similarity_boost = 0.75, model_id: string = "eleven_monolingual_v1") {
        const url = `${BASE_URL}/text-to-speech/${voiceID}`
        const data = {
            "text": text,
            "model_id": model_id,
            "voice_settings": {
                "stability": stability,
                "similarity_boost": similarity_boost
            }
        }
        return (await instance.post(url, data, { headers: this.headers, responseType: 'arraybuffer', })).data;
    }
}