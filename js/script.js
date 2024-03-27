const suggestCars = (event) => {
	event.preventDefault()
	localStorage.removeItem('results')
	const criteria = {
		EngineSize: document.getElementById('engine').value,
		Cylinders: document.getElementById('cylinders').value,
		Horsepower: document.getElementById('horsepower').value,
		MPG_City: document.getElementById('mpg-city').value,
		MPG_Highway: document.getElementById('mpg-highway').value,
		Weight: document.getElementById('weight').value,
		Wheelbase: document.getElementById('wheelbase').value,
		Length: document.getElementById('length').value,
	}
	// Load CSV file and process data
	readCSV('data.csv', (csv) => {
		const cars = parseCSV(csv)
		const filteredCars = filterCars(cars, criteria)
		localStorage.setItem('results', JSON.stringify(filteredCars))
		window.location.href = 'results.html'
	})
}

// Assume 'cars.csv' is the CSV file containing the car data

// Function to read the CSV file
const readCSV = (file, callback) => {
	const xhr = new XMLHttpRequest()
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				callback(xhr.responseText)
			} else {
				console.error('Failed to load CSV file')
			}
		}
	}
	xhr.open('GET', file, true)
	xhr.send()
}

// Function to parse CSV data
const parseCSV = (csv) => {
	const lines = csv.split('\n')
	const cars = []
	const headers = lines[0].split(',')
	for (let i = 1; i < lines.length; i++) {
		if (!lines[i] || !lines[i].split(',')[0]) {
			continue
		}
		const car = {}
		const line = lines[i].replace(/\$(\d+),(\d+)/g, '$1$2')
		const properties = line.split(',')
		for (let j = 0; j < headers.length; j++) {
			car[headers[j].trim()] = properties[j].replace('"', '').trim()
		}
		cars.push(car)
	}
	return cars
}

// Function to filter cars based on criteria
const filterCars = (cars, criteria) => {
	return cars.filter((car) => {
		for (const key in criteria) {
			if (criteria[key] === '') {
				continue
			}
			if (parseFloat(car[key]) <= parseFloat(criteria[key])) {
				return true
			}
		}
		return false // Return false if none of the properties match the criteria
	})
}
