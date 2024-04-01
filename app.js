let Oxford=[
    {
        id: 1,
        name: "James",
        surname: "Walker",
        age: 21,
        hobby: "Yoga",
        faculty_id: 62,
        grades:[92,99,100,100,90]
    },
    {
        id: 2,
        name: "Juan",
        surname: "Adams",
        age: 21,
        hobby: "Coding",
        faculty_id: 19,
        grades:[75,99,78,100,99]
    },
    {
        id: 3,
        name: "Gabriel",
        surname: "Smith",
        age: 21,
        hobby: "Reading book",
        faculty_id: 76,
        grades:[76,99,60,69,90]
    },
    {
        id: 4,
        name: "Gavi",
        surname: "Moore",
        age: 21,
        hobby: "Gardening",
        faculty_id: 172,
        grades:[50,99,100,100,90]
    },
    {
        id: 5,
        name: "Kylie",
        surname: "Evans",
        age: 21,
        hobby: "Swimming",
        faculty_id: 62,
        grades:[60,99,70,50,90]
    },
    {
        id: 6,
        name: "Jonh",
        surname: "Jones",
        age: 21,
        hobby: "Painting",
        faculty_id: 172,
        grades:[90,99,79,80,90]
    },
    {
        id: 7,
        name: "Samuel",
        surname: "Green",
        age: 21,
        hobby: "Traveling",
        faculty_id: 62,
        grades:[92,99,20,100,10]
    },
    {
        id: 8,
        name: "Tedd",
        surname: "Walker",
        age: 21,
        hobby: "Playing a musical instrument",
        faculty_id: 76,
        grades:[92,99,100,100,90]
    },
    {
        id: 9,
        name: "Julia",
        surname: "Taylor",
        age: 21,
        hobby: "Playing chess",
        faculty_id: 62,
        grades:[100,100,100,100,100]
    },
    {
        id: 10,
        name: "Tyler",
        surname: "Baker",
        age: 21,
        hobby: "Cycling",
        faculty_id: 76,
        grades:[92,40,100,70,20]
    },
];

let faculties = [
    {
        id: 76,
        faculty_name: "Law"
    },
    {
        id: 62,
        faculty_name: "Medical"
    },
    {
        id: 172,
        faculty_name: "Engineering"
     },
     {
        id: 19,
        faculty_name: "IT"
     },
];

function ortalama(grades) {
    let toplam = 0;
    for (let grade of grades) {
        toplam += grade;
    }
    return toplam / grades.length;
}

function kesr(grades) {
    let toplam = 0;
    for (let grade of grades) {
        toplam += grade;
    }
    let ortalama = toplam / grades.length;
    if (ortalama < 80) {
        return "You failed";
    } else {
        return "Passed";
    }
}

Oxford.map((student) => {
    let group = faculties.find((t) => t.id === student.faculty_id);
    let average = ortalama(student.grades);
    let result = kesr(student.grades);
    console.log(`${student.name} ${student.surname}, ${group.faculty_name} , Result: ${result} , >> Score: ${average}`);
});

