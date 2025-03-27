# Portfolio Website

Welcome to my personal portfolio website! This site highlights my skills and projects as a data enthusiast, AI enthusiast, and web developer. It features interactive sections with cool animations and a chatbot powered by LangChain for AI integration.

## Tech Stack

- **Frontend**: Next.js, TypeScript (TSX), TailwindCSS
- **AI Integration**: LangGraph (LangChain OpenAI for chatbot)
- **Features**:
  - Landing section showcasing my expertise
  - Interactive animations
  - Floating chatbot button for AI-driven interactions (session-based)

## Features

- **Landing Section**: The homepage features a dynamic and engaging introduction to my skillset in web development, AI, and data science.
- **Animated UI**: I used TailwindCSS to style the page with sleek animations to create an interactive user experience.
- **Chatbot**: A floating button activates the AI chatbot, which is powered by LangChain and provides quick, interactive responses based on session-based data.
- **Responsive Design**: The website is fully responsive and optimized for both desktop and mobile devices.

## Installation

To run this project locally, follow the steps below:

### FastAPI Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsha107/harsha-portfolio.git

2. Install Python Virtual environment (not necessary, but recommended):
   ```bash
   python -m venv your-environment-name

3. Run the environment:
   ```bash
   .\your-environment-name\Scripts\Activate

4. Install the packages from requirements.txt file:
   ```bash
   pip install -r requirements.txt

5. Run the uvicorn server:
   ```bash
   uvicorn app.api.main:app --reload

### Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsha107/harsha-portfolio.git

2. Install the necessary dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev
