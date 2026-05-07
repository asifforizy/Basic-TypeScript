// ! problem 1 

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}
// const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result);

// ! problem 2 

const reverseString = (input: string): string => {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
};


// ! problem 3 

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
};

// ! problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

// ! problem 5 

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface BookWithReadStatus extends Book {
    isRead: boolean;
}

const toggleReadStatus = (book: Book, isRead: boolean = true): BookWithReadStatus => ({
    ...book,
    isRead,
});

// ! problem 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}



