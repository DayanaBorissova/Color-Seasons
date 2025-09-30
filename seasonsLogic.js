
const seasons = ["Spring", "Summer", "Autumn", "Winter"];

const scoring = {
  hair: {
    warm: { Spring: 2, Autumn: 2 },
    cool: { Summer: 2, Winter: 2 }
  },
  eyes: {
    brown: { Spring: 2, Winter: 1 },
    blue: { Summer: 2, Autumn: 1 },
    green: { Winter: 2, Autumn: 1 }
  },
  undertone: {
    warm: { Spring: 3, Autumn: 3 },
    cool: { Summer: 3, Winter: 3 }
  }
};


function calculateResult(answers) {
  const score = { Spring:0, Summer:0, Autumn:0, Winter:0 };

  if (answers.hair === 'bright') {
    score.Spring += scoring.hair.warm.Spring;
    score.Autumn += scoring.hair.warm.Autumn;
  } else if (answers.hair === 'dark') {
    score.Summer += scoring.hair.cool.Summer;
    score.Winter += scoring.hair.cool.Winter;
  }

  if (answers.eyes === 'brown') {
    score.Spring += scoring.eyes.warm.Spring;
    score.Autumn += scoring.eyes.warm.Autumn;
  } else if (answers.eyes === 'blue') {
    score.Summer += scoring.eyes.warm.Summer;
    score.Winter += scoring.eyes.warm.Winter;
  } else if (answers.eyes === 'green') {
    score.Spring += scoring.eyes.warm.Spring;
    score.Autumn += scoring.eyes.warm.Autumn;
    score.Summer += scoring.eyes.warm.Summer;
    score.Winter += scoring.eyes.warm.Winter;
  }

  if (answers.undertone === 'warm') {
    score.Spring += scoring.eyes.warm.Spring;
    score.Autumn += scoring.eyes.warm.Autumn;
  } else if (answers.undertone === 'cool'){
    score.Summer += scoring.eyes.warm.Summer;
    score.Winter += scoring.eyes.warm.Winter;
  } else if (answers.undertone === 'neutral') {
    score.Spring += scoring.eyes.warm.Spring;
    score.Autumn += scoring.eyes.warm.Autumn;
    score.Summer += scoring.eyes.warm.Summer;
    score.Winter += scoring.eyes.warm.Winter;
  }
  
  let best = seasons[0];
  for (let s of seasons) {
    if (score[s] > score[best]) best = s;
  }
  return best;
}