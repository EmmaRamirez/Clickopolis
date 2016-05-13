"use strict";
var Citizen = (function () {
    function Citizen(name, image, description, foodContribution, prodContribution) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.foodContribution = foodContribution;
        this.prodContribution = prodContribution;
    }
    return Citizen;
}());
module.exports = Citizen;
//# sourceMappingURL=citizen.js.map