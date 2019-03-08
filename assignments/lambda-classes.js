// CODE here for your Lambda Classes

//Parent
class Student {
  
    constructor(learning) {
    this.name = learning.name;
    this.location = learning.location;
    this.age = learning.age;
    this.gender = learning.gender;
    this.saying = learning.saying;

  }

  catchPhrase() {
    return `My name is ${this.name} my catchphrase is "${this.saying}"`;
  }
}
//Child
 class Instructor extends Student {
  
    constructor(teacher) {
        super(teacher);        
        this.favLanguage = teacher.favLanguage;
        this.specialty = teacher.specialty;
    }
    
    break() {
        return `${this.name} says ${this.breaktime}`;
      }
      teach() {
        return `Hello Lambda student! today we are gonn learn ${this.favLanguage}`;
    
      }
 }

 const asa = new Instructor({
    name: 'Asa',
    location: 'Bakersfeild, CA',
    age: 31,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    saying: `wanna play poker? cause i got an Asa up my sleave!`,
    breaktime: `I'm watching you!! Take a break and walk away from your computer`
  });

  const john = new Instructor({
    name: 'John',
    location: 'Salt Lake City, UT',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    saying: `Well lets see if this works!`,
    breaktime:`ok we are at our 30 miniutes so take a break and i'll see you in 5`
  });

  const josh = new Student({
    name: 'Josh',
    location: 'Hamilton, MO',
    age: 33,
    gender: 'male',
    saying: `i don't know what i'm doing`
  });

  const sarah = new Student({
    name: 'Sarah',
    location: 'Home',
    age: 29,
    gender: 'female',
    saying: `Did anyone bring snacks`
  });

  const kevin = new Student({
    name: 'Kevin',
    location: 'Austin, TX',
    age: 24,
    gender: 'male',
    saying: `Go with the flow bro`
  });


  const grace = new Student({
    name: 'Grace',
    location: 'Mimia, FL',
    age: 17,
    gender: 'female',
    saying: `Just Do it`
  });

  //console.log(grace.name());
  //console.log(josh.location());
  //console.log(kevin.age());
  //console.log(sarah.gender());

  //teach
  console.log(john.teach());
  console.log(asa.teach());
 
  //break
  console.log(john.break());
  console.log(asa.break());
  
  //CatchPhrase
  console.log(asa.catchPhrase());
  console.log(john.catchPhrase());
  console.log(josh.catchPhrase());
  console.log(sarah.catchPhrase());
  console.log(kevin.catchPhrase());
  console.log(grace.catchPhrase());

