const { Board, Led } = require('johnny-five');
const { cachedDataVersionTag } = require('v8');
const board = new Board();
const stdin = process.stdin;

board.on('ready', () => {
  const led = new Led(13); // Conecte o LED ao pino digital 13

  process.stdin.setRawMode(true);
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function (key) {

    if (key === '1') {
      console.log('LED ON');
      led.on(); // Acende o LED
    } else if (key === '2') {
      console.log('LED OFF');
      led.stop(); // para piscar
      led.off(); // Apaga o LED
    } else if (key === '3') {
      console.log('LED BLINK');
      led.blink(300); // Pisca o LED
    } else if (key === '\u0003') {
      console.log('Programa encerrado.');
      process.exit(); // Encerra o programa quando pressionado Ctrl+C
    }

    console.clear();
    console.log('Pressione:');
    console.log('- "1" acender o LED');
    console.log('- "2" apagar o LED');
    console.log('- "3" pulsa o LED');
    console.log('- "Ctrl+C" encerrar o programa \n');
    console.log('-  VERSAO_03')  

  });
});