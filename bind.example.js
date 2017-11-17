class instructor
{
    say_hello() {
        alert('HELLO');
    }
}

class student
{
    say_hello() {
        alert('Hola!');
    }
}

let JanPolak = new instructor();

let Ludo = new student();

function someone_say_hello() {
    this.say_hello();
}

var func = someone_say_hello.bind(JanPolak);

func(); // HELLO

var func = someone_say_hello.bind(Ludo);

func(); // Hola!