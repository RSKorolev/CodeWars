function chineseZodiac(year) {
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

    const index = year - 1984;
    const animal = animals[index % 12 < 0 ? (index % 12 + 12) : index % 12];
    const element = elements[Math.floor((index % 10 < 0 ? (index % 10 + 10) : index % 10) / 2)];

    return `${element} ${animal}`;
}
