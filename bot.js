const core = require('@actions/core');
const github = require('@actions/github');
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function run() {
  try {
    if (context.eventName === 'workflow_dispatch') {
        console.log("Mode Tes Manual aktif. Tidak ada issue, tapi bot siap bekerja!");
        return; // Berhenti dengan sopan tanpa error
    }

    const rawData = process.env.MODEL_CHANGER_RAW;
    if (!rawData) throw new Error("Secret MODEL_CHANGER tidak ditemukan!");

    // --- LOGIKA PARSING (Pembedah Secret) ---
    // Mencari teks di dalam tanda kutip tunggal ('...')
    const matches = rawData.match(/'([^']+)'/g);
    
    if (!matches || matches.length < 2) {
      throw new Error("Format MODEL_CHANGER salah! Pastikan ada 'nama_model' dan 'api_key'.");
    }

    // Bersihkan tanda kutipnya
    const selectedModel = matches[0].replace(/'/g, "");
    const apiKey = matches[1].replace(/'/g, "");

    console.log(`Menggunakan Model: ${selectedModel}`);
    // ----------------------------------------

    const githubToken = process.env.GITHUB_TOKEN;
    const octokit = github.getOctokit(githubToken);
    const context = github.context;

    if (context.eventName !== 'issues') return;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: selectedModel });

    const prompt = `Jawab issue berikut: ${context.payload.issue.title}\n${context.payload.issue.body}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.payload.issue.number,
      body: `**[Pilot AI - Model: ${selectedModel}]**\n\n${responseText}`
    });

    console.log("Respon berhasil dikirim!");

  } catch (error) {
    core.setFailed(`Error: ${error.message}`);
  }
}

run();
