Orbital Advantage, Single Source of Truth (SSOT)
"See the World from 30,000 feet. Understand it from one."

Orbital Advantage is a live global intelligence interface. A single source of truth for the modern human. It combines a map based UI with a unified world event feed and an agentic local model to cross reference everything into one. 

Overview:
Information is broken. News is fragmented. Social media is far too noisy. Markets move without warning. Events happen in isolation. Yet every piece is a connected.

Orbital Advantage will give users contextual awareness across each and every domain:
- Geopolitics
- Business & Markets
- Social Media Trends
- Sports
- Cultural Shifts
- Enviornmental Events
- Tech Breakthroughts
- More to come...

It builds a map of reality powered by live data, global event clustering, and an intelligence layer you can actually talk to. 

Project Status: MVP v1 in production

Features:
- MAP-BASED UI
    - Interactive globe powered by MapLibre + OpenStreetMap
    - Plot real-time events based on geo-coordinates
    - Category filters (news, social, sports, business, etc)
    - Heatmap overlay to show density and impact

- Local AI Agent
    - Runs on Ollama with open-source LLMs
    - Allows user to chat with their map. Ex:
        - "What's happening in East Asia today?"
        - "What does this protest mean for European energy firms?"
        - "Which events are connected to this crypto dip?"

- Real-Time Event Stream
    - Free tier APIs + web scraping
    - Geo-tagged stories, tweets, Reddit threads, and RSS feeds
    - Normalized event schma stored locally (JSON or SQLite)

- ARCHITECTURE:
┌───────────────────┐        HTTP/JSON         ┌─────────────────────┐
│   Next.js Frontend │  <———————————————>     │ Node/Express Backend│
│       (Map UI)     │                        │ (API routes)        │
└─────────▲──────────┘                        └─────────▲───────────┘
          │  fetch events                              │
          │                                           │
          │                                 read JSON event store
          │                                           │
          │                                   query LLM via Ollama
          │                                           │
┌─────────┴───────────┐                   ┌───────────┴──────────┐
│  Local JSON/SQLite  │ ◄───────────────► │   Ollama (Mistral)    │
│ (events, metadata)  │                   │   + LangChain prompt  │
└─────────────────────┘                   └───────────────────────┘

Tech Stack: 
- Frontend: Next.js, MapLibre, Tailwind
- Backend: Node.js, Express
- AI: Ollama + LangChain (local inference)
- Data Store: JSON or SQLite (local MVP)
- Data Sources:
    - Newdata.io (free tier)
    - RSS feeds
    - Unofficial X or Reddit scraping
    - Nominatim (OpenStreetMap geocoding)

Future Plans: 
- Live markets + AI-driven sentiment
- Predictive event modeling
- Semantic search + memory timeline
- Custom dashboards for traders, journalists, and founders
- Decentralized sync layer for offline-first operation
- Autonomous signal alerts + agents

Purpose:
Orbital Advantage is built to democratize intelligence. To give anyone, not just analysts, founders, or traders, a way to understand the world without drowning in noise. 
This isn't just the news, but instead it's synthetic situational awareness.

SINGLE DEV: Patrick Sullivan (2025)