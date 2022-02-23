enum materials {
    Glass = "Glass",
    Plastic = "Plastic",
    Ceramic = "Ceramic"
}
interface Breakable {
    prop: materials,
    break: (material: materials) => {}
}

class glassMug implements Breakable {
    constructor() {}
    break(): string {
        return "Glass Mug!";
    }
    prop: materials.Glass = materials.Glass
}

class plasticMug implements Breakable {
    constructor() {}
    break(): string {
        return "Plastic Mug!";
    }
    prop: materials.Plastic  = materials.Plastic
}

class ceramicMug implements Breakable {
    constructor() {}
    break(): string {
        return "Ceramic Mug!";
    }
    prop: materials.Ceramic = materials.Ceramic
}

const glass = new glassMug
console.log(glass.break())

const plastic = new plasticMug
console.log(plastic.break())

const ceramic = new ceramicMug
console.log(ceramic.break())

let arr = [glass, plastic, ceramic];
arr.forEach(element => {
    console.log(element.break())}
)
const found = arr.find(element => element === glass);
console.log(found);

const materialArray = arr.map((e) => e.prop)
console.log(materialArray);