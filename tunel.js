const express = require("express"); // Get the module
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");
const https = require("https");

const URL = "https://rcgmedia.mx";
const apiURL = "api.rcgmedia.mx";

app.get("/articulo/:url", function (request, response) {
	const filePath = path.resolve(__dirname, "/var/www/html/", "index.html");
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

	let articuloTitulo = "";
	let articuloURL = "";
	let articuloDesc = "";
	let articuloCover = "";

	const req = https.request(options, (res) => {
		res.setEncoding("utf8");
		res.on("data", (chunk) => {
			var newChunk = JSON.parse(chunk);
			articuloURL = URL + "/articulo/" + request.params.url;
			articuloTitulo = newChunk.data.articulos[0].Titulo;
			articuloDesc = newChunk.data.articulos[0].description.replace(/(<([^>]+)>)/gi, "").substr(0,50);
			articuloCover = "https://" + apiURL + newChunk.data.articulos[0].cover.url;
		});
		res.on("end", () =>
			fs.readFile(filePath, "utf8", function (err, data) {
				if (err) {
					return console.log(err);
				}
				data = data.replace(/__OG_URL__/g, articuloURL);
				data = data.replace(/__OG_TITLE__/g, articuloTitulo);
				data = data.replace(/__OG_DESCRIPTION__/g, articuloDesc);
				result = data.replace(/__OG_IMAGE__/g, articuloCover);
				response.send(result);
			});
		});
	});

	req.on("error", (e) => {
		console.error(`problem with request: ${e.message}`);
		response.sendFile(filePath);
	});

	// Write data to request body
	req.write(postData);
	req.end();
	
});

app.use(express.static(path.resolve(__dirname, "/var/www/html/")));

app.listen(port, () => console.log(`Listening on port ${port}`));
