export default [
    {
        id: 0,
        name: "Tarot Cards",
        originalPantheonId: 1,
        featuredPantheonIds: [2, 3],
        theoryText: "",
        historyText: "",
        description: "A set of 78 cards used for divination",
        totalNumber: 78,
        specificOrder: true,
        thumbnail: "https://cdn5.vectorstock.com/i/1000x1000/75/94/tarot-cards-vector-77594.jpg",
        images: ["https://images2.selzstatic.com/items/81726/5wvangpwqch/original.png",
        "https://ae01.alicdn.com/kf/HTB1mv3catfvK1RjSspoq6zfNpXay/Mystical-Manga-Tarot-Cards-English-Chinese-Factory-Made-High-Quality-Tarot-Cards-Game-Board-Game.jpg_q50.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91dz8frwHlL.jpg"],
        extraInfoDefault: { division: "" }
    },
    {
        id: 1,
        name: "Hebrew Letters",
        originalPantheonId: 1,
        featuredPantheonIds: [2, 3],
        theoryText: "",
        historyText: "",
        description: "Ancient Hebrew Letters, the aleph-beit",
        totalNumber: 22,
        specificOrder: true,
        thumbnail: "",
        images: [],
        extraInfoDefault: { sound: "", value: "",  spelling: "", meaning: ""}
    },
    {
        id: 2,
        name: "Dieties",
        originalPantheonId: 1,
        featuredPantheonIds: [2, 3],
        theoryText: "",
        historyText: "",
        description: "Gods & Goddesses",
        totalNumber: null,
        specificOrder: false,
        thumbnail: "",
        images: [],
        extraInfoDefault: { dominionOver: "", parents: "" }
    }
]
