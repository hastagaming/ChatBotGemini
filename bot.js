const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Octokit } = require("@octokit/rest");

// Langsung ambil dari sistem (Tanpa dotenv)
const apiKey = process.env.GEMINI_API_KEY;
const token = process.env.GITHUB_TOKEN;

if (!apiKey || !token) {
  console.error("Error: GEMINI_API_KEY atau GITHUB_TOKEN belum diatur!");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const octokit = new Octokit({ auth: token });

async function run() {
  // Membaca event dari GitHub Actions
  const fs = require('fs');
  const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  const issue = event.issue;

  const model = genAI.getGenerativeModel({ model: "gemini-3.1-pro-preview" });
  const prompt = `Analisis issue ini dan berikan saran solusi singkat: "${issue.title} - ${issue.body}"`;
  
  const result = await model.generateContent(prompt);
  
  await octokit.issues.createComment({
    owner: event.repository.owner.login,
    repo: event.repository.name,
    issue_number: issue.number,
    body: `🤖 **ChatBotGemini:**\n\n${result.response.text()}`,
  });
}

run();
