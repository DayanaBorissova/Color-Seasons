import { navigate } from './dom.js';

import { showHome } from './home.js';
import { showTest } from './test.js';
import { showProject } from './project.js';

document.getElementById('hidden').remove();

showHome();

document.getElementById('home-link').addEventListener('click', (e) => navigate(e, showHome));
document.getElementById('test-link').addEventListener('click', (e) => navigate(e, showTest));
document.getElementById('project-link').addEventListener('click', (e) => navigate(e, showProject));
