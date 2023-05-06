// let word1 = "Dylan";
// let word2 = "Israel";

// // const full_name_then = word1 + " " + word2;
// // full_name_now = `${word1} ${word2}`

// // console.log(full_name)

// let example = `${word1}
// ${word2}`

// console.log(example)

// document.getElementById("example").innerText = example

// =========================================

// const personalInformation = [
//     {
//         firstName: "Dylan",
//         lastName:  "Israel",
//         city: "Austin",
//         state: "Texas",
//         zipCode: 73301
//     },
//     {
//         firstName: "Jefferson",
//         lastName:  "Chagas",
//         city: "Blumenau",
//         state: "Maranhão",
//         zipCode: 755555
//     }
// ]

// const {firstName:fn, lastName:ln} = personalInformation[1];

// console.log(`${fn} ${ln}`)

// =========================================

// let [tres, dois, um] = ["Dylan", "Coding God", "Israel"]

// um = "Clementes"

// console.log(um)

// =========================================

// function addressMaker (city, state){
//     const newAddress = {newCity:city, newState: state};

//     console.log(newAddress)
// }

// addressMaker("Austin", "Texas")

// =========================================

// function addressMaker (address) {
//     const {city, state} = address;

// 	const newAddress = {
// 		city: address.city,
// 		state: address.state,
// 		country: "United States"
// 	}
//     console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
// }

// addressMaker({city: "Austin", state: "Texas"})

// =========================================

// let example1 = [1, 2, 3, 4, 5, 6];
// let example2 = [...example1]
// example2.push(7)
// console.log(example2);

// let example1 = {
// 	firstName: "Dylan"
// };

// let example2 = {
// 	...example1
// }

// console.log(example2)

// =========================================

// function add(...nums) {
// 	console.log(nums)
// }

// add(4, 5, 6, 7, 8, 12)

// =========================================

// function add(...nums) {
// 	let total = nums.reduce((x,y)=> x+y);
//     console.log(total)
// }

// add(0, 5, 6, 7, 8, 12)

// =========================================

// function add(numArray = []) {
// 	let total = 0;
//     numArray.forEach((element)=>{
//         total += element;
//     })
//     console.log(total)
// }

// add()

// =========================================

// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(10))

// =========================================

// if (false) {
// 	let example = 5;
// }

// console.log(example)

// let example = 5;
// example = 3;

// console.log(example)

// const exampleList = [];
// exampleList.push(1)

// console.log(exampleList)

// =========================================

// import { data } from "./export.js";

// let updateData = data;

// updateData.push(5);
// console.log(updateData);

// =========================================

// let example = "39-20";

// console.log(example.padStart(12, "X"))


// let example = "Youtube.com/CodingTutorials360";

// console.log(example.padStart(100).length)
// console.log(example.padEnd(1))

// =========================================

// import { Animal, Cat } from "./animal-class.js";

// let cat = new Cat("cat", 4, true);

// cat.legs = 3;
// cat.makeNoise()

// console.log(Animal.return10())
// console.log(cat.metaData)

// =========================================

// function add(param1,){
//     const example = {
//         name: "Dylan",
//     }
//     console.log(example.name,)
// }

// add()

// =========================================

// const apiUrl = "https://anapioficeandfire.com/api/houses/";

// async function getHouses(){
//     const response = await fetch(apiUrl);
//     const json = await response.json();
//     console.log(json[0])
// }

// getHouses()

// function getTop100Campers(){
//     fetch(apiUrl)
//     .then((r)=> r.json())
//     .then((json)=> {
//         console.log(json[0])
//     }).catch((error)=>{
//         console.log("failed")
//     })
// }

// getTop100Campers();

// =========================================

// function resolveAfter3Seconds() {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve("resolved");
// 		}, 3000);
// 	});
// }

// resolveAfter3Seconds().then((data)=>{
//     console.log(data)
// })

// async function getAsyncData(){
//     const data = await resolveAfter3Seconds()
//     console.log(data)
// }

// getAsyncData()

// =========================================

// const exampleSet = new Set([1,1,2,2,3,3]);

// exampleSet.add(5)
// exampleSet.add(17)

// console.log(exampleSet.delete(5));

// exampleSet.clear();

// console.log(exampleSet.size);