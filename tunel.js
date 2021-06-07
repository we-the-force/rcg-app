const express = require("express"); // Get the module
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

const URL = "https://rcgmedia.mx";
const apiURL = "https://api.rcgmedia.mx";

const query = `
	query articulos(where: { url: $url }) {
		Titulo,
		description,
		cover{
			url
		}
	}
`;

var variables = {
	url: "",
};

app.get("/articulo/:url", function (request, response) {
	const filePath = path.resolve(__dirname, "./www", "index.html");
	variables.url = request.params.url;
	fetch(apiURL, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	})
		.then((response) => {
			console.log("resp "+response.json());
			return response.json()
		})
		.then((data) => {
			console.log("data "+data);
			return data;
		})
		.catch((e) => {
			console.log("e "+e);
		});
	fs.readFile(filePath, "utf8", function (err, data) {
		if (err) {
			return console.log(err);
		}
		data = data.replace(/\$OG_TITLE/g, "Articulo Page");
		data = data.replace(/\$OG_DESCRIPTION/g, "Articulo description");
		result = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
		response.send(result);
	});
});

app.use(express.static(path.resolve(__dirname, "./www")));

app.listen(port, () => console.log(`Listening on port ${port}`));
