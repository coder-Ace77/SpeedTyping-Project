const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// const adminData = require('./routes/admin');
const generalRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', generalRoutes.routes);
// app.use(shopRoutes.routes);

// app.use((req, res, next) => {
//   res.status(404).render('404', { pageTitle: 'Page Not Found' });
// });

app.listen(3000);
