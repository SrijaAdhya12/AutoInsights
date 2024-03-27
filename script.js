const suggestCars = (event) => {
	event.preventDefault()

	const engine = document.getElementById('engine'),
		cylinders = document.getElementById('cylinders'),
		horsepower = document.getElementById('horsepower'),
		mpgCity = document.getElementById('mpg-city'),
		mpgHighway = document.getElementById('mpg-highway'),
		weight = document.getElementById('weight'),
		wheelbase = document.getElementById('wheelbase'),
		length = document.getElementById('length')

	console.log(engine.value, cylinders.value, horsepower.value, mpgCity.value, mpgHighway.value, weight.value, wheelbase.value, length.value)
}
