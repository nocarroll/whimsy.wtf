import sample from 'lodash.sample';

export function decade () {
  return sample(['50\'s', '60\'s', '70\'s', '80\'s', '90\'s', '00\'s']);
}

export function typeOfSong () {
  return sample(['ballad', 'folk song', ' waltz', 'song', 'tune', 'hit song', 'hymn', 'diss track', 'three-chord song', 'twelve bar blues', 'lullaby', 'slow jam', 'show tune', 'novelty song', `${decade()} song`]);
}