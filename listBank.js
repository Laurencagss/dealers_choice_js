const RoseFamily = [
    {id: 1, name: 'Moira Rose', quote: "The world is falling apart around us and Im dying inside."},
    {id: 2, name: 'Johnny Rose', quote: "Tweet Us On Facebook!"},
    {id: 3, name: 'Alexis Rose', quote: "There is nothing wrong with asking for what you deserve."},
    {id: 4, name: 'David Rose', quote:  "In case you didn't know, I'm wildly popular. Some might even venture to call me beloved."},
    {id: 5, name: 'Patrick Brewer', quote: "Rose Apothecary... you know, it's just pretentious enough."},   
];

const list = () => {
    return [...RoseFamily]
}

const find = (id) => {
    const rose = RoseFamily.find( rose => rose.id === +id);
    return {...rose}
}

module.exports = {list, find}; 