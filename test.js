import { showView } from './dom.js';

const section = document.getElementById('test-view');
const resultEl = section.querySelector('#result-text');
const resultBtn = section.querySelector('#see-result');

export function showTest() {
    showView(section);
}


resultBtn.addEventListener('click', onSeeResult);

function onSeeResult(e) {
    e.preventDefault();

    const answers = {
        hair: getValue('hairtype'),
        eyes: getValue('eyecolor'),
        undertone: getValue('undertone'),
        sunburn: getValue('sunburn'),
    };


    if (!answers.hair || !answers.eyes || !answers.undertone || !answers.sunburn) {
        resultEl.innerHTML = `<h3>Моля, отговори на всички въпроси преди да видиш резултата.</h3>`;
        return;
    }


    const season = calculateSeason(answers);

    const seasonBG = {
    Spring: "Пролет",
    Summer: "Лято",
    Autumn: "Есен",
    Winter: "Зима"
    };

    resultEl.innerHTML = `<h3>Според отговорите ти, твоят цветен сезон е: ${seasonBG[season]}!</h3>`;
}

function getValue(groupName) {
    const checked = section.querySelector(`input[name="${groupName}"]:checked`);
    return checked ? checked.value : null;
}

function calculateSeason(answers) {
    const score = {
        Spring: 0,
        Summer: 0,
        Autumn: 0,
        Winter: 0,
    };

    if (answers.hair === 'hairtype-one') {
        score.Summer += 2;
        score.Winter += 1;
    } else if (answers.hair === 'hairtype-two') {
        score.Spring += 1;
        score.Autumn += 2;
    } else if (answers.hair === 'hairtype-three') {
        score.Winter += 2;
        score.Autumn += 2;
    } 

    if (answers.eyes === 'eyecolor-one') {
        score.Spring += 2;
        score.Winter += 1;
    } else if (answers.eyes === 'eyecolor-two') {
        score.Summer += 2;
        score.Autumn += 2;
    } else if (answers.eyes === 'eyecolor-three') {
        score.Winter += 1;
        score.Autumn += 1;
    } else if (answers.eyes === 'eyecolor-four') {
        score.Spring += 1;
        score.Summer += 2;
        score.Winter += 1;
    }

    if (answers.undertone === 'undertone-one') {
        score.Spring += 3;
        score.Autumn += 3;
    } else if (answers.undertone === 'undertone-two') {
        score.Summer += 3;
        score.Winter += 3;
    } else if (answers.undertone === 'undertone-three') {
        score.Spring += 1;
        score.Summer += 1;
        score.Autumn += 1;
        score.Winter += 1;
    }

    if (answers.sunburn === 'sunburns-one') {
        score.Spring += 1;
        score.Winter += 2;
    } else if (answers.sunburn === 'sunburns-two') {
        score.Spring += 1;
        score.Summer += 1;
        score.Autumn += 1;
        score.Winter += 1;
    } else if (answers.sunburn === 'sunburns-three'){
        score.Summer += 2;
        score.Autumn += 2;
    }

    let bestSeason = 'Spring';
    for (const s of Object.keys(score)) {
        if (score[s] > score[bestSeason]) {
            bestSeason = s;
        }
    }
    return bestSeason;
}




