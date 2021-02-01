import * as silly from './silly';
import * as folk from './folk';

function hasClash (previousSuggestion, nextSuggestion) {
  const nextSuggestionWords = nextSuggestion.split(' ').map(word => word.toLowerCase());
  return previousSuggestion.split(' ').some(word => nextSuggestionWords.includes(word.toLowerCase()));
}

function rollTheDice () {
  const options = [silly.getOne, folk.getOne];
  return options[count % options.length]();
}

let count = 0;

export function getSuggestion (previousSuggestion) {
  let nextSuggestion = rollTheDice();
  if (previousSuggestion) {
      while(hasClash(previousSuggestion, nextSuggestion)) {
        nextSuggestion = rollTheDice();
      }
  }
  count++;
  
  return nextSuggestion;
};