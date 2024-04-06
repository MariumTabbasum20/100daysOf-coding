//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name: string= "Marium"; //save name
console.log(Name.toLowerCase()); // this showes the name in all small letters
console.log(Name.toUpperCase()); //this showes the name in all capital letters
console.log(Name.charAt(0).toLowerCase + Name.slice().toUpperCase());