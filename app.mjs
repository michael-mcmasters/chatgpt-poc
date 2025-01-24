import OpenAI from "openai";

console.log("running");

const openai = new OpenAI({
    apiKey: "",
});

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "developer",
            content: "You sell high-end cars at a lot by the beach" },
        {
            role: "user",
            content: "What's the slowest vehicle you have?",
        },
    ],
    store: true,
});

console.log(completion.choices[0].message);