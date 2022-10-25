
// Naming variable
/* let a, b, c;
a = 1;
b = 1;
c = 1; */
let x = 1, y = 2;
let [a,b,c] = [1, 2, 3]

// Boolean operation
const FREE_SHIPPING_MIN_PRICE = 50;
let daysCartActive = 5;
let currentYear = new Date().getFullYear();
const isShippingFree = cart.total > FREE_SHIPPING_MIN_PRICE;

// Loop array 
const books = ['book1', 'book2', 'book3'];
books.forEach((book) => {
    read(book);
});

// Naming object
const book = {
    id : 1,
    title : "Amazing Book",
    price : 200000,
    pages : 240
}

// Destructuring
/* const id = book.id
const title = book.title
const price = book.price
const pages = book.pages */
// do this instead
const { id, title, price, pages } = book;

// Better function parameter and !blocking
const sendEmail = ({to, subject, body}) => {
    if(!to) return 'Please Enter A Recipient'
    // Send Email
}
sendEmail({
    body : 'This is terible',
    to : 'abc@yahoo.co.id',
    subject : 'HELP'
})

// Default value 
function favoriteColor(color = "blue") {
    // ..
    return color;
}
console.log(favoriteColor()) // it should be "blue"

// Condition simple
if(isAdmin){
    // do something
}
if(!isAdmin){
    // do something
}

// Template Literal
const firstName = "Billy", lastName = "Bob";
const greeting = `Hello ${firstName} ${lastName}`;
console.log(greeting)

// Use async instead promise 
// Nested code (promise)
const sharePostProm = () => {
    getPost().then((post) => {
        sendTweet(post.url, `This is an awesome article : ${post.title}`).then(() => {
            console.log('tweet')
        })
    })
}
// Linear code (async)
const sharePost = async () => {
    const post = await getPost()
    const tweet = await sendTweet(post.url, `This is an awsome article : ${post.title}`)
    console.log('tweet', tweet)
}

// Single responsibility principle
/* function emailUsers(users) {
    users.forEach(user => {
        const userRecord = database.lookup(user);
        if(userRecord.isEmailNotification()){
            sendEmail({to : user});
        }
    })
} */
function emailUsers(users) {
    users
        .filter(isUserEmailNotification)
        .forEach(sendEmail);
}
function isUserEmailNotification(user) {
    const userRecord = database.lookup(user);
    return userRecord.isEmailNotification();
}

// Don't use flag | function should be have 1 responsibility
/* function saveImage(name, type) { // ${type} is flag so dont do this
    switch (type) {
        case 'jpeg':
            fs.create(`./jpeg/${name}`)
            break;
        case 'png':
            fs.create(`./png/${name}`)
            break;
        default:
            fs.create(name)
            break;
    }
} */
function saveImage(name){
    fs.create(name)
}
function saveJpegImage(name){
    fs.create(`./jpeg/${name}`)
}
function savePngImage(name){
    fs.create(`./png/${name}`)
}

// Avoid side effect
/* let name = "Billy Bob"
function splitIntoNames() {
    name = name.split(" ");
}
splitIntoNames();
console.log(name); // this is not string anymore
 */
let name = "Billy Bob"
let nameSplit = splitIntoNames(name);
function splitIntoNames() {
    return name.split(" ");
}
console.log(name); 

const addUser = (users, user) => {
    return [...users, user];
}

// Spread Operator
const namePerson = {
    firstName : "Billy",
    lastName : "Bob"
}
const hobbies = {
    basketball : true,
    golf : false,
    videoGames : true
}
const person = {
    ...namePerson,
    ...hobbies
}

// Optional Chaining
// const street = person && person.address && person.address.street;
const street = person?.address?.street;

// Ternary Operator
/* let number = 10;
let result;
if (number < 0) {
    result = "Negative"
} else {
    result = "Positive"
}
console.log(result) */
let number = 10;
let result = number < 0 ? "Negative" : "Positive";
console.log(result)

// Default values
/* let colorScheme;
let scheme = getColorScheme();
if(scheme) {
    colorScheme = scheme
} else {
    colorScheme = 'dark'
} */
let colorScheme = getColorScheme() || 'dark';

// Swapp 2 variables
let firstNumber = 10, secondNumber = 20;
[firstNumber, secondNumber] = [secondNumber, firstNumber]
console.log(firstNumber, secondNumber)

// Arrow Function
const add = (num1, num2) => num1 + num2 
console.log(add(2,2))

// String to number
/* 
let quantity = parseInt('123')
let total = parseFloat('42.1')
*/
let quantity = +'123'
let total = +'42.1'