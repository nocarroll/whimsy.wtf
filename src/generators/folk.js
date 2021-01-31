import faker from 'faker';
import sample from 'lodash.sample';
import { capitalCase } from 'change-case';
import sentencer from 'sentencer';

import animals from '../data/animals';

function animal () {
  return sample(animals);
}

function refusal () {
  return sample(['I Ain\'t Coming Back', 'Don\'t Go', 'Don\'t You Walk Away From Me', 'I Ain\'t Givin\' Up On Us', 'Goodbye']);
}

function stayAway () {
  return sample(['Hands Off', 'Stay Away From', 'Don\'t Scratch', 'God Bless', 'Sleeping In', 'Getting High In', 'Crashing', 'Repainting']);
}

function personalPronoun () {
  return sample(['I\'m', 'You\'re', 'We\'re', 'All', 'Both'])
}

function vehicleAdjective () {
  return sample(['fast', 'slow', 'strong', 'loud', 'slick', 'got curves', 'got balls']);
}

function folkSongType () {
  return sample(['ballad', 'legend', 'tale', 'story']);
}

function informalGreeting () {
  return sample(['hey', 'oh', 'dear', 'look', 'me and', 'hey hey', 'standing next to', 'thinking of', 'remembering', 'hey now', 'good morning']);
}

function modeOfTransport () {
  return sample(['train', 'boat', 'wagon', 'horse', 'stagecoach', 'ship', 'flight']);
}

function preposition () {
  return sample(['outta', 'out of', 'to', 'into', 'leaving']);
}

function forlornIngVerb () {
  return sample(['crying', 'wandering', 'weeping', 'laughing', 'singing', 'dancing', 'trainspotting', 'drifting', 'reminiscing', 'walking', 'floating', 'leaving', 'losing', 'not joking', 'not laughing']);
}

function generateFolkSongTitle () {
  const folkSongTitle = [
    `The ${capitalCase(folkSongType())} of ${faker.name.findName()}`,
    `${capitalCase(informalGreeting())} ${faker.name.firstName()}, ${personalPronoun()} ${capitalCase(forlornIngVerb())}`,
    `Last ${capitalCase(modeOfTransport())} ${capitalCase(preposition())} ${faker.address.city()}`,
    `${faker.address.country()} to ${faker.address.country()}`,
    sample([`He's ${capitalCase(vehicleAdjective())} But He Ain't No ${faker.vehicle.manufacturer()}`, `She's ${capitalCase(vehicleAdjective())} But She Ain't No ${faker.vehicle.manufacturer()}`]),
    `${stayAway()} My ${faker.vehicle.manufacturer()}`,
    `${refusal()}, ${faker.name.firstName()}`,
    capitalCase(`${informalGreeting()} ${animal()}`)
  ];

  return `Song Title: ${sample(folkSongTitle)}`;
}



export function getOne() {
  return sample([generateFolkSongTitle()]);
}