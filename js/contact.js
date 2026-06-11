const PUBLIC_KEY = 'rZtM6_CNJgM49E8iq';
const SERVICE_ID = 'service_mkz23oc';
const TEMPLATE_ID = 'template_a3s2r45';

emailjs.init(PUBLIC_KEY);

const contactForm = document.querySelector('.contact_form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!navigator.onLine) {
    alert("❌ You're not connected to the internet. Please check your connection and try again. 🌐");
    return;
  }

  const templateParams = {
    from_name: nameInput.value,
    from_email: emailInput.value,
    message: messageInput.value,
    to_email: 'wealthk91@gmail.com',
    email_title: 'Message via Portfolio📧',
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(() => {
      alert("✅ Message sent successfully! 🎉 I'll get back to you soon. 😊");
      contactForm.reset();
    })
    .catch((primaryError) => {
      templateParams.to_email = 'kwealth160@gmail.com';
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(() => {
          alert("✅ Message sent successfully! 🎉 I'll get back to you soon. 😊");
          contactForm.reset();
        })
        .catch(() => {
          if (!navigator.onLine) {
            alert("❌ You're not connected to the internet. Please check your connection and try again. 🌐");
          } else {
            alert(`❌ Message couldn't be sent: ${primaryError.text || 'Unknown error'} 😞 Please try again later.`);
          }
        });
    });
});
