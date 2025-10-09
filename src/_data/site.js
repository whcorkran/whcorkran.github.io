export default {
  name: "Henry Corkran",
  year: new Date().getFullYear(),

  bio: {
    p1: `Hello!  I am a software engineer working on an MS at UPenn. I was a trader and derivatives analyst on Wall Street for several years before moving to tech after becoming enamored with the ongoing revolution in deep learning and the monumental systems powering it.`,
    p2: `I have experience building a diverse set of software, including real-time financial analysis systems, databases, web crawlers, and fullstack apps.`,
    p3: `ML is now my primary focus, and I've designed and implemented deep models for fields ranging from biology to board games.`,
  },

  cv: {
    smbc: {
      title: "SMBC Capital Markets - Trading Analyst",
      items: [
        "Began as a junior trader at one of the world's largest banks and found a passion for software development and data science.",
        "Built dozens of tools and automations with Python, C++ and SQL to integrate the firm's databases and valuation systems and speed up the pricing, execution, and booking of trades."
      ]
    },
    rosenblatt: {
      title: "Rosenblatt Securities - Equity Research Intern",
      items: [
        "Conducted research for a combined universe of 40+ stocks in semiconductor, fintech, and digital asset sectors."
      ]
    },
    groupone: {
      title: "Group One Trading - Options Trading Intern",
      items: [
        "Trained in trading and options theory at a leading market-makers in exchange-listed derivatives."
      ]
    }
  },

  projects: {
    deepothello: {
      title: "DeepOthello - AlphaGo for Othello",
      items: [
        "AI board game opponent powered by neural net architecture inspired by DeepMind's AlphaGo and AlphaZero.",
        "Trained in PyTorch, game logic and interface written in Java."
      ]
    },
    proteinforge: {
      title: "Protein Forge",
      items: [
        "A novel softmax-based pseudo-alignment model for predicting how multiple 3D protein structures chain",
        "Incorporates feature engineering into existing protein foundation models to reduce time on MSTA search tasks by several orders of magnitude versus classical techinques",
        "Interpolated functional JAX training scripts to more performant PyTorch variants"
      ]
    },
    defense: {
      title: "European Defense NLP Research Database",
      items: [
        "Web crawling pipeline built for a Penn professor's research to extract and organize reports on the Russo-Ukrainian war from top European defense think tanks.  Utilized MongoDB, python, and LLM tooling in the pipeline."
      ]
    }
  }
};
