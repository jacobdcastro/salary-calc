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

const setInputType = type => (input.type = type);
const setOutputType = type => (output.type = type);

const calculate = input => {
  const { input, output } = state;
  if (input.type === 'yr') {
    if (output.type === 'mo') return input / 12;
    else if (output.type === 'wk') return input / 52;
    else if (output.type === 'hr') return input / 1680;
  } else if (input.type === 'mo') {
    if (output.type === 'yr') return input * 12;
    else if (output.type === 'wk') return input / 4;
    else if (output.type === 'hr') return input / 160;
  } else if (input.type === 'wk') {
    if (output.type === 'yr') return input * 52;
    else if (output.type === 'mo') return input * 4;
    else if (output.type === 'hr') return input / 40;
  } else if (input.type === 'hr') {
    if (output.type === 'yr') return input * 1680;
    else if (output.type === 'mo') return input * 160;
    else if (output.type === 'wk') return input * 40;
  } else if (input.type === output.type) {
    return input;
  } else return input;
};

input.addEventListener('input', calculate);
