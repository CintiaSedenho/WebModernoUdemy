/*
Função em JS é First-Class Object
Higher-order function
 */

// criar de forma literar
function fun1(){ }

// armazenar em uma variável
const fun2 = function (){ }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1,fun2]
console.log(array[0](2, 3))

//armazenar em um atrubuto de objeto
const obj = {}
obj.falar = function(){return'Opa'}
console.log(obj.falar())

//passar função
function run (fun){
    fun()
}

run(function(){console.log('Executando...')})

// uma função pode retornat / conter uma função

function soma (a, b){
    return function (c){
        console.log (a + b + c)
    }
}

soma (2, 3)(4)
const cincoMais = soma (2, 3)
cincoMais (4)

function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log ("Valor acima do permitido: ${area} m2.")
        }
        else {
            return area
        }
    }

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(5, 5))

function soma_f() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma_f())
console.log(soma_f(1))
console.log(soma_f(1.1, 2.2, 3,3))
console.log(soma_f(1.1, 2.2, "Teste"))
console.log(soma_f('a', 'b', 'c'))

// estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1 
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0) )

//estrategia 2 para gerar valor padrão 

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 :c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0) )

// valor padrão do es2015

function soma3(a=1, b=1, c=1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0) )

// *** THIS PODE VARIAR *** //
//Função arrow, vai definir a function conforme a definição que a ela for agregada

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

// conflito entre paradigmas: funcional e OO

const falar = pessoa.falar
falar()
const falarDePessoa = pessoa.falar.bind(pessoa) 

/* bind amarra a função falar com o objeto pessoa
falarDePessoa()

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000) //dispara a função a cada 1000 milisegundos, usar cntr + alt + n para iniciar e parar a função
}
new Pessoa 
*/

let dobro = function (a){
    return 2 * a
}
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
console.log(ola())

// função arrow é anônima. para chamá-la iterativamente é preciso armazená-la
dobro = a => 2 * a
console.log(dobro(Math.PI))

ola = () => 'Olá' // não possui parametro
ola = _ => 'Olá' // possui parametro
console.log(ola())

