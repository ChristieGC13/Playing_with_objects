var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

    //Print/log John's age
    console.log(users[1].age);
    
    //Print/log name of first object
    console.log(users[0].name);

    //Print/log name and age of each user using a for loop.
        for (let i = 0; i < users.length; i++) {
             console.log(`${users[i].name} - ${users[i].age}`);
        }

