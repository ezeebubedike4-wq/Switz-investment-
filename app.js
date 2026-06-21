const plans = {
  Bronze: { amount: '₦3,000', returns: '₦12,000' },
  Silver: { amount: '₦6,500', returns: '₦30,000' },
  Golden: { amount: '₦10,000', returns: '₦50,000' }
};

const params = new URLSearchParams(window.location.search);
const planFromUrl = params.get('plan');
if (document.getElementById('plan') && planFromUrl) {
  document.getElementById('plan').value = planFromUrl;
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim().toLowerCase(),
      password: document.getElementById('password').value,
      plan: document.getElementById('plan').value
    };
    localStorage.setItem('switzUser', JSON.stringify(user));
    localStorage.setItem('switzLoggedIn', 'yes');
    window.location.href = 'dashboard.html';
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem('switzUser') || 'null');
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    if (!saved || saved.email !== email || saved.password !== password) {
      alert('Wrong email or password. Please sign up first.');
      return;
    }
    localStorage.setItem('switzLoggedIn', 'yes');
    window.location.href = 'dashboard.html';
  });
}

if (window.location.pathname.includes('dashboard.html')) {
  const user = JSON.parse(localStorage.getItem('switzUser') || 'null');
  if (!user || localStorage.getItem('switzLoggedIn') !== 'yes') {
    window.location.href = 'login.html';
  } else {
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userPlan').textContent = user.plan + ' Plan';
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userPhone').textContent = user.phone;
    document.getElementById('planAmount').textContent = plans[user.plan].amount;
    document.getElementById('planReturn').textContent = plans[user.plan].returns;
  }
}

function logout() {
  localStorage.removeItem('switzLoggedIn');
  window.location.href = 'login.html';
}
