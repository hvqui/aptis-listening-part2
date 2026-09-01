/*

  AUDIO PATHS
  Put your real local audio paths here.
  Example:
    1: "file:///C:/AptisAudio/01-Protect-the-environment.mp3",
  or, if you run the page from a local folder, you can use:
    1: "audio/01.mp3"
  Local C:\ paths cannot be accessed by an Internet-deployed website.
*/
const AUDIO_PATHS = {
  1: "audio/01.mp3",
  2: "audio/02.mp3",
  3: "audio/03.mp3",
  4: "audio/04.mp3",
  5: "audio/05.mp3",
  6: "audio/06.mp3",
  7: "audio/07.mp3",
  8: "audio/08.mp3",
  9: "audio/09.mp3",
  10: "audio/10.mp3",
  11: "audio/11.mp3",
  12: "audio/12.mp3",
  13: "audio/13.mp3",
  14: "audio/14.mp3"
};

let index=0, attempts=0;
const answers=JSON.parse(localStorage.getItem("aptisV4Answers")||"{}");
const bookmarks=JSON.parse(localStorage.getItem("aptisV4Bookmarks")||"{}");
const audio=document.getElementById("audio");
audio.addEventListener("error", () => {
  if (audio.src) {
    document.getElementById("attempts").textContent =
      "Audio not found — check the audio folder and MP3 filename.";
  }
});

