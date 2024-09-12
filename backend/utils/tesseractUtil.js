import { createWorker } from 'tesseract.js';

export const extractText = async (img) => {
    try {
        const worker = await createWorker('eng');
        const ret = await worker.recognize('lays3.jpg');
        const text = ret.data.text;
        await worker.terminate();

        return text;
    } catch (error) {
        console.log("Error while extracting text:",error);    
    }
}