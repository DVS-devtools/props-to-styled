import PropsToStyled from '../src/index.js';

const foo = PropsToStyled.init({
    message: 'hello'
});

document.write(foo);
console.log(foo);

PropsToStyled.log({message: 'bye'});