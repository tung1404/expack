import logMessage from './js/logger';
import adder from './js/adder';
import './css/style.css';

// Log message to console
logMessage('Its finished!! ' + adder(1, 2));

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
