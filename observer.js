// AmpAgent Observer for browser
class AmpAgentObserver {
  constructor() {
    this.logs = [];
    this.logOutput = document.getElementById("logOutput");
  }

  logAction({ type, target, result }) {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, type, target, result };
    this.logs.push(logEntry);
    this.updateDisplay();
  }

  updateDisplay() {
    this.logOutput.textContent = this.logs.map(log =>
      `[${log.timestamp}] ${log.type} | ${log.target} | ${log.result}`
    ).join("\n");
  }

  simulateActions() {
    this.logAction({ type: "NewsScan", target: "$AMP Mentions", result: "5 hot trends flagged" });
    this.logAction({ type: "CommunityCheck", target: "X feed", result: "Detected hype spike" });
    this.logAction({ type: "AlertDispatch", target: "Telegram", result: "Price alert sent" });
    this.logAction({ type: "ContentSuggestion", target: "Twitter", result: "Suggested meme posted" });
  }
}

const observer = new AmpAgentObserver();
document.getElementById("simulateBtn").addEventListener("click", () => observer.simulateActions());
