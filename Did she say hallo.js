function validateHello(greetings) {
    let lCase = greetings.toLowerCase();
    const validGreetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    return validGreetings.some(greeting => lCase.includes(greeting));
}