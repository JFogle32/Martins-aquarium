// *
//  *  To get you started, here's some properties of Bart.
//  *  You need to add more properties to complete his
//  *  representation as an object. Then add all the other
//  *  fish to the collection.
//  */
const database = {
    fish: [
        {
            name: "George",
            species: "Blow Fish",
            food: "Fish Pellets",
            size: 4 ,
            location:"Lake Erie",
            image: ""https://i.ytimg.com/vi/dQDrKPJ7NuI/hqdefault.jpg",

        },
        {
            name: "Betty",
            species: Gold Fish",
            food: "Fish Food",
            size: 3 ,
            location:"Fish Creek" ,
            image: https://upload.wikimedia.org/wikipedia/commons/b/b9/%E3%83%AF%E3%82%AD%E3%83%B320120701.JPG",

        } ,

        {
            name: "Fishy",
            species: "Trout" ,
            food: "Other Fish",
            size: 7 ,
            location:"Ohio River" ,
            image:
        }
    ]

    export const getFish = () => {
        return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
    }