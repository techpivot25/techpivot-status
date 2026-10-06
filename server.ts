import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Multi-turn Gemini Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, role = 'assistant', model = 'gemini-3.5-flash' } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Role-specific system instructions
    let systemInstruction = "You are TechPivot's dedicated AI Assistant. You are an expert enterprise technology, AI-native transformation, and engineering advisor. Provide structured, authoritative, and actionable answers to users about modern cloud architecture, autonomous AI agents, enterprise modernization, and TechPivot's consulting capabilities. Keep responses articulate, clear, and well-structured.";
    
    if (role === 'architect') {
      systemInstruction = "You are TechPivot's Principal Enterprise Solutions Architect. You give deep technical architectural recommendations regarding event-driven microservices, LLM orchestration, vector databases, deterministic guardrails, and enterprise security.";
    } else if (role === 'consultant') {
      systemInstruction = "You are TechPivot's Senior Management Consultant. You guide C-suite leaders on AI maturity, organizational change management, GCC modernization, cost reduction, and engineering delivery velocity.";
    } else if (role === 'coder') {
      systemInstruction = "You are TechPivot's Lead Automation & Systems Engineer. You specialize in code architecture, CI/CD pipeline modernization, automated testing (TestCraft), agentic developer toolchains, and DevOps automation.";
    }

    // Format conversation history for @google/genai
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    // Choose model based on task complexity
    let selectedModel = 'gemini-3.5-flash';
    if (model === 'gemini-3.1-pro-preview') {
      selectedModel = 'gemini-3.1-pro-preview';
    } else if (model === 'gemini-3.1-flash-lite') {
      selectedModel = 'gemini-3.1-flash-lite';
    }

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || 'I apologize, but I could not formulate a response at this moment.';
    res.json({ reply, role: 'model', model: selectedModel });
  } catch (error: any) {
    console.error('Server Gemini Chat error:', error);
    res.status(500).json({ 
      error: error.message || 'An error occurred while communicating with Gemini.' 
    });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
