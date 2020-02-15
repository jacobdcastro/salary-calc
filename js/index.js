import fn from './math';
const input = document.querySelector('input');
const answer = document.getElementById('answer');

const state = {
  input: {
    type: 'yr',
    value: 0,
  },
  output: {
    type: 'hr',
    value: 0,
  },
};

const { input, output } = state;

const setInputType = type => (input.type = type);
const setOutputType = type => (output.type = type);

const calculate = input => {
  let answerValue;
  if (input.type === output.type) return input;
  if (input.type === 'yr') {
    if (output.type === 'mo') return fn.yearToMonth(input);
    else if (output.type === 'wk') return fn.yearToWeek(input);
    else if (output.type === 'hr') return fn.yearToHour(input);
  }
};

input.addEventListener('input', calculate);
