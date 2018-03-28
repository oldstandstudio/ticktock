const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.min');
const secondHand = document.querySelector('.sec');

setDate = () => {
	let current = new Date();
	
	let seconds = current.getSeconds();
	let secDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secDegrees}deg)`;
	
	let minutes = current.getMinutes();
	let minDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minDegrees}deg)`;
	
	let hour = current.getHours();
	let hourDegrees = ((hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);