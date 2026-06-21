function openSupport(plan){
  document.getElementById('supportBox').style.display='block';
  if(plan){
    addMessage('user','I am interested in the '+plan+'.');
    setTimeout(()=>addMessage('bot','Thanks. A support agent will reply online when the real live chat is connected.'),600);
  }
}
function closeSupport(){document.getElementById('supportBox').style.display='none'}
function addMessage(type,text){
  const box=document.getElementById('chatMessages');
  const p=document.createElement('p');
  p.className=type;
  p.textContent=text;
  box.appendChild(p);
  box.scrollTop=box.scrollHeight;
}
function sendMessage(){
  const input=document.getElementById('chatInput');
  const text=input.value.trim();
  if(!text)return;
  addMessage('user',text);
  input.value='';
  setTimeout(()=>addMessage('bot','Message received. Connect a real live-chat service so you can reply to visitors from your phone.'),600);
}
document.getElementById('chatInput').addEventListener('keypress',function(e){if(e.key==='Enter')sendMessage()});
