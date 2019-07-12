let dbconfig=require('../dbconfig/db-connect');

dbconfig.connect(function (error) {
    if(error){
        console.log('Db Connection error');
        process.exit(1);

    }else{
        console.log('connected successflly');
        dbconfig.get().collection('product').insertMany([{
            imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
            title: 'Gothic Video',
            description: 'Awesome game!',
            price: '30'
        },{
            imagePath: 'https://images.eurogamer.net/2019/articles/2019-07-10-18-26/pubg.jpg',
            title: 'pubg Video',
            description: 'fantastic game!',
            price: '20'
        },{
            imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
            title: 'candy Video',
            description: 'wow game!',
            price: '10'
        },{
            imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61tTFrnxyShUviPA7y66Ggk2H3zqkqjfcRh0EcE1GG9ZmoXk',
            title: 'fortnite Video',
            description: 'good game!',
            price: '40'
        }
        ]);

    }

});


