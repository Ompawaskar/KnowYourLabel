import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import 'dotenv/config'
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-flash",
    maxOutputTokens: 2048,
});

const ingredients = [
    "Potatoes",
    "Vegetable Oil",
    "Sunflower",
    "Corn",
    "Canola Oil",
    "BLT Seasoning",
    "Maltodextrin",
    "Salt",
    "Sour Cream",
    "Cultured Cream",
    "Skim Milk",
    "Sugar",
    "Tomato Powder",
    "Natural Flavors",
    "Natural Bacon Type Flavor",
    "Natural Lettuce Type Flavor",
    "Spices",
    "Dextrose",
    "Whey",
    "Medium Chain Triglycerides",
    "Brown Sugar",
    "Paprika Extracts"
  ]

const systemTemplate = "A person has the following allergies {allergies} and diseases {diseases}. Should he eat a food having following ingredients. The response should strictly with either 'yes' or 'no'. I also want an key value pair for allergens and diseases. For example allergy:[milk: [whey,soy milk]] , diseases:[[diabetes: sugar]]";

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{ingredients}"],
]);

const parser = new StringOutputParser();
const chain = promptTemplate.pipe(model).pipe(parser);

const ans = await chain.invoke({ allergies: "milk", diseases: "diabetes", ingredients: ingredients });
console.log(ans);
