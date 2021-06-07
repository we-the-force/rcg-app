var express = require("express"); // Get the module
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

const URL = "https://rcgmedia.mx"
const apiURL = "https://api.rcgmedia.mx/graphql"
const query = `
query{
		articulos(where: { url: $url}){
		Titulo,
		description,
		cover{
			url
		}
	} 
}`;

app.get("/articulo/:url", function (request, response) {
	const filePath = path.resolve(__dirname, "./www", "index.html");
	console.log(request.params.url);
	fetch(apiURL,{
		method: "POST",
		body: JSON.stringify({
			query: query,
			variables: { url: request.params.url }
		}),
	})
	.then(result => {
		console.log(result);
		return result.json();
	})
	.then(article => {
		console.log("data returned:\n", article);
		fs.readFile(filePath, "utf8", function (err, data) {
			if (err) {
				return console.log(err);
			}
			data = data.replace(/\$OG_TITLE/g, "Articulo Page");
			data = data.replace(/\$OG_DESCRIPTION/g, "Articulo description");
			result = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
			response.send(result);
		});
	})
	.catch(error => console.error(error));
});

app.use(express.static(path.resolve(__dirname, "./www")));

app.listen(port, () => console.log(`Listening on port ${port}`));
