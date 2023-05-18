const { Board, Led } = require("johnny-five");
const board = new Board();
const stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

function ligarLed(led){
 // board.on("ready", () => {
   // const led = new Led(13);
  
    // This will grant access to the led instance
    // from within the REPL that's created when
    // running this program.

    led.blink(1500);
  //});
}

function desligarLed(led){
  // board.on("ready", () => {
     //const led = new Led(13);
  
    // This will grant access to the led instance
    // from within the REPL that's created when
    // running this program.
    //board.repl.inject({
   //   led
    //});
  
   led.board();
    
 // });
}

board.on("ready", () => {
  const led = new Led(13);
  board.repl.inject({
    led
  });
  // on any data into stdin
  stdin.on( 'data', function( key ){
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
      process.exit();
    }

    // ctrl-d 
    if ( key === '\u0004' ) {
      console.log("ligando o led");
      ligarLed(led)
    }

      // ctrl-e
      if ( key === '\u0005' ) {
        console.log("desligando o led");
        desligarLed(led)
      }

    // write the key to stdout all normal like
    process.stdout.write( key );
  });
});