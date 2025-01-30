// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency=440, duration=100) {
  // create Oscillator node
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(() => oscillator.stop(), duration);
}

//
//
//

let i = 0;
const hbd = [
  264, 264, 297, 264, 352, 330,
  264, 264, 297, 264, 396, 352,
  264, 264, 523.25, 440, 352, 330, 297,
  466, 466, 440, 352, 396, 352
];
const words = [
  'Hap-', 'py', 'birth-', 'day', 'to', '👉 Anda',
  'Hap-', 'py', 'birth-', 'day', 'to', 'Anda 👈',
  'Hap-', 'py', 'birth-', 'day', 'to', 'Anda', '⛅ มีความสุขมากๆนะ 🤍',
  'Hap-', 'py', 'birth-', 'day', 'to', '🎉 Anda 🎂'
]

$btn = document.querySelector('span')

$btn.onclick = event => {
  if (i >= hbd.length) i = 0;
  
  const hz = hbd[(i)]
  let dur = 100;
  
  let word = words[i]
  
  if (i === 18) {
    dur = dur*5;
    $btn.classList.add('animated', 'tada')
  } else {
    $btn.classList.remove('animated', 'tada')
  }
  
  $btn.innerText = word
  playNote(hz, dur);
  
  i++;
}