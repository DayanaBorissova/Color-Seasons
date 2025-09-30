import page from 'https://unpkg.com/page/page.mjs';
import { html, render } from 'https://unpkg.com/lit-html?module';


import { layout } from './src/layout.js'
import { homeView } from './src/home.js';
import { testView } from './src/test.js';
import { paletteView } from './src/palettejs';

homeView();

const root = document.getElementById('app');

function renderView(content, title) {
    render(layout(content, title), root);
}

page('/', () => renderView(homeView(), 'Home'));
page('/test', () => renderView(aboutView(), 'Test'));
page('/palette', () => renderView(oaletteView(), 'Palette'));

page(); 