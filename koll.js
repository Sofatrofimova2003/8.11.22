30.
let elems = document.querySelectorAll('p');
console.log(elems[1], elems[0]) 
console.log(elems.join('')) 

31.1
let elems = document.querySelectorAll('p');
let arr1 = [];

for (let elem of elems) {
	arr1.push(elem);
}

let arr2 = [...elems];

let arr3 = Array.from(elems);
console.log(arr1.join('-'), arr2.join(''), arr3.join(''));

31.2
let elems = document.querySelectorAll('p');

let arr = [...elems];
console.log(arr.slice(1, arr.length-1));

32
et elems = document.querySelector('div');

console.log(elems.childNodes);
console.log(elems.children);

33.1
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));

33.2
let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}
let obj3 = {'3': 'c'}

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

console.log(map.get(obj1));
console.log(map.get(obj2));
console.log(map.get(obj3));

36.1
let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}

for(const keys of map.keys()){
    console.log(keys)

36.2
let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}

for(const keys of map.values()){
    console.log(keys)
}

37.1
let elems = document.querySelectorAll('input');

let map = new Map;

let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.value = this.value + map.get(this);
	});
}

37.2
let elems = document.querySelectorAll('input');

let map = new Map;
let inputValue = [];


let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

for (let elem of elems) {
	elem.addEventListener('keyup', function() {
		if (event.keyCode == 13) {
			inputValue.push(this.value);
		}
	});
	elem.onblur = function() {
		console.log(inputValue);
	}
}
  
38.1
let arr = [1, 2, 3, 1, 3, 4];
let set = new Set(arr);

console.log(set);
	
38.2
let set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set);

38.3
let set = new Set([1,2,3]);

set.add(2);

console.log(set);
	
39.2
const set1 = new Set([1, 2, 3]);

console.log(set1.has(3));
// expected output: true

console.log(set1.has(4));
// expected output: false
  
 39.1
 let set = new Set;

set.add(1);
set.add(2);
set.add(3);

console.log(set.size);
  
 40
 let set = new Set;

set.add(1);
set.add(2);
set.add(3);

for (let elem of set) {
	console.log(elem);
}
  
41.1
let set = new Set([1, 2, 3]);
 
let arr = [...set];
  
let arr = Array.from(set);
console.log(arr);
  
41.2
let arr = [1, 2, 3];
  
let set = new Set(arr);
  
42.1
let arr = [1, 2, 3, 1, 3, 4];
  
let set = new Set(arr);
  
let arr = [1, 2, 3, 1, 3, 4];
let res = [...new Set(arr)];

console.log(res); // выведет [1, 2, 3, 4]
  
 42.2
 <p>aaa</p>
<p>bbb</p>
<p>ccc</p>
<p>ddd</p>
<p>eee</p>

<button>click me</button>

let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
  
let set = new Set;
  
for (let elem of elems) {
	elem.addEventListener('click', function() {
		
	});
}
  
for (let elem of elems) {
	elem.addEventListener('click', function() {
		set.add(this);
	});
}
button.addEventListener('click', function() {
	for (let elem of set) {
		elem.textContent = elem.textContent + '!';
	}
});


43.1

let arr = [1, 2, 3, 'a', 'b', 'c'];
  let json = `{
	"a": "aaa",
	"b": "bbb",
	"c": "ccc",
	111: "ddd"
}`;
console.log(json);
	
43.2
let obj = {
	a: 1,
	b: 2,
	c: 'eee',
	d: true,
};
let json = `{
	"a": 1,
	"b": 2,
	"c": "eee",
	"d": true
}`;
console.log(obj)
console.log(json)
	
43.3
let obj = {
	a: ['a', 'b', 'c',],
	b: '111',
	c: 'eee',
};
let json = `{
	"a": ["a", "b", "c"],
	"b": "111",
	"c": "eee"
}`;
console.log(obj)
console.log(json)
  
44.1
let json = '[1,2,3,4,5]';
  let arr = JSON.parse(json);
console.log(arr);
	
44.2
const json = `{
    "data1": [1,2,3],
    "data2": [4,5,6],
    "data3": [7,8,9]
}`

const arr = Object.values(JSON.parse(json))

const getArraySum = (data) => data.reduce((acc, value) => acc + value, 0)

const sumOfArrValues = arr.reduce((acc, value) => {
  return acc + getArraySum(value)
}, 0)

console.log(sumOfArrValues)

45.1
let json = ['user1', 'user2', 'user3', 'user4', 'user5'];

let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];

let json = JSON.stringify(arr);
console.log(json);

46.1
let json = '["user1","user2","user3","user4","user5"]';

let arr = JSON.parse(json);
arr.push(user6);
	
let res = JSON.stringify(arr);
console.log(res);
	
46.3
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let arr = JSON.parse(json);
arr.push(user4,
	28,
	4000,);

let res = JSON.stringify(arr);
console.log(res);	


