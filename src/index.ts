import '../src/sass/main.scss';

import App from './modules/app/app';

import AddQueryParams from './modules/routers/routerFilter';

const app = new App();
app.start();

const routerFilter = new AddQueryParams();
routerFilter.add();