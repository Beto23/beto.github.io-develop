const express = require('express')

app = express();

app.use(express.static(__dirname + '/docs'),(request,response) => {
    response.sendFile('index.html', { root: __dirname + '/docs' });
});

//Binding the server to a port(3000)
app.listen(3000,() => console.log('express server started at port 3000'))