function esc(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function current(){return TOPICS[index]}
function choices(t){
  const own=new Set(t.speakers.map(s=>s.answer));
  const pool=TOPICS.flatMap(x=>x.speakers.map(s=>s.answer)).filter(x=>!own.has(x));
  const start=(t.id*7)%pool.length;
  return [...t.speakers.map(s=>s.answer),pool[start],pool[(start+13)%pool.length]];
}
function shuffle(a,seed){let x=[...a],s=seed>>>0;for(let i=x.length-1;i>0;i--){s=(s*1664525+1013904223)>>>0;let j=s%(i+1);[x[i],x[j]]=[x[j],x[i]]}return x}
function highlightText(text,terms){
  // Escape the transcript first, then highlight all KEY phrases in one pass.
  // A single regex avoids placeholder collisions such as @@KEY1@@ appearing
  // in the final transcript.
  let out = esc(text);
  const cleanTerms = [...new Set(terms.filter(Boolean))]
    .sort((a,b)=>b.length-a.length);

  if (!cleanTerms.length) return out;

  const escapedTerms = cleanTerms.map(term => {
    // Match the normal text after esc(), including HTML-escaped apostrophes.
    return esc(term).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  });

  const re = new RegExp(`(${escapedTerms.join("|")})`, "gi");
  return out.replace(re, '<span class="highlight">$1</span>');
}
function render(){
  const t=current();
  document.getElementById("counter").textContent=`Question ${t.id} of ${TOPICS.length}`;
  document.getElementById("title").textContent=t.title;
  document.getElementById("title2").textContent=t.title;
  attempts=0; document.getElementById("attempts").textContent="Play 2 times maximum";
  document.getElementById("play").disabled=false;
  document.getElementById("result").hidden=true;
  document.getElementById("training").hidden=true;
  audio.pause(); audio.currentTime=0; audio.src=AUDIO_PATHS[t.id]||"";
  const saved=answers[t.id]||{};
  const opts=shuffle(choices(t),t.id*991);
  const box=document.getElementById("speakers"); box.innerHTML="";
  t.speakers.forEach((s,i)=>{
    const row=document.createElement("div");row.className="speaker";
    const label=document.createElement("b");label.textContent=`Speaker ${s.speaker} ...`;
    const sel=document.createElement("select");
    sel.innerHTML='<option value="">Select an answer...</option>'+opts.map(o=>`<option value="${esc(o)}">${esc(o)}</option>`).join("");
    sel.value=saved[s.speaker]||"";
    sel.onchange=()=>{answers[t.id]||={};answers[t.id][s.speaker]=sel.value;localStorage.setItem("aptisV4Answers",JSON.stringify(answers));sel.classList.remove("correct","wrong");updateScore()};
    row.append(label,sel);box.appendChild(row);
  });
  renderTraining(t); renderDots(); updateScore();
  document.getElementById("bookmarkBtn").classList.toggle("active",!!bookmarks[t.id]);
}
function renderTraining(t){
  const box=document.getElementById("keyCards");box.innerHTML="";
  t.speakers.forEach((s,i)=>{
    const card=document.createElement("div");card.className="key-card";
    const terms=s.highlights;
    const button=document.createElement("button");button.className="key-button";
    button.innerHTML=`<div class="key-name">${["💡","🚌","🛒","💧","♻️","🏃","📍","💪","🌐","🎨","🚌","📚"][t.id-1]||"🔑"} ${esc(s.answer)}</div><div class="key-answer">👂 KEY: ${esc(terms.slice(0,3).join(" · "))} &nbsp;⌄</div>`;
    const body=document.createElement("div");body.className="key-body";body.hidden=true;
    body.innerHTML=highlightText(s.text,[...terms]);
    if(s.note) body.innerHTML+=`<div class="note">${esc(s.note)}</div>`;
    button.onclick=()=>body.hidden=!body.hidden;
    card.append(button,body);box.appendChild(card);
  });
}
function updateScore(){
  const t=current(),a=answers[t.id]||{};let n=0;
  t.speakers.forEach(s=>{if(a[s.speaker]===s.answer)n++});
  document.getElementById("score").textContent=`${n} / 4`;
}
function check(){
  const t=current(),a=answers[t.id]||{};let n=0;
  document.querySelectorAll("#speakers select").forEach((sel,i)=>{
    const ok=sel.value===t.speakers[i].answer;
    if(ok)n++;sel.classList.toggle("correct",ok&&!!sel.value);sel.classList.toggle("wrong",!ok&&!!sel.value);
  });
  document.getElementById("score").textContent=`${n} / 4`;
  const r=document.getElementById("result");r.hidden=false;r.className="result "+(n===4?"good":"bad");
  r.textContent=n===4?"Excellent — 4/4. Review the KEY training below.":`You got ${n}/4. Review the red answers, then open the KEY training below.`;
  document.getElementById("training").hidden=false;
  document.getElementById("training").scrollIntoView({behavior:"smooth",block:"start"});
}
function reset(){
  delete answers[current().id];localStorage.setItem("aptisV4Answers",JSON.stringify(answers));
  document.querySelectorAll("#speakers select").forEach(s=>{s.value="";s.classList.remove("correct","wrong")});
  document.getElementById("result").hidden=true;document.getElementById("training").hidden=true;updateScore();
}
function play(){
  if(!audio.src){alert("Audio for this topic is missing. Put the MP3 file in the audio folder with the required name (for example audio/01.mp3).");return}
  if(attempts>=10)return;
  attempts++;document.getElementById("attempts").textContent=`Play ${attempts}/10`;
  audio.currentTime=0;audio.play();if(attempts>=10)document.getElementById("play").disabled=true;
}
function dots(){
  const box=document.getElementById("dots");box.innerHTML="";
  TOPICS.forEach((t,i)=>{const b=document.createElement("button");b.className="dot"+(i===index?" active":"")+(answers[t.id]?" done":"");b.textContent=t.id;b.onclick=()=>{index=i;render()};box.appendChild(b)});
}
document.getElementById("play").onclick=play;
document.getElementById("stop").onclick=()=>{audio.pause();audio.currentTime=0};
document.getElementById("check").onclick=check;
document.getElementById("reset").onclick=reset;
document.getElementById("prev").onclick=()=>{if(index>0){index--;render()}};
document.getElementById("next").onclick=()=>{if(index<TOPICS.length-1){index++;render()}};
document.getElementById("bookmarkBtn").onclick=()=>{bookmarks[current().id]=!bookmarks[current().id];localStorage.setItem("aptisV4Bookmarks",JSON.stringify(bookmarks));render()};
render();
