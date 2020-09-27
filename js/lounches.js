const url = "https://api.spacexdata.com/v4/launches/upcoming";

async function getLounch() {
	const type = document.querySelector(".lounches-section");
	try {
		const respons = await fetch(url);
		const results = await respons.json();

		console.log(results);

		type.innerHTML = results.type;
	} catch (error) {
		console.log(error);
	}
}
async function getLounches() {
	const respons = await fetch(url);
	const results = await respons.json();

	displayLounches(results);
	console.log(results);
}

function displayLounches(lounches) {
	const container = document.querySelector(".lounches-card");

	let html = "";

	for (let i = 0; i < 10; i++) {
		html += `<div class="lounches-card">
                    <ul>
                        <li>
                            <div class="lounches-content">
                                <h3>${lounches[i].date_local}</h3>
                                <p>
                                ${lounches[i].details}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>`;
	}
	container.innerHTML = html;
}

getLounches();
