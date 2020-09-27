const url = "https://api.spacexdata.com/v4/company";

async function getInfo() {
	const type = document.querySelector(".about-content");
	try {
		const respons = await fetch(url);
		const results = await respons.json();

		console.log(results);

		type.innerHTML = results.type;
	} catch (error) {
		console.log(error);
	}
}
async function getCompany() {
	const respons = await fetch(url);
	const results = await respons.json();

	displayInfo(results);
	console.log(results);
}

function displayInfo(info) {
	const container = document.querySelector(".about-container");

	let html = "";

	for (let i = 0; i < 1; i++) {
		html += `<div class="about-container">
                         <div class="about-intro">
                            <h3>${info[i].name}</h3>
                            <p>Founded:${info[i].founded}</p>
                            <p>Employees${info[i].employees}</p>
                         </div>
                        <div class="employees">
                            <h3>Founders and CEO's</h3>
                            <p>Founder</p>
                            <p>CEO</p>
                            <p>CTO</p>
                            <p>COO</p>
                            <p>CEO</p>
                            <p>CTO PROPULSION</p>
                        </div>
                    </div>`;
	}
	container.innerHTML = html;
}

getCompany();
