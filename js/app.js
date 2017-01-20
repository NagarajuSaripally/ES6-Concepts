
///////////////// Find Example ////////////////
/*
  The main purpose of find method is to find a specific value
  we anticipated get out from that array or object
  It iterates through the array or object until it returns the
  true, when ever it returns the first true it comes out of the
  iterator. If we have two records with same name, it returns the
  first record.
*/


// Example - 1

const users = [
	{
		name : 'Bill'
	},
	{
		name : 'Andy'
	},
	{
		name : 'Alex'
	}
];


const lookingUser = users.find(function(user){
  return user.name == 'Alex';
});

console.log(lookingUser);

// Example - 2

function Car (model){
	this.model = model;
}

const cars = [
	new Car('Honda'),
	new Car('Toyota'),
	new Car('BMW'),
	new Car('Ford')
]

const findCar = cars.find(function(car){
	return car.model == 'Honda';
})

console.log(findCar);

// Example - 3 

const posts = [
 { id : 1, title: 'New Post'},
 { id: 2, title: 'Old Post'}
];

const comment = {postId: 1, content: "Great Post"}

function postForComment(posts, comment) {
	return posts.find(function(post) {
		return post.id === comment.postId
	})
}

console.log(postForComment(posts, comment));





// Every & some Helpers


//Example - 1
const computers = [
	{ name: 'Apple', ram : 24  },
	{ name: 'Dell', ram : 4  },
	{ name: 'Compaq', ram : 32  }
];

const allComputersCanRunProgram =  computers.every(function(computer){
									 	return computer.ram > 16;
									});

console.log(allComputersCanRunProgram);

const onlySomeComputersCanRunProgram = computers.some(function(computer){
										 	return computer.ram > 16;
										});;

console.log( onlySomeComputersCanRunProgram );


// Example -2

const names = [
  'Alexnadria',
  'Matthew',
  'Joe'
]


const nameLengthGreatherThanFour = names.every( name => name.lenth > 4 );

console.log( nameLengthGreatherThanFour );

const someLengthGreatherThanFour = names.some( name => name.length > 4 );

console.log( someLengthGreatherThanFour );


// Example -3 

function Field( value ){

	 this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
}

const username = new Field('2cool');
const password = new Field ('my_password');
const birthdate = new Field('10/10/2010');


const fileds = [username, password, birthdate];

const isValid = fileds.every(function(field){
    return field.validate();
});

console.log(isValid);


// Reduce Helper

//Example -1 


const intNumbers = [10,20,30];
let sum = 0;


sum = intNumbers.reduce(function(sum, number){
         
         return sum + number;
},0);



console.log(sum);

// Example - 2


const primaryColors = [
   {color: 'red'},
   {color: 'blue'},
   {color: 'green'}
];

const colorsList = primaryColors.reduce(function( accumalator, primaryColor ) {
    accumalator.push(primaryColor.color);
    return accumalator;
}, []);

console.log(colorsList);

// Example - 3

var string_para = '(())))';

function balancedParens ( str ) {

   return !str.split('').reduce(function(accumalator, char){
        if( accumalator < 0) { return accumalator;
        }
   		if( char == "("){
   			return ++accumalator;
   		}

   		if( char == ')') {
   			return --accumalator;
   		}

   		return accumalator;
   }, 0);

}


console.log( balancedParens ('()') ) ;

