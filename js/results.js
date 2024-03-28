const carImages = {
	default: 'https://cdn.motor1.com/images/mgl/zxQBp4/s3/2024-lamborghini-revuelto-exterior.jpg', // Revuelto
	Acura: 'https://www.motortrend.com/uploads/2022/07/2022-Acura-NSX-Type-S-front-three-quarter-1.jpg',
	Audi: 'https://www.topgear.com/sites/default/files/2022/04/1-Audi-R8.jpg',
	BMW: 'https://www.shutterstock.com/image-photo/montecarlo-monaco-17-september-2018-600nw-1181919463.jpg',
	Buick: 'https://s1.cdn.autoevolution.com/images/news/gallery/1970-buick-gsx-in-saturn-yellow-should-really-light-your-fire_16.jpg',
	Chevrolet: 'https://variety.com/wp-content/uploads/2013/07/hr_transformers_4_12.jpg?w=1000&h=563&crop=1',
	Chrysler: 'https://i.pinimg.com/564x/0a/b9/51/0ab951ace7cfb15298b5d32ee9e31815.jpg',
	Dodge: 'https://i0.wp.com/moparinsiders.com/wp-content/uploads/2023/03/DG012_068CL.jpeg?fit=2000%2C1125&ssl=1',
	Ford: 'https://www.topgear.com/sites/default/files/cars-car/image/2018/03/mustang_lightning_blue_009.jpg',
	GMC: 'https://inv.assets.ansira.net/RTT/GMC/2024/6129583/default/ext_GCP_deg01.jpg',
	Honda: 'https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2022/07/Honda-NSX-(1).jpg',
	Lexus: 'https://cars.usnews.com/static/images/Auto/custom/15319/2024_Lexus_LC_1.jpg',
	Lincoln: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7LTUfVHUy5oRtFKzZBVnNA1jqQlPFwDJqA&usqp=CAU',
	'Mercedes-Benz': 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/20865/amg-gt-exterior-right-front-three-quarter-60800.jpeg?q=80&q=80',
	Volvo: 'https://motoringworld.in/wp-content/uploads/2023/09/https___www.carscoops.com_wp-content_uploads_2023_09_Polestar-Synergy-Design-Contest-Winner-21-1024x768-1-1.jpg',
}

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
		card.classList.add('card')
		// Return the item at the random index
		console.log(carImages[car.Make])
		const cardContent = `
			<img src=${carImages[car.Make]|| carImages['default']} class="card-img-top" alt="car" />
			<div class="card-body">
				<h5 class="card-title">${car.Make} ${car.Model}</h5>
				<p class="card-text">HorsePower: ${car.Horsepower}</p>
				<p class="card-text">Miles Per Gallon: ${car.MPG_City}</p>
				<a href="#" class="btn btn-danger">Go somewhere</a>
			</div>
        `
		card.innerHTML = cardContent

		container.appendChild(card)
	})
}
