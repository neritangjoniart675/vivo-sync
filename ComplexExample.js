/*
   Filename: ComplexExample.js
   Purpose: Illustrate a complex JavaScript example
   Content: A simulation of a virtual zoo management system
   
   This code simulates a virtual zoo management system, which allows the user to perform various operations:

   1. Add a new animal to the zoo with its name, species, age, and category.
   2. Display a list of all animals in the zoo along with their information.
   3. Search for an animal by its name and display its information.
   4. Remove an animal from the zoo.
   5. Calculate the average age of all animals in the zoo.
   6. Calculate the total number of animals in the zoo.
*/

class Animal {
  constructor(name, species, age, category) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.category = category;
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(name, species, age, category) {
    const animal = new Animal(name, species, age, category);
    this.animals.push(animal);
  }

  displayAllAnimals() {
    console.log("All Animals in the Zoo:");
    this.animals.forEach((animal) => {
      console.log(
        `Name: ${animal.name}, Species: ${animal.species}, Age: ${animal.age}, Category: ${animal.category}`
      );
    });
  }

  searchAnimalByName(name) {
    const animal = this.animals.find((animal) => animal.name === name);
    if (animal) {
      console.log(
        `Name: ${animal.name}, Species: ${animal.species}, Age: ${animal.age}, Category: ${animal.category}`
      );
    } else {
      console.log(`Animal with name "${name}" not found.`);
    }
  }

  removeAnimal(name) {
    const index = this.animals.findIndex((animal) => animal.name === name);
    if (index !== -1) {
      this.animals.splice(index, 1);
      console.log(`Animal with name "${name}" has been removed.`);
    } else {
      console.log(`Animal with name "${name}" not found.`);
    }
  }

  calculateAverageAge() {
    if (this.animals.length === 0) {
      console.log("No animals in the zoo.");
      return;
    }
    const totalAge = this.animals.reduce((sum, animal) => sum + animal.age, 0);
    const averageAge = totalAge / this.animals.length;
    console.log(`Average age of animals in the zoo: ${averageAge.toFixed(2)}`);
  }

  calculateTotalCount() {
    const totalCount = this.animals.length;
    console.log(`Total number of animals in the zoo: ${totalCount}`);
  }
}

// Create a new zoo
const zoo = new Zoo();

// Add animals to the zoo
zoo.addAnimal("Lionel", "Lion", 5, "Predator");
zoo.addAnimal("Gerald", "Giraffe", 10, "Herbivore");
zoo.addAnimal("Ellie", "Elephant", 20, "Herbivore");
zoo.addAnimal("Peter", "Penguin", 3, "Bird");

// Display all animals in the zoo
zoo.displayAllAnimals();

// Search for an animal by name
zoo.searchAnimalByName("Lionel");

// Remove an animal from the zoo
zoo.removeAnimal("Gerald");

// Calculate average age of all animals
zoo.calculateAverageAge();

// Calculate total number of animals
zoo.calculateTotalCount();
