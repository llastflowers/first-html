function showAlert() {
    alert('Just kidding, it does this!');
}

function logHello () {
    console.log('Hello!')
}

const dog = {
    name: 'fido',
    color: 'brown',
    weight: 500,
}

console.log(dog.name);
dog.name = 'rover'

console.log(dog.name);

if(dog.name === 'rover') {
    console.log('red rover, come over')   
} else if (dog.name === 'spot') {
    console.log('you are a normal dog')
} else if (dog.name === 'timothy') {
    console.log('that is a person name')
} else {
    console.log('you are just a normal dog')
}

// count up to five
const veggies = ['carrot', 'potato', 'turnip'];

for (let i = 0; i <= 5; i++) {
    if(i === 1) {
        console.log(veggies[i])
    }
}