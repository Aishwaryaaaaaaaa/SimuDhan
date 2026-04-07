const QS=[
  {type:"Knowledge",q:"What does the Nifty 50 represent?",opts:["The 50 richest people in India","An index of India's 50 largest listed companies","The top 50 mutual funds in India","The 50 stocks that rose most this year"],c:1,ex:"The Nifty 50 is a stock market index of India's 50 largest listed companies by free-float market cap. When people say 'the market is up today', they usually mean Nifty is up."},
  {type:"Ethics",q:"Your cousin tells you their pharma company is about to announce a major drug approval. Should you buy the stock before the news?",sc:"The stock is at Rs 450. You think it could jump to Rs 600 once the announcement is public.",opts:["Yes — it's just family sharing info","No — this is insider trading and illegal","Yes, but only a small amount","Ask your cousin to buy it instead"],c:1,ex:"Using non-public information to trade is called insider trading. It's illegal under SEBI regulations regardless of how you got the info — even casually over dinner."},
  {type:"True or False",q:"A high P/E ratio always means a stock is overpriced and you should avoid it.",opts:["True — high P/E always means overpriced","False — P/E must be understood in context"],c:1,ex:"False. A high P/E means investors expect strong future growth. Always compare P/E to the company's growth rate and sector peers — never in isolation."},
  {type:"Scenario",q:"You bought TCS at Rs 3,600. Today it fell 3% after missing earnings estimates. What is the most rational response?",sc:"TCS reported less revenue than expected. Your friend says sell before it falls more.",opts:["Sell immediately to cut losses","Panic and sell your whole portfolio","Research why it fell then decide based on long-term outlook","Buy more because it is cheaper now"],c:2,ex:"Understand before you act. One earnings miss does not mean a company is finished. Panic selling on short-term moves is one of the most common and costly investor mistakes."},
  {type:"Knowledge",q:"What does SEBI do?",opts:["Manages stock prices daily","Regulates capital markets and protects investors","Handles mutual fund investments","Sets India's interest rates"],c:1,ex:"SEBI is the Securities and Exchange Board of India. It regulates capital markets, investigates fraud and insider trading, and protects retail investors. The RBI handles banks — SEBI handles markets."},
  {type:"Ethics",q:"An influencer posts that a small-cap stock will 10x guaranteed. The stock already rose 40% before the post. What is likely happening?",sc:"After the post, thousands of followers buy in and the stock jumps another 20% in one day.",opts:["The influencer found a great investment","This is likely a pump and dump scheme","The stock is genuinely undervalued","Normal market behaviour"],c:1,ex:"This is a classic pump and dump. Someone buys cheap, hypes it to drive the price up, then sells at the peak leaving followers with a crashing stock. Illegal under SEBI regulations."}
];

let cur=0,score=0,done=false;

function init(){
  cur=0;score=0;done=false;
  document.getElementById('result').style.display='none';
  document.getElementById('fill').style.width='0%';
  document.getElementById('qscore').textContent='Score: 0';
  render();
}

function render(){
  if(cur>=QS.length){showResult();return}
  const q=QS[cur];
  done=false;
  document.getElementById('counter').textContent='Question '+(cur+1)+' of '+QS.length;
  document.getElementById('qtype').textContent=q.type;
  document.getElementById('fill').style.width=((cur/QS.length)*100)+'%';
  const L=['A','B','C','D'];
  let opts='';
  for(let i=0;i<q.opts.length;i++){
    opts+='<button class="opt" id="o'+i+'" onclick="pick('+i+')">';
    opts+='<div class="opt-letter">'+L[i]+'</div>';
    opts+='<div class="opt-text">'+q.opts[i]+'</div></button>';
  }
  let html='<div class="qcard">';
  if(q.sc) html+='<div class="scenario">'+q.sc+'</div>';
  html+='<div class="question">'+q.q+'</div>';
  html+='<div class="options">'+opts+'</div>';
  html+='<div class="explain" id="ex"><div class="explain-label">Explanation</div><div class="explain-text">'+q.ex+'</div></div>';
  html+='</div><div class="quiz-footer"><span class="hint" id="hint">Select an answer to continue</span>';
  html+='<button class="btn-next" id="nxt" onclick="next()">'+(cur===QS.length-1?'See results':'Next question')+'</button></div>';
  document.getElementById('qzone').innerHTML=html;
}

function pick(i){
  if(done) return;
  done=true;
  const q=QS[cur];
  for(let j=0;j<q.opts.length;j++) document.getElementById('o'+j).setAttribute('disabled','true');
  const hint=document.getElementById('hint');
  if(i===q.c){
    document.getElementById('o'+i).classList.add('correct');
    score++;
    hint.textContent='Correct!';
    hint.className='hint correct';
    document.getElementById('qscore').textContent='Score: '+score;
  } else {
    document.getElementById('o'+i).classList.add('wrong');
    document.getElementById('o'+q.c).classList.add('correct');
    hint.textContent='Not quite — see the explanation below';
    hint.className='hint wrong';
  }
  document.getElementById('ex').classList.add('show');
  document.getElementById('nxt').classList.add('show');
}

function next(){cur++;render()}

function showResult(){
  document.getElementById('qzone').innerHTML='';
  document.getElementById('fill').style.width='100%';
  const pct=Math.round(score/QS.length*100);
  const labels=['Keep going — every expert started here!','Good start — Zara can fill the gaps.','Solid — you know more than most teens.','Great work — you think like an investor.','Outstanding — almost ready to trade!','Perfect score — you belong on the leaderboard!'];
  document.getElementById('rscore').textContent=score+'/'+QS.length;
  document.getElementById('rlabel').textContent=labels[score];
  document.getElementById('rc').textContent=score;
  document.getElementById('rw').textContent=QS.length-score;
  document.getElementById('rp').textContent=pct+'%';
  document.getElementById('result').style.display='block';
}

const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
init();