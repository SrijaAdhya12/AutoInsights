const images = [
	'https://www.motortrend.com/uploads/2022/07/2022-Acura-NSX-Type-S-front-three-quarter-1.jpg', // Acura NSX
	'https://cdn.motor1.com/images/mgl/zxQBp4/s3/2024-lamborghini-revuelto-exterior.jpg', // Revuelto
	'https://variety.com/wp-content/uploads/2013/07/hr_transformers_4_12.jpg?w=1000&h=563&crop=1', // Chevrolet Camaro
	'https://c.ndtvimg.com/2023-11/a4udmq8o_bugatti-bolide_625x300_24_November_23.jpeg', // Bugatti Bolide
	'https://pics.craiyon.com/2023-10-02/6f50d3377a7a44649381f9a9fab4bc25.webp', // Koenigsegg Jesko
]

document.addEventListener('DOMContentLoaded', function () {
	const filteredCars = JSON.parse(localStorage.getItem('results'))
	display(filteredCars)
})
// Function to display cars
function display(cars) {
	const container = document.getElementById('car-container')
	// Clear previous contents
	container.innerHTML = ''
	// Loop through each car and create card elements
	cars.forEach((car) => {
		const card = document.createElement('div')
		card.style.width = '18rem'
		card.style.height = '400px'
		card.classList.add('card')
		// card.classList.add('p-3')
		card.classList.add('shadow-lg')
		// Return the item at the random index
		const image = images[Math.floor(Math.random() * images.length)]
		const cardContent = `
			<img src=${image} class="card-img-top" alt="car" style="height: 161px; object-fit: cover;" />
			<div class="card-body">
				<h5 class="card-title">${car.Make} ${car.Model}</h5>
				<p class="card-text">HorsePower: ${car.Horsepower}</p>
				<p class="card-text">Miles Per Gallon: ${car.MPG_City}</p>
				<a href="#" class="btn btn-danger">Know More</a>
			</div>
        `
		card.innerHTML = cardContent

		container.appendChild(card)
	})
}
