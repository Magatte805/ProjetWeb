// Importer les modules nécessaires
const express = require('express');
const routes = require('./Routes/index')
const app = express();


// Définir les routes
app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('Pages'));



// Configurer le moteur de rendu des vues
//app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');



// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
