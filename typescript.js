var materials;
(function (materials) {
    materials["Glass"] = "Glass";
    materials["Plastic"] = "Plastic";
    materials["Ceramic"] = "Ceramic";
})(materials || (materials = {}));
var glassMug = /** @class */ (function () {
    function glassMug() {
        this.prop = materials.Glass;
    }
    glassMug.prototype["break"] = function () {
        return "Glass Mug!";
    };
    return glassMug;
}());
var plasticMug = /** @class */ (function () {
    function plasticMug() {
        this.prop = materials.Plastic;
    }
    plasticMug.prototype["break"] = function () {
        return "Plastic Mug!";
    };
    return plasticMug;
}());
var ceramicMug = /** @class */ (function () {
    function ceramicMug() {
        this.prop = materials.Ceramic;
    }
    ceramicMug.prototype["break"] = function () {
        return "Ceramic Mug!";
    };
    return ceramicMug;
}());
var glass = new glassMug;
console.log(glass["break"]());
var plastic = new plasticMug;
console.log(plastic["break"]());
var ceramic = new ceramicMug;
console.log(ceramic["break"]());
var arr = [glass, plastic, ceramic];
arr.forEach(function (element) {
    console.log(element["break"]());
});
var found = arr.find(function (element) { return element === glass; });
console.log(found);
var materialArray = arr.map(function (e) { return e.prop; });
console.log(materialArray);
