export const ADD_CONTACT = 'ADD_CONTACT';

export function addContact({id, name, rating, img, Description, Likes, Dislikes}) {
    return {
        type: ADD_CONTACT,
        id,
        name,
        rating,
        img,
        Description,
        Likes,
        Dislikes
    }
}