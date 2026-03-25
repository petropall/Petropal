// ===== EMAILJS REMOVED - USING WHATSAPP =====

// ===== ORDER FORM =====
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name     = this.querySelector('input[type=text]').value;
  const phone    = this.querySelector('input[type=tel]').value;
  const location = this.querySelector('.input-with-icon').value;
  const fuel     = this.querySelector('select').value;
  const qty      = this.querySelector('input[type=number]').value;
  const delivery = this.querySelector('input[name=delivery]:checked').value;
  const notes    = this.querySelector('textarea').value || 'None';

  const message = `🚚 *New Fuel Order*

👤 Name: ${name}
📞 Phone: ${phone}
📍 Location: ${location}

⛽ Fuel: ${fuel}
📦 Quantity: ${qty} Litres
🚛 Delivery: ${delivery}

📝 Notes: ${notes}

⏰ Time: ${new Date().toLocaleString('en-IN')}`;

  const whatsappURL = `https://wa.me/919605680232?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

  if (typeof showModal === "function") showModal();
  this.reset();
});

// ===== LOGIN FIX =====
const openLoginBtn = document.getElementById('openLoginBtn');
let currentUser = JSON.parse(localStorage.getItem('petropal_current') || 'null');

function updateLoginBtn() {
  if (currentUser) {
    openLoginBtn.innerHTML = `<i class="fas fa-user-check"></i> ${currentUser.name}`;
  } else {
    openLoginBtn.innerHTML = `<i class="fas fa-user"></i> Login`;
  }
}
updateLoginBtn();

openLoginBtn.addEventListener('click', function() {
  if (currentUser) {
    if (confirm(`Logout from ${currentUser.name}'s account?`)) {
      currentUser = null;
      localStorage.removeItem('petropal_current');
      updateLoginBtn();
    }
  } else {
    if (typeof openAuth === "function") openAuth('login');
  }
});
