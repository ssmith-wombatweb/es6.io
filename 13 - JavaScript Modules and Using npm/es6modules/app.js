import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import {
  apiKey as key,
  url,
  sayHi,
  old,
  dog
} from './src/config';

import User, { createURL, gravatar } from './src/user';

const simeon = new User('Simeon Smith', 'ssmith@wombatweb.us', 'www.simeonsmith.me');

const profile = createURL(simeon.name);

const image = gravatar('tofieldya@gmail.com')

console.log(simeon, profile, image);
