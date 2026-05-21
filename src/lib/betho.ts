import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const BETHO_MODEL = "claude-sonnet-4-20250514";

export const BETHO_DEFAULT_SYSTEM = `Eres Betho, el asistente de inteligencia artificial de Kryphor Labs.
Eres amigable, profesional y conciso. Ayudas a los usuarios con preguntas sobre Kryphor Labs y sus productos.`;
