let a = 3;
console.log(typeof a);

const b = 'hello';//immutable value

const c = `hello 
${a}

world`;

console.log(c);

function hello(a,b){
  console.log(a+b);
}

function hello2(c, d){
  console.log(c-d);
}

function hellof(a){
  console.log(a());
}

hello(3, 4);

//hellof(hello('d', 'f'));

hellof(() =>'ddd');

function hellob(a=0, b=0)
{
  console.log(a+b);
}

hellob();


const aaa = 1;
const bbb = 2;

const ccc = {
  a:aaa,
  b:bbb
};

const ddd = {aaa, bbb};
