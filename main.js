class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack = "";
        switch (this.type) {
            case "mago":
                attack = "usou magia";
                break;
            case "guerreiro":
                attack = "usou espada";
                break;
            case "monge":
                attack = "usou artes marciais";
                break;
            case "ninja":
                attack = "usou shuriken";
                break;
            default:
                attack = "usou um ataque indefinido";
        }
        console.log(`O ${this.type} atacou usando ${attack}`);
    }
}

function inity() {

    const heroes = [
        new Hero("Gandalf", 100, "mago"),
        new Hero("Aragorn", 35, "guerreiro"),
        new Hero("Bruce Lee", 32, "monge"),
        new Hero("Hanzo", 28, "ninja"),
    ];
    
    for (const index of heroes) {
        index.attack();
    }

}

window.onload = () => {
    alert("Aperte F2, e entre em console")

    const start = setTimeout(inity, 5000)
}
