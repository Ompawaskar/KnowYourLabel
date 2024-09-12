import { AImodel, fileToGenerativePart } from './gemini.js'
import fs from 'fs'

export const imageToData = async () => {

    const prompt = `
        You are an AI assistant specialized in extracting and classifying nutrients and food ingredients based on the image of a food label. I am providing an image of a food label that contains nutritional information. 

        ### Task:
        1. Thoroughly analyze the food label image provided.
        2. Extract the following data in the correct units per 100g:
            - Energy: energy in kilojoules (kJ)
            - Sugars: sugar content in grams (g)
            - Saturated Fats: saturated fat content in grams (g)
            - Sodium: sodium content in milligrams (mg)
            - Fruits, Vegetables, Nuts Percentage: percentage (%) of fruits, vegetables, or nuts in the product.
            - Fiber: fiber content in grams (g)
            - Protein: protein content in grams (g)

        ### Requirements:
        - Text Extraction from the Image: Ensure accurate and comprehensive text extraction of the nutritional information.
        - Units: Provide all values using the specified units (e.g., energy in kJ, sodium in mg).
        - Missing Data: If the food label does not provide any of the requested information, return 'null' for that value.
        
        ### Output:
        Return the extracted data in the following JSON format:

        {
        "energy": "",         // kJ per 100g
        "sugars": "",         // g per 100g
        "saturatedFats": "",  // g per 100g
        "sodium": "",         // mg per 100g
        "fiber": "",          // g per 100g
        "protein": "",        // g per 100g
        "fruits": ""          // percentage (%)
        }

        Ensure that the analysis strictly adheres to this format, with accurate extraction of the data from the image.
`;

    const imagePart = fileToGenerativePart(
        Buffer.from(fs.readFileSync("lays3.jpg")).toString("base64"),
        "image/jpeg",
    );

    try {
        const result = await AImodel.generateContent([prompt, imagePart]);

        const AI_response = result.response.text();

        const first_index = AI_response.indexOf('{')
        const last_index = AI_response.lastIndexOf('}')

        const AI_json = AI_response.slice(first_index, last_index + 1)

        console.log(AI_json)
        return AI_json;
    } catch (error) {
        console.log("Error ", error);
    }

}

