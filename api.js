const MEMES_MOCK = [
    {
        id: '87743020',
        name: 'Two Buttons',
        url: 'https://i.imgflip.com/1g8my4.jpg',

        width: 600,

        heigth: 908



    },
    {    

     

        id: '222403160',
        name: 'Bernie I Am Once Again Asking For Your Support',
        url: 'https://i.imgflip.com/3oevdk.jpg',

        width: 1200,

        heigth: 800


    }
  
]

class Api{

    constructor(){
        this.baseUrl = 'https://api.imgflip.com'
    }

  
    getMemes(){

        return fetch(`${this.baseUrl}/get_memes`)
        .then(data =>  data.json())

        
    }


    }