        //This is my first JavaScript code!
        console.log('Hello World');

    let name1 = "Mosh";

    console.log(name1);

        // cannot be a reserved keywords
        //should be meaningful
        //cannot start with a number(1name)
        //cannot contain a space or hyphen(-)
        // are case-sensitive

        let first1Name = 'Moshi', last1Name = 'Hamedani';
        let FirstName;

        let interestRate = 0.3; //let laseb numbreid definida
        interestRate = 1; // const ei lase
        console.log(interestRate);

        let name2 = 'Heilo'; //string literal
        let age = 28; // number literal
        let isApproved = false; // boolean literal
        let firstName = undefined;
        let lastName = null;
        let selectedColor = 'Green';
        let number = 30;

        let nimi = 'Tiitsmaa';
        let vanus = 33;
        let person = {
            nimi: 'Tiitsmaa',
            vanus: 33
        };

        //dot notation
        person.name = 'John';


        console.log(person.name);

        //bracket notation
        person ['name'] = 'Mary';
     

        let selection = 'naame';
        person[selection] = 'Maary'

        console.log(person.name);

        let selectedColors = ['red','blue'];
        selectedColors[2] = 1;
        console.log(selectedColors.length);

        var a = prompt ('a = ?');
        var b = prompt ('b = ?');

        a = Number(a);
        b = Number(b);

        var sum = a + b;

        document.write('The sum is:' + sum);

        function greet(name, lastName) {
            console.log('Hello, ' + name + ' ' + lastName);
        }

        //calculating a value
        function square(number) {
            return number * number;
        }
        console.log(square(2));


        greet('Eva', 'Elise');



