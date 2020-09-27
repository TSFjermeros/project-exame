const url = "https://api.spacexdata.com/v4/rockets";

async function getRocket() {
	const type = document.querySelector(".container-rocket");
	try {
		const respons = await fetch(url);
		const results = await respons.json();

		console.log(results);

		type.innerHTML = results.type;
	} catch (error) {
		console.log(error);
	}
}
async function getRockets() {
	const respons = await fetch(url);
	const results = await respons.json();

	displayRockets(results);
	console.log(results);
}

function displayRockets(rocket) {
	const container = document.querySelector(" .card-rocket");

	let html = "";

	for (let i = 0; i < 2; i++) {
		html += `<div class="imgbox">
					<img src="${rocket[i].flickr_images[0]}" alt="" />
				</div>

				<div class="content-rocket">
					<h2>Rocket name: ${rocket[i].name}</h2>
					<p>Height: ${rocket[i].height.meters}m/${rocket[i].height.feet}Feet</p>
					<p>Diameter: ${rocket[i].diameter.meters}m/${rocket[i].diameter.feet}Feet</p>
					<p>Engine: ${rocket[i].engines.number}</p>
				</div>`;
	}
	container.innerHTML = html;
}

getRockets();
