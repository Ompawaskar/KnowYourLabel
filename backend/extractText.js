import 'dotenv/config';

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { createWorker } from 'tesseract.js';

async function main() {
    console.log(process.env.GOOGLE_API_KEY);
    const worker = await createWorker('eng');
    const ret = await worker.recognize('lays3.jpg');
    const text = ret.data.text;
    await worker.terminate();

    const model = new ChatGoogleGenerativeAI({
        modelName: "gemini-1.5-flash",
        maxOutputTokens: 2048,
    });

    const prompt = "I will provide you with a string of extracted text from a label of a food item containing the information about nutritional value and food ingredients and additives. I want you to return the names of food ingredients, additives in an array. It should strictly be in array format for example this: ['Iodised salt', 'Firming agent']";

    const messages = [
        new SystemMessage(prompt),
        new HumanMessage(text),
    ];

    const parser = new StringOutputParser();

    try {
        const result = await model.invoke(messages);
        const res = await parser.invoke(result);
        console.log(res);
    } catch (err) {
        console.error("Error: ", err);
    }
}

main();
