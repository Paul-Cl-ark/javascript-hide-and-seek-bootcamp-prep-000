function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(idName, className) {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranksToIncrease = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranksToIncrease.length; i++) {
  ranksToIncrease[i].innerHTML = (parseInt((ranksToIncrease[i].innerHTML)) + n);
  }
  return ranksToIncrease;
}

function deepestChild() {
  const boo = document.querySelectorAll('#grand-node div');
  return boo[boo.length -1];
}