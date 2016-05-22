"use strict";
var Resource = (function () {
    function Resource(name, perClick, perSecond, max, total, image, description) {
        this.name = name;
        this.perClick = perClick;
        this.perSecond = perSecond;
        this.max = max;
        this.total = total;
        this.image = image;
        this.description = description;
    }
    return Resource;
}());
module.exports = Resource;
//# sourceMappingURL=resource.js.map