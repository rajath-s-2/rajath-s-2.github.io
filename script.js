const projects = [
  {
    title: "Agentic AI Portfolio Advisor",
    category: "agentic ai",
    filter: "agentic-ai",
    year: "Summer 2026",
    description:
      "Building a multi-agent investment decision-support platform with LangGraph-ready orchestration, document import, valuation workflows, and news / earnings-call parsing agents that produce citation-backed monthly recommendations.",
    tags: ["Agentic AI", "LangGraph", "Investment research"],
    note: "In progress",
  },
  {
    title: "Factor Model Replication and GRS Testing",
    category: "research",
    year: "Fall 2025",
    description:
      "Replicated Fama-French five-factor tables and an AQR-style six-factor model with HML-DEV and momentum, then applied GRS tests to 25 size/book-to-market portfolios and 10 industry portfolios.",
    tags: ["FF5", "HML-DEV", "GRS test"],
    link: "https://github.com/rajath-s-2/factor-model-replication-grs",
    linkLabel: "View project",
  },
  {
    title: "Salesforce Equity Valuation",
    category: "valuation",
    year: "Fall 2025",
    description:
      "Built a Salesforce valuation workbook using CAPM, multi-stage dividend discount modeling, WACC, FCFF, FCFE, relative valuation, and sensitivity tables for terminal growth and discount rates.",
    tags: ["DCF", "WACC", "sensitivity"],
    link: "https://github.com/rajath-s-2/salesforce-equity-valuation",
    linkLabel: "View project",
  },
  {
    title: "Currencies and International Stock Returns",
    category: "international finance",
    filter: "international-finance",
    year: "Fall 2025",
    description:
      "Case study on international equity allocation from a U.S. investor perspective, focusing on local-currency versus dollar returns, currency contribution to performance, developed and emerging market volatility, and cross-market correlations.",
    tags: ["FX risk", "global equities", "correlations"],
    note: "Case summary available on request",
  },
  {
    title: "Multi-Asset Portfolio Optimization",
    category: "risk",
    year: "Fall 2025",
    description:
      "Constructed a mean-variance allocation model across 13 asset classes and cash using expected real returns, volatilities, and a full correlation matrix; target output showed 5.50% expected real return, 7.69% volatility, and 0.59 Sharpe.",
    tags: ["Optimization", "asset allocation", "Sharpe 0.59"],
    link: "https://github.com/rajath-s-2/multi-asset-portfolio-optimization",
    linkLabel: "View project",
  },
  {
    title: "Fundamentals-Based Equity Screen",
    category: "trading",
    year: "Summer 2025",
    description:
      "Built a WRDS research notebook that screens Compustat quarterly fundamentals for sustained positive operating cash flow, valuation discipline, and YoY revenue/net-income growth, maps GVKEYs to CRSP PERMNOs, and backtests an equal-weighted portfolio against CRSP market returns.",
    tags: ["WRDS", "Compustat", "Sharpe 1.14"],
    link: "https://github.com/rajath-s-2/fundamentals-equity-screen",
    linkLabel: "View project",
  },
  {
    title: "Crypto Statistical Arbitrage System",
    category: "systems",
    year: "Fall 2025",
    description:
      "Implemented an Avellaneda and Lee-style statistical arbitrage system for cryptocurrency markets using PCA factor portfolios, OU residual modeling, S-score trading rules, dynamic top-40 universe selection, tests, logs, and generated backtest outputs over 8,760 hourly periods.",
    tags: ["Python", "PCA", "OU process"],
    link: "https://github.com/rajath-s-2/crypto-stat-arb-system",
    linkLabel: "View project",
  },
  {
    title: "Personal Consumption Expenditure Forecasting",
    category: "research",
    year: "Spring 2026",
    description:
      "Partnered with Fiserv to forecast PCE rate of change from macro and small business index features using OLS, ARMA, and heteroskedastic models, achieving 75%+ directional accuracy.",
    tags: ["Econometrics", "ARMA", "75%+ accuracy"],
    note: "Private capstone repository",
  },
  {
    title: "Credit Card Fraud Detection",
    category: "engineering",
    year: "Spring 2025",
    description:
      "Developed a machine learning pipeline for fraud detection with preprocessing, EDA, feature engineering, XGBoost, Logistic Regression, SVM, and a custom utility-based objective.",
    tags: ["XGBoost", "SVM", "utility objective"],
    note: "Details available on request",
  },
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => (project.filter || project.category) === filter);

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card" data-category="${project.category}">
          <div class="project-meta">
            <span>${project.category}</span>
            <span>${project.year}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          ${renderProjectAction(project)}
        </article>
      `
    )
    .join("");
}

function renderProjectAction(project) {
  if (!project.link) {
    return `<span class="project-note">${project.note || "Details available on request"}</span>`;
  }

  const label = project.linkLabel || "Open project";
  const shouldDownload = /\.(xlsx|csv|ipynb)$/i.test(project.link) || label.startsWith("Download");
  const target = /^https?:\/\//i.test(project.link) || /\.pdf$/i.test(project.link) ? ` target="_blank" rel="noopener"` : "";
  const download = shouldDownload ? " download" : "";

  return `<a href="${project.link}"${target}${download} aria-label="${label} for ${project.title}">${label}</a>`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();

const canvas = document.querySelector("#market-canvas");
const context = canvas.getContext("2d");
let frame = 0;

function drawMarketPanel() {
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);

  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#101820");
  gradient.addColorStop(1, "#182b36");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(255, 255, 255, 0.08)";
  context.lineWidth = 1;
  for (let x = 48; x < width; x += 72) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 48; y < height; y += 58) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  drawSeries("#89d5cc", 0, 42, 0.018);
  drawSeries("#f2b84b", 24, 26, 0.026);
  drawBars();

  context.fillStyle = "rgba(255, 255, 255, 0.72)";
  context.font = "700 16px Inter, system-ui, sans-serif";
  context.fillText("Research signals and market structure", 28, 34);

  frame += 1;
  window.requestAnimationFrame(drawMarketPanel);
}

function drawSeries(color, phase, amplitude, speed) {
  const width = canvas.width;
  const height = canvas.height;
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 3;

  for (let i = 0; i <= width; i += 8) {
    const trend = height * 0.64 - i * 0.22;
    const wave = Math.sin(i * 0.025 + frame * speed + phase) * amplitude;
    const noise = Math.cos(i * 0.061 + frame * speed * 0.7) * 12;
    const y = trend + wave + noise;
    if (i === 0) {
      context.moveTo(i, y);
    } else {
      context.lineTo(i, y);
    }
  }
  context.stroke();
}

function drawBars() {
  const baseY = canvas.height - 34;
  for (let i = 0; i < 32; i += 1) {
    const x = 28 + i * 21;
    const height = 18 + Math.abs(Math.sin(i * 0.7 + frame * 0.018)) * 56;
    context.fillStyle = i % 3 === 0 ? "rgba(166, 66, 58, 0.72)" : "rgba(37, 99, 235, 0.48)";
    context.fillRect(x, baseY - height, 11, height);
  }
}

drawMarketPanel();
