const MOCK_CONTENT = {
  portfolio: `
    <div class="mock-stats">
      <div class="ms"><div class="ms-l">Portfolio</div><div class="ms-v">₹1,08,420</div><div class="ms-c up">+8.42% total</div></div>
      <div class="ms"><div class="ms-l">Cash</div><div class="ms-v">₹42,180</div><div class="ms-c">available</div></div>
      <div class="ms"><div class="ms-l">Today</div><div class="ms-v">+₹1,240</div><div class="ms-c up">4 holdings</div></div>
      <div class="ms"><div class="ms-l">Streak</div><div class="ms-v">7 days</div><div class="ms-c">Level 5</div></div>
    </div>
    <div class="mock-row"><div><div class="mock-stock-name">Reliance Industries</div><div class="mock-stock-sub">RELIANCE · Energy</div></div><div class="mock-price">₹2,847</div><span class="chg-up">+1.2%</span><span class="why-tag">—</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">Tata Consultancy</div><div class="mock-stock-sub">TCS · IT</div></div><div class="mock-price">₹3,542</div><span class="chg-dn">-2.8%</span><span class="why-tag">Why it fell</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">HDFC Bank</div><div class="mock-stock-sub">HDFCBANK · Banking</div></div><div class="mock-price">₹1,712</div><span class="chg-up">+0.8%</span><span class="why-tag">—</span></div>
  `,
  markets: `
    <div class="mock-stats">
      <div class="ms"><div class="ms-l">Nifty 50</div><div class="ms-v">24,218</div><div class="ms-c up">+0.84%</div></div>
      <div class="ms"><div class="ms-l">Sensex</div><div class="ms-v">79,943</div><div class="ms-c up">+0.77%</div></div>
      <div class="ms"><div class="ms-l">India VIX</div><div class="ms-v">13.42</div><div class="ms-c">calm</div></div>
      <div class="ms"><div class="ms-l">USD/INR</div><div class="ms-v">84.32</div><div class="ms-c">+0.14%</div></div>
    </div>
    <div class="mock-row"><div><div class="mock-stock-name">Reliance Industries</div><div class="mock-stock-sub">RELIANCE · Energy</div></div><div class="mock-price">₹2,847</div><span class="chg-up">+1.2%</span><span class="why-tag">Why it rose</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">Tata Consultancy</div><div class="mock-stock-sub">TCS · IT</div></div><div class="mock-price">₹3,542</div><span class="chg-dn">-2.8%</span><span class="why-tag">Why it fell</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">Tata Motors</div><div class="mock-stock-sub">TATAMOTORS · Auto</div></div><div class="mock-price">₹924</div><span class="chg-up">+2.1%</span><span class="why-tag">Why it rose</span></div>
  `,
  news: `
    <div class="news-item"><div class="news-tag">Results</div><div class="news-headline">TCS Q3: Revenue misses estimates by ₹1,027 crore — stock falls 2.8%</div><div class="news-meta">ET Markets · 2h ago</div></div>
    <div class="news-item"><div class="news-tag">RBI</div><div class="news-headline">RBI holds repo rate at 6.5% — signals February cut if inflation cools</div><div class="news-meta">Mint · 4h ago</div></div>
    <div class="news-item"><div class="news-tag">FII</div><div class="news-headline">FIIs net sell ₹4,200 crore — DIIs absorb with ₹3,800 crore buying</div><div class="news-meta">CNBC TV18 · 6h ago</div></div>
    <div class="news-item"><div class="news-tag">IPO</div><div class="news-headline">HDB Financial Services IPO subscribed 16.3x on final day</div><div class="news-meta">Moneycontrol · 8h ago</div></div>
  `,
  discover: `
    <div class="fact-item"><div class="fact-label">Fact of the day</div><div class="fact-text">The BSE, founded in 1875 under a banyan tree in Mumbai, is Asia's oldest stock exchange. It now lists over 5,500 companies.</div><div class="fact-source">Source: BSE India</div></div>
    <div class="fact-item"><div class="fact-label">Did you know?</div><div class="fact-text">₹1 lakh invested in Nifty 50 at its 1996 launch would be worth over ₹25 lakh today — a 25x return without picking a single stock.</div><div class="fact-source">Source: NSE India</div></div>
    <div class="fact-item"><div class="fact-label">Investor wisdom</div><div class="fact-text">Warren Buffett bought his first stock at age 11. He says his biggest mistake was waiting that long.</div><div class="fact-source">Source: Berkshire Hathaway</div></div>
  `,
  zara: `
    <div class="chat-wrap">
      <div class="chat-msg bot"><div class="chat-av">Z</div><div class="chat-bubble">Hi! I'm Zara. Ask me anything about markets, your portfolio, or any term you don't understand!</div></div>
      <div class="chat-msg user"><div class="chat-bubble">Why did TCS fall today?</div><div class="chat-av">R</div></div>
      <div class="chat-msg bot"><div class="chat-av">Z</div><div class="chat-bubble">TCS fell 2.8% because it missed revenue estimates by ₹1,027 crore — this is called an <span class="chat-term">earnings miss</span>. FIIs sold ₹2,100 crore of TCS shares on the day.</div></div>
      <div class="chat-msg user"><div class="chat-bubble">What is FII?</div><div class="chat-av">R</div></div>
      <div class="chat-msg bot"><div class="chat-av">Z</div><div class="chat-bubble">FII stands for Foreign Institutional Investor — large overseas funds that invest in Indian markets. When they sell heavily, it can drag the whole market down!</div></div>
    </div>
    <div class="chat-input-bar"><div class="chat-input-text">Ask Zara anything...</div><div class="chat-send">↑</div></div>
  `
};

function switchTab(tab, el) {
  document.querySelectorAll('.mt').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('mock-content').innerHTML = MOCK_CONTENT[tab];
}

function joinWaitlist() {
  const email = document.getElementById('emailInput').value.trim();
  if (!email || !email.includes('@')) return;
  document.getElementById('emailInput').value = '';
  document.getElementById('success').classList.add('show');
  const count = document.getElementById('count');
  count.textContent = parseInt(count.textContent) + 1;
}

function ctaJoin() {
  const email = document.getElementById('ctaEmail').value.trim();
  if (!email || !email.includes('@')) return;
  document.getElementById('ctaEmail').value = '';
  document.getElementById('ctaNote').textContent = "You're on the list!";
  const count = document.getElementById('count');
  count.textContent = parseInt(count.textContent) + 1;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

document.getElementById('mock-content').innerHTML = MOCK_CONTENT.portfolio;