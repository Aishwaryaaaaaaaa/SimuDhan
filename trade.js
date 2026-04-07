const TABS={
  portfolio:`
    <div class="mock-stats">
      <div class="ms"><div class="ms-l">Portfolio</div><div class="ms-v">Rs 1,08,420</div><div class="ms-c up">+8.42% total</div></div>
      <div class="ms"><div class="ms-l">Cash</div><div class="ms-v">Rs 42,180</div><div class="ms-c">available</div></div>
      <div class="ms"><div class="ms-l">Today</div><div class="ms-v">+Rs 1,240</div><div class="ms-c up">4 holdings</div></div>
      <div class="ms"><div class="ms-l">Streak</div><div class="ms-v">7 days</div><div class="ms-c">Level 5</div></div>
    </div>
    <div class="mock-row"><div><div class="mock-stock-name">Reliance Industries</div><div class="mock-stock-sub">RELIANCE · Energy</div></div><div class="mock-price">Rs 2,847</div><span class="chg-up">+1.2%</span><span class="why-tag">—</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">Tata Consultancy</div><div class="mock-stock-sub">TCS · IT</div></div><div class="mock-price">Rs 3,542</div><span class="chg-dn">-2.8%</span><span class="why-tag">Why it fell</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">ITC Ltd</div><div class="mock-stock-sub">ITC · FMCG</div></div><div class="mock-price">Rs 428</div><span class="chg-dn">-0.5%</span><span class="why-tag">Why it fell</span></div>
  `,
  markets:`
    <div class="mock-stats">
      <div class="ms"><div class="ms-l">Nifty 50</div><div class="ms-v">24,218</div><div class="ms-c up">+0.84%</div></div>
      <div class="ms"><div class="ms-l">Sensex</div><div class="ms-v">79,943</div><div class="ms-c up">+0.77%</div></div>
      <div class="ms"><div class="ms-l">India VIX</div><div class="ms-v">13.42</div><div class="ms-c">calm</div></div>
      <div class="ms"><div class="ms-l">USD/INR</div><div class="ms-v">84.32</div><div class="ms-c">+0.14%</div></div>
    </div>
    <div class="mock-row"><div><div class="mock-stock-name">Reliance Industries</div><div class="mock-stock-sub">RELIANCE · Energy</div></div><div class="mock-price">Rs 2,847</div><span class="chg-up">+1.2%</span><span class="why-tag">Why it rose</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">Tata Consultancy</div><div class="mock-stock-sub">TCS · IT</div></div><div class="mock-price">Rs 3,542</div><span class="chg-dn">-2.8%</span><span class="why-tag">Why it fell</span></div>
    <div class="mock-row"><div><div class="mock-stock-name">Tata Motors</div><div class="mock-stock-sub">TATAMOTORS · Auto</div></div><div class="mock-price">Rs 924</div><span class="chg-up">+2.1%</span><span class="why-tag">Why it rose</span></div>
  `,
  news:`
    <div class="news-item"><div class="news-tag-pill">Results</div><div class="news-headline">TCS Q3: Revenue misses estimates by Rs 1,027 crore — stock falls 2.8%</div><div class="news-meta">ET Markets · 2h ago</div></div>
    <div class="news-item"><div class="news-tag-pill">RBI</div><div class="news-headline">RBI holds repo rate at 6.5% — signals February cut if inflation cools</div><div class="news-meta">Mint · 4h ago</div></div>
    <div class="news-item"><div class="news-tag-pill">FII</div><div class="news-headline">FIIs net sell Rs 4,200 crore — DIIs absorb with Rs 3,800 crore buying</div><div class="news-meta">CNBC TV18 · 6h ago</div></div>
    <div class="news-item"><div class="news-tag-pill">IPO</div><div class="news-headline">HDB Financial Services IPO subscribed 16.3x on final day</div><div class="news-meta">Moneycontrol · 8h ago</div></div>
  `,
  discover:`
    <div class="fact-item"><div class="fact-lbl">Fact of the day</div><div class="fact-txt">The BSE, founded in 1875 under a banyan tree in Mumbai, is Asia's oldest stock exchange. It now lists over 5,500 companies.</div><div class="fact-src">Source: BSE India</div></div>
    <div class="fact-item"><div class="fact-lbl">Did you know?</div><div class="fact-txt">Rs 1 lakh invested in Nifty 50 at its 1996 launch would be worth over Rs 25 lakh today — a 25x return without picking a single stock.</div><div class="fact-src">Source: NSE India</div></div>
    <div class="fact-item"><div class="fact-lbl">Investor wisdom</div><div class="fact-txt">Warren Buffett bought his first stock at age 11. He says his biggest mistake was waiting that long.</div><div class="fact-src">Source: Berkshire Hathaway</div></div>
  `,
  zara:`
    <div class="chat">
      <div class="msg bot"><div class="msg-av bot-av">Z</div><div class="msg-bubble bot-bubble">Hi! I'm Zara. Ask me anything about markets, your portfolio, or any term you don't understand!</div></div>
      <div class="msg user"><div class="msg-bubble user-bubble">Why did TCS fall today?</div><div class="msg-av user-av">R</div></div>
      <div class="msg bot"><div class="msg-av bot-av">Z</div><div class="msg-bubble bot-bubble">TCS fell 2.8% because it missed revenue estimates by Rs 1,027 crore — this is called an <span class="term">earnings miss</span>. FIIs sold Rs 2,100 crore of TCS shares on the day.</div></div>
      <div class="msg user"><div class="msg-bubble user-bubble">What is FII?</div><div class="msg-av user-av">R</div></div>
      <div class="msg bot"><div class="msg-av bot-av">Z</div><div class="msg-bubble bot-bubble">FII stands for Foreign Institutional Investor — large overseas funds that invest in Indian markets. When they sell heavily, it can drag the whole market down!</div></div>
    </div>
    <div class="chat-input-row"><div class="chat-input">Ask Zara anything...</div><div class="chat-send">↑</div></div>
  `
};

function switchTab(tab,el){
  document.querySelectorAll('.mt').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-content').innerHTML=TABS[tab];
}

document.getElementById('tab-content').innerHTML=TABS.portfolio;