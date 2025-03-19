# 🌙 DreamArchive
AI-powered dream journaling & analysis platform.

Decode your subconscious with AI-generated summaries, emotion tracking, and recurring theme detection.

## 🧠 Description
DreamArchive is an AI-driven dream journaling app designed to help users uncover hidden insights from their dreams.

It leverages RAG (Retrieval-Augmented Generation) pipelines with OpenAI embeddings and DeepSeek chat completions to analyze dreams, extract emotions, detect recurring symbols, and generate weekly summaries.

- AI-generated dream summaries
- Emotion trend visualizations
- Recurring theme and symbol detection
- Embeddings & similarity matching (RAG)
- Intuitive dashboard & clean UI
- Waitlist via email call-to-action
  
Join the waitlist 👉 [dreamarchive.vercel.app](dreamarchive.vercel.app)

## ⚙️ Tech Stack
Frontend
- Next.js (App Router)
- React & TypeScript
- Tailwind CSS
- Shadcn UI
- Magic UI
- Lucide Icons
- Chart.js (emotion trends graph + theme distribution donut chart)
  
Backend & APIs
- Supabase (database + auth)
- OpenAI API (text embeddings text-embedding-ada-002)
- DeepSeek Chat API (dream analysis & summaries)
- RAG (Retrieval-Augmented Generation)
- Embeddings stored in Supabase
- Cosine similarity calculated on embeddings
- Related dreams grouped and summarized via AI
- Next.js API Routes (RESTful endpoints)

## 🌐 API Endpoints

### 🛠️ Authentication

| Method | Endpoint             | Description                                                                |
| ------ | -------------------- | -------------------------------------------------------------------------- |
| `POST` | `/api/auth/signin`   | Sign in user with email and password. Returns user and session.            |
| `POST` | `/api/auth/signup`   | Sign up user with email, password, and username. Returns user and session. |

---

### 🌙 Dreams

| Method | Endpoint                      | Description                                                                                      |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| `GET`  | `/api/dreams?user_id=USER_ID` | Fetch all dreams belonging to the user.                                                          |
| `POST` | `/api/dreams`                 | Create a new dream. Analyzes themes and emotions, generates embeddings, and stores in the database. |

---

### ✨ Dream by ID

| Method   | Endpoint            | Description                                                        |
| -------- | ------------------- | ------------------------------------------------------------------ |
| `GET`    | `/api/dreams/[id]`  | Retrieve a specific dream by ID.                                   |
| `PUT`    | `/api/dreams/[id]`  | Update an existing dream by ID (title and description).            |
| `DELETE` | `/api/dreams/[id]`  | Delete a specific dream by ID.                                     |

---

### 📈 Weekly Dream Summary

| Method | Endpoint              | Description                                                                                                                                  |
| ------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST` | `/api/dreams/summary` | Generate a weekly summary for a user. Uses RAG (Retrieval-Augmented Generation) and cosine similarity to find dream patterns and summaries. |


## 🧠 How the AI Works
✅ Dream Storage
- User submits a dream (title + description).
- Runs analyzeDream() to extract:
  - Key themes
  - Emotion score (0 - 1 scale)
- Generates an embedding via OpenAI’s text-embedding-ada-002.
- Stores everything in Supabase.

✅ Weekly Summary RAG Pipeline
- Queries dreams from the past 7 days.
- Filters by user and timestamp.
- Compares embeddings using cosine similarity.
- Extracts related dreams with similarity > 0.8.
- Sends concatenated text of similar dreams to DeepSeek Chat for summary analysis.
  ```json
  {
    "summary": "Dreams focused on exploration and hidden mysteries.",
    "themes": ["Exploration", "Transformation"],
    "emotions": ["Curious", "Hopeful"],
    "recurring_symbols": ["Stairs", "Floating cities"]
  }
  ```
✅ Emotion Trends & Theme Distribution
- Aggregates emotion scores over time for graph display.
- Tracks recurring themes & symbols for donut chart.
