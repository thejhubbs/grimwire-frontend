//RELATIONSHIP SCALE
//5- alternate names/forms/titles
//4- properties/qualities
//3- associated/attributed
//2- Family/related
//1- stories
//0- source

//STRENGTH SCALE
//10- well documented & generally undebated
//9- some people do argue
//5- usually/traditionally was
//3- has been
//1- has been argued by some

export default [
    {
        mainId: 1,
        connectedId: 2,
        relationship: 3,
        strength: 10,
        description: "How they are connected.",
        aboutText: "A wall of text"
    },
    {
        mainId: 2,
        connectedId: 3,
        relationship: 3,
        strength: 10,
        description: "How they are connected.",
        aboutText: "A wall of text"
    },
    {
        mainId: 1,
        connectedId: 3,
        relationship: 3,
        strength: 10,
        description: "How they are connected.",
        aboutText: "A wall of text"
    },
]
