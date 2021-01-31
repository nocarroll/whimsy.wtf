import sample from 'lodash.sample';

import * as silly from './silly';
import * as folk from './folk';

export default function () {
  return sample([silly.getOne(), folk.getOne()]);
};