const horseList = document.getElementById('horse-list');
const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

const horses = [
  { name: 'Thunder', available: true },
  { name: 'Lightning', available: true },
  { name: 'Bolt', available: false },
];

horses.forEach((horse) => {
  const horseCard = document.createElement('div');
  horseCard.classList.add('horse-card');
  horseCard.innerHTML = `
    <h3>${horse.name}</h3>
    <p>${horse.available ? 'Available' : 'Not Available'}</p>
  `;
  horseList.appendChild(horseCard);
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const horseName = document.getElementById('horse-name').value;
  const date = document.getElementById('date').value;

  const bookedHorse = horses.find((horse) => horse.name === horseName && horse.available);

  if (bookedHorse) {
    bookedHorse.available = false;
    bookingMessage.textContent = `Horse ${horseName} booked for ${date}.`;
  } else {
    bookingMessage.textContent = 'This horse is not available or does not exist.';
  }
});