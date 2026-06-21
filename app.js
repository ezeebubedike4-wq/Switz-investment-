function signupUser(){
  const fullName=document.getElementById('fullName').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const password=document.getElementById('password').value.trim();
  if(!fullName||!email||!phone||!password){alert('Please fill in all details.');return;}
  localStorage.setItem('switzUser',JSON.stringify({fullName,email,phone,password,balance:0}));
  localStorage.setItem('switzLoggedIn','true');
  window.location.href='dashboard.html';
}
function loginUser(){
  const email=document.getElementById('loginEmail').value.trim();
  const password=document.getElementById('loginPassword').value.trim();
  const user=JSON.parse(localStorage.getItem('switzUser')||'null');
  if(!user){alert('No account found. Please sign up first.');window.location.href='signup.html';return;}
  if(user.email===email&&user.password===password){localStorage.setItem('switzLoggedIn','true');window.location.href='dashboard.html';}
  else alert('Wrong email or password.');
}
function logoutUser(){localStorage.removeItem('switzLoggedIn');window.location.href='login.html';}
document.addEventListener('DOMContentLoaded',function(){
  if(location.pathname.includes('dashboard.html')){
    const user=JSON.parse(localStorage.getItem('switzUser')||'null');
    if(user){
      document.getElementById('profileName').textContent=user.fullName||'Investor';
      document.getElementById('balance').textContent='₦'+Number(user.balance||0).toLocaleString()+'.00';
    }
  }
});