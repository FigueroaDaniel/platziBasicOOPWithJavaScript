// Modules
function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass {
  constructor({
    name,
    videoId
  }) {
    this.name = name;
    this.videoId = videoId;
  }

  reproducir() {
    videoPlay(this.videoId)
  }
  pausar() {
    videoStop(this.videoId);
  }
}
// Module

class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }
  set name(nuevoNombrecito) {
    if(nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Wey....no");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

const cursoProgBasica = new Course({
  name: 'Curso gratis de programación básica',
});
const cursoDefinitivoHTML = new Course({
  name: 'Curso definitivo de HTML y CSS',
});
const cursoPracticoHTML = new Course({
  name: 'Curso practico de HTML y CSS',
});

class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML
  ]
});
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz"
  ]
});
const escuelaVgs = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal"
  ]
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = { 
      twitter, // this is an easier syntax to twitter = twitter.
      instagram,
      facebook
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
};

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs
  ]
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData
  ]
});