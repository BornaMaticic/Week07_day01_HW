const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeChecker:result-calculated", (event) => {
    const isNumberPrime = event.detail;
    this.displayResults(isNumberPrime);
  })
};

ResultView.prototype.displayResults = function (result) {
  const resultsElement = document.querySelector('#result');
  resultsElement.textContent = result;
};


module.exports = ResultView;
