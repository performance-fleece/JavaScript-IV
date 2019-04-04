// CODE here for your Lambda Classes
class Person {
  constructor(base) {
    this.name = base.name;
    this.age = base.age;
    this.location = base.location;
    this.gender = base.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instats) {
    super(instats);
    this.specialty = instats.specialty;
    this.favLanguage = instats.favLanguage;
    this.catchPhrase = instats.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(stustats) {
    super(stustats);
    this.previousBackground = stustats.previousBackground;
    this.className = stustats.className;
    this.favSubjects = stustats.favSubjects;
  }
  listSubjects() {
    let subjstring = this.favSubjects.join(", ");
    console.log(`${this.favSubjects.join(", ")}`);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
    constructor(pmstats) {
        super(pmstats);
        this.gradClassName = pmstats.gradClassName;
        this.favInstructor = pmstats.favInstructor;       
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const delilah = new Instructor({
    name : 'Delilah',
    location : 'Wollacott',
    age : 9,
    gender : 'female',
    favLanguage : 'PugScript',
    specialty : 'Napping',
    catchPhrase : 'Queen stays Queen',
})

const sam = new Student ({
    name: 'Sam',
    location : 'Wollacott',
    age: 9,
    gender: 'male',
    previousBackground : 'Head of Security',
    className : 'WebPT5',
    favSubjects : ['Snoozing', 'Farting', 'Eating']
})

const lauren = new ProjectManager ({
    name : 'Lauren',
    location : 'Wollacott',
    age : 35,
    gender : 'female',
    favLanguage : 'DeliScript',
    specialty : 'Singing',
    catchPhrase : 'Hellllooooooo',
    gradClassName : 'WebPT1',
    favInstructor : 'Delilah',
})

delilah.demo('JavaScript')