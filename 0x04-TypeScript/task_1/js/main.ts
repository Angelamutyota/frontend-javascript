interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // allow arbitrary extra props (boolean | string | number | undefined)
  [key: string]: string | number | boolean | undefined;
}

// Examples

const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'Nairobi',
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'London',
  // extra property allowed thanks to index signature
  contract: true,
};

// The example from the task
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('teacher1:', teacher1);
console.log('teacher2:', teacher2);
console.log('teacher3:', teacher3);

// Trying to reassign readonly properties will raise a TS error (uncomment to see the error):
// teacher1.firstName = 'Alice'; // Error: Cannot assign to 'firstName' because it is a read-only property.
