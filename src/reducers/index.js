import { ADD_CONTACT } from '../actions/index'

const initialContactState = [
    {
        "id": "andrew",
        "name": "Andrew Amernante",
        "rating": "3",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvho44NZ_732vzMWYuCm58ERNVV8e99SbkrEuo4fzEdk4UIb1",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
            "Dogs",
            "Long walks on the beach",
            "Chopin",
            "Tacos"
        ],
        "Dislikes": [
            "Birds",
            "Red things",
            "Danish food",
            "Dead Batteries"
        ]
    },
    {
        "id": "frank",
        "name": "Frank Wang",
        "rating": "5",
        "img": "http://dashflows.com/wp-content/uploads/sample/2014/07/people-img6.jpg",
        "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        "Likes": [
          "Frank",
          "Manchester United",
          "Football",
          "Programming"
        ],
        "Dislikes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ]
    },
    {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "rating": "5",
        "img": "http://findyournaturalvoice.com/wp-content/uploads/sample/2014/07/people-img10.jpg",
        "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
        "Likes": [
            "Cats",
            "the beach",
            "Chopin",
            "Blue things"
        ],
        "Dislikes": [
            "Birds"
        ]
    },
    {
          
        "id": "diego",
        "name": "Diego Garcia",
        "rating": 2,
        "img": "https://media.bizj.us/view/img/10884778/kathyhabluetzel*166xx2250-3000-75-0.jpg",
        "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
        "Likes": [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        "Dislikes": [
          "Not talking spanish",
          "Chopin"
        ]
    },
    {
        "id": "zuck",
        "name": "Mark Zuckerberg",
        "rating": 4,
        "img": "https://i.redd.it/3a4cmf4eax401.jpg",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
    }
]

function reducer (state = initialContactState, action) {
    const {id,
        name,
        rating,
        img,
        Description,
        Likes,
        Dislikes} = action
    const contact = {id,
        name,
        rating,
        img,
        Description,
        Likes,
        Dislikes}

    switch(action.type) {
        case ADD_CONTACT:
            return [
                ...state,
                contact
            ]
        default:
            return state
    }
}

export default reducer