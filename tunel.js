const express = require("express"); // Get the module
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");
const https = require("https");

const URL = "https://rcgmedia.mx";
const apiURL = "api.rcgmedia.mx";

app.get("/articulo/:url", function (request, response) {
	const filePath = path.resolve(__dirname, "./www", "index.html");
	const query = `query ArticuloMeta($url: String) {
		articulos: articulos(where: { url: $url }) {
			Titulo,
			description,
			cover{
				url
			}
		}
	}`;

	const postData = JSON.stringify({
		query: query,
		operationName: "ArticuloMeta",
		variables: { url: request.params.url },
	});

	const options = {
		hostname: apiURL,
		port: 443,
		path: "/graphql",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": Buffer.byteLength(postData),
		},
	};

	const req = https.request(options, (res) => {
		res.setEncoding("utf8");
		res.on("data", (chunk) => {
			// var newChunk = JSON.parse(chunk);
			console.log(`BODY: ${chunk.data.articulos}`);
		});
		res.on("end", () => {
			console.log("No more data in response.");
		});
	});

	req.on("error", (e) => {
		console.error(`problem with request: ${e.message}`);
	});

	// Write data to request body
	req.write(postData);
	req.end();

	// const options = {
	// 	hostname: apiURL,
	// 	port: 443,
	// 	path: "/articulos?url=" + request.params.url,
	// 	method: "GET",
	// };
	// const req = https.request(options, (res) => {
	// 	console.log(`statusCode: ${res.statusCode}`);
	// 	res.on("data", (d) => {
	// 		process.stdout.write(d);
	// 	});
	// });

	// req.on("error", (error) => {
	// 	console.error(error);
	// });

	// req.end();
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
