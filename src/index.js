import './theme.css';
import './default.css';

import Layout from './Layout';
import SearchScreen from './Search';
import FavorisScreen from './Favoris';

const body = document.getElementsByTagName('body')[0];

const searchScreen = new SearchScreen();
const favorisScreen = new FavorisScreen();

const layout = new Layout(body, {
  search: searchScreen.render(),
  favoris: favorisScreen.render(),
});

layout.render();
