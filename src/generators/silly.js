import faker from 'faker';
import sample from 'lodash.sample';
import { capitalCase } from 'change-case';
import sentencer from 'sentencer';

import animals from '../data/animals';

function whimsicalIngVerb () {
  return sample(['crying', 'wandering', 'weeping', 'laughing', 'singing', 'dancing', 'stargazing', 'trainspotting'])
}

function temperature () {
  return sample(['hot', 'cold', 'ice-cold', 'cool', 'mellow']);
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
  return sample(['ballad', 'folk song', ' waltz', 'song', 'tune', 'hit song']);
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

export function generateSillySuggestion () {
  const sillySuggestions = [
    `A ${typeOfSong()} about a ${whimsicalIngVerb()} ${noun()}`,
    `A ${typeOfSong()} from the perspective of a ${animal().toLowerCase()}`,
    `A ${oddGenre()} about a ${temperature()} ${animal().toLowerCase()} experiencing ${emotion()}`,
    `A ${oddGenre()} about a ${animal().toLowerCase()} ${action()} ${futurePlace()}`,
    `A ${oddGenre()} about a ${person()} ${action()} ${futurePlace()}`,
    `A ${oddGenre()} about ${action()} ${futurePlace()}`,
    `A ${oddGenre()} about ${whimsicalIngVerb()} in ${faker.address.city()}`,
    `A ${typeOfSong()} about ${sentencer.make('the {{ adjective }} {{ nouns }}')}`
  ];
  return sample(sillySuggestions);
}

function generateSillySongTitle () {
  const sillySongTitle = [
    `Song Title: What Do I Do With My ${capitalCase(temperature())} ${capitalCase(adjective())} ${capitalCase(emotion())}?`,
    `Song Title: ${capitalCase(emotion())} in ${faker.address.city()}`,
    `Song Title: ${capitalCase(emotion())} in ${faker.address.country()}`,
    `Song Title: I Thought I Saw You in ${faker.address.country()}`,
    `Song Title: I Thought I Saw You ${capitalCase(whimsicalIngVerb())} in ${faker.address.country()}`,
    `Song Title: ${capitalCase(faker.hacker.ingverb())} in ${faker.address.city()}`,
    `Song Title: ${capitalCase(`${faker.hacker.ingverb()} ${noun()} and ${noun()}`)}`,
    `Song Title: ${capitalCase(`${adjective()} ${noun()}`)}`,
    `Song Title: ${capitalCase(`${adjective()} ${animal()}`)}`,
    `Song Title: ${capitalCase(`${faker.hacker.ingverb()} ${adjective()} ${animal()}`)}`,
    `Song Title: ${capitalCase(`${faker.commerce.color()} ${animal()}`)}`
  ];

  return sample(sillySongTitle);
}