// test-utils/setup.js
import { config } from '@vue/test-utils';
import vuetify from './vuetify-plugin';

config.global.plugins = [vuetify];