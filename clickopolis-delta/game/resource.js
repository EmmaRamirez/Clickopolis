"use strict";
var Resource = (function () {
    function Resource(name, perClick, perSecond, max, total) {
        this.name = name;
        this.perClick = perClick;
        this.perSecond = perSecond;
        this.max = max;
        this.total = total;
    }
    return Resource;
}());
module.exports = Resource;
//# sourceMappingURL=resource.js.map