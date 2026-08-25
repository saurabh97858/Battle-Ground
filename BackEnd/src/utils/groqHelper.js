/**
 * Centralized Groq API helper
 * Wraps all LLM calls with proper error handling + 429 rate limit detection.
 */

import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
});

// ──────────────────────────────────────────────────────────────────────────────

const SIMULATE_RATE_LIMIT = false;
// Set to `true`, restart server, then try any AI feature → you'll get the 429 UI
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Call the Groq LLM with the given messages.
 * 
 * @param {Array<{role: string, content: string}>} messages - OpenAI-format messages
 * @param {object} opts
 * @param {string}  [opts.model=process.env.GROQ_MODEL || 'llama-3.1-8b-instant']
 * @param {number}  [opts.maxTokens=1024]
 * @param {number}  [opts.temperature=0.7]
 * @returns {Promise<string>} - The assistant's reply text
 * @throws {object} - Throws with { status: 429 } on rate limit
 */
export async function callGroq(messages, opts = {}) {
    const candidateModels = [
        process.env.GROQ_MODEL,
        'llama-3.3-70b-versatile',
        'llama3-8b-8192',
        'mixtral-8x7b-32768',
        'gemma2-9b-it'
    ].filter(Boolean);

    const {
        maxTokens = 1024,
        temperature = 0.7,
    } = opts;

    if (SIMULATE_RATE_LIMIT) {
        const err = new Error('Simulated 429 rate limit');
        err.status = 429;
        throw err;
    }

    let lastError = null;
    for (const model of candidateModels) {
        try {
            const completion = await openai.chat.completions.create({
                model,
                messages,
                max_tokens: maxTokens,
                temperature,
            });

            const reply = completion.choices[0]?.message?.content;
            if (reply) {
                if (completion.usage) {
                    console.log(`✅ Groq model [${model}] usage: prompt=${completion.usage.prompt_tokens} completion=${completion.usage.completion_tokens}`);
                }
                return reply;
            }
        } catch (error) {
            lastError = error;
            console.warn(`⚠️ Groq model [${model}] failed: ${error?.message || error}. Trying next model...`);
            if (error?.status === 429) {
                const rateLimitErr = new Error('Rate limit exceeded. Please wait a moment and try again.');
                rateLimitErr.status = 429;
                throw rateLimitErr;
            }
        }
    }

    // Fallback response if all models fail
    console.error("All Groq models failed. Returning DSA mentor fallback response.");
    return "I am your BattleGround Revision Mentor! Let's revise your DSA concepts step-by-step. What specific Data Structure or Algorithm question do you want to break down?";
}
