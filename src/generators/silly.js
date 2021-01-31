import faker from 'faker';
import sample from 'lodash.sample';
import { capitalCase } from 'change-case';
import sentencer from 'sentencer';

import animals from '../data/animals';

function whimsicalIngVerb () {
  return sample(['crying', 'wandering', 'weeping', 'laughing', 'singing', 'dancing', 'stargazing', 'trainspotting', 'drifting', 'reminiscing', 'walking', 'floating'])
}

function temperature () {
  return sample(['hot', 'cold', 'ice-cold', 'cool', 'mellow', 'romantic', 'gloomy', 'fearful', 'tense', 'mysterious']);
}

function emotion () {
  return sample(['love', 'joy', 'sorrow', 'anger', 'apathy', 'depression', 'romance', 'lust', 'loss', 'grief', 'hatred', 'passion']);
}

function noun () {
  return sentencer.make('{{ noun }}');
}

function adjective () {
  return sentencer.make('{{ adjective }}');
}

function animal () {
  return sample(animals);
}

function typeOfSong () {
  return sample(['ballad', 'folk song', ' waltz', 'song', 'tune', 'hit song', 'hymn', 'diss track', 'three-chord song', 'twelve bar blues', 'lullaby', 'slow jam', 'show tune', 'novelty song']);
}

function oddGenre () {
  return sample(['cyberpunk ballad', 'club smash', 'floorfiller', 'dub reggae tune', 'space waltz', 'nostalgic earworm', 'neon disco radio anthem', 'lilting instrumental piece', 'joyeous instrumental', 'soft acapella', 'powerful and ominous droning noise', 'song', 'rock song', 'pop song', 'funky bop', 'jazzy number', 'traditional song', 'tune', 'merry little ditty', 'waltz', 'folk song', 'folk ballad', 'heavy metal banger', 'serious tune', typeOfSong()]);
}

function person () {
  return sample(['man', 'man', 'woman', 'woman', 'gifted child', 'forlorn mother', 'father', 'robot', 'cyborg', 'soldier', 'hologram', 'warrior', 'dying astronaut', 'lonely astronaut', 'lost astronaut', 'time traveller', noun()]);
}

function action () {
  return sample(['being stuck in', 'getting lost in', 'fighting', 'waking up in', 'escaping', 'lamenting', 'returning to', 'leaving', 'flying past', 'dissolving into']);
}

function futurePlace () {
  return sample(['the universe', 'the unknown', 'the earth', `${sentencer.make('the {{ adjective }} earth')}`, 'the darkest part of their mind', 'Andromeda', 'Mars', 'Neptune', 'Pluto', 'a distant Moon', 'a fictional planet', `${sentencer.make('{{ an_adjective }} place')}`, 'an alternate reality', 'their memories', 'a quiet place', 'a forbidden place']);
}

function wondering () {
  return sample(['What Do I Do With My', 'How Can I Handle This', 'What Is This', 'Why Can\'t I Help This', 'Why Can\'t I Help My']);
}

function iSawYou () {
  return sample(['I Thought I Saw You', 'I Passed You', 'I Knew You Were', 'I Had A Dream You Were', 'Remember']);
}

function concerning () {
  return sample(['from the perspective of', 'telling the story of', 'about the life of', 'concerning', 'examining the morals of', 'from the point of view of']);
}
 
function generateSillySuggestion () {
  const sillySuggestions = [
    sample([`A ${typeOfSong()} about a ${noun()}`, `A ${typeOfSong()} about a ${whimsicalIngVerb()} ${noun()}`]),
    `A ${typeOfSong()} ${concerning()} a ${animal().toLowerCase()}`,
    `A ${oddGenre()} about a ${temperature()} ${animal().toLowerCase()} experiencing ${emotion()}`,
    `A ${oddGenre()} about a ${animal().toLowerCase()} ${action()} ${futurePlace()}`,
    `A ${oddGenre()} about a ${person()} ${action()} ${futurePlace()}`,
    `A ${oddGenre()} about ${action()} ${futurePlace()}`,
    sample([`A ${oddGenre()} about ${whimsicalIngVerb()}`, `A ${oddGenre()} about ${whimsicalIngVerb()} in ${faker.address.city()}`]),
    `A ${typeOfSong()} about ${sentencer.make('the {{ adjective }} {{ nouns }}')}`
  ];
  return sample(sillySuggestions);
}

function generateSillySongTitle () {
  const sillySongTitle = [
    `Song Title: ${wondering()} ${capitalCase(temperature())} ${capitalCase(adjective())} ${capitalCase(emotion())}?`,
    `Song Title: ${capitalCase(emotion())} in ${sample([faker.address.city(), faker.address.country()])}`,
    sample([`Song Title: ${iSawYou()} in ${faker.address.country()}`, `Song Title: ${iSawYou()} ${capitalCase(whimsicalIngVerb())} in ${faker.address.country()}`]),
    `Song Title: ${capitalCase(faker.hacker.ingverb())} in ${faker.address.city()}`,
    `Song Title: ${capitalCase(`${faker.hacker.ingverb()} ${noun()} and ${noun()}`)}`,
    `Song Title: ${capitalCase(`${adjective()} ${sample([noun(), animal()])}`)}`,
    `Song Title: ${capitalCase(`${faker.hacker.ingverb()} ${adjective()} ${animal()}`)}`,
    `Song Title: ${capitalCase(`${faker.commerce.color()} ${animal()}`)}`
  ];

  return sample(sillySongTitle);
}

export function getOne() {
  return sample([generateSillySuggestion(), generateSillySongTitle()]);
}