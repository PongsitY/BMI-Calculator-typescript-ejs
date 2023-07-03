var BMI = /** @class */ (function () {
    // Initialize of weight & height
    function BMI(w, h) {
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.w = w;
        this.h = h;
    }
    Object.defineProperty(BMI.prototype, "getBMI", {
        // Getters
        get: function () {
            var mh = this.h / 100;
            return this.w / Math.pow(mh, 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BMI.prototype, "getBMIDesc", {
        get: function () {
            // Get BMI value
            var bmiVal = this.getBMI;
            // Check BMI description
            var bmiDesc = "";
            if (bmiVal < 18.5) {
                bmiDesc = "Underweight";
            }
            else if (bmiVal >= 18.5 && bmiVal < 25) {
                bmiDesc = "Normal weight";
            }
            else if (bmiVal >= 25 && bmiVal < 30) {
                bmiDesc = "Overweight";
            }
            else {
                bmiDesc = "Obese";
            }
            return bmiDesc;
        },
        enumerable: false,
        configurable: true
    });
    return BMI;
}());
function CalculateBMI(w, h) {
    if (w == null || h == null) {
        alert("Please specify weight and height");
        return;
    }
    if (w == 0 || h == 0) {
        alert("Invalid weight or height");
        return;
    }
    var res = new BMI(w, h);
    // Apply to html page
    var resDesc = document.getElementById("resDesc");
    var resVal = document.getElementById("resVal");
    resDesc.textContent = "You are ".concat(res.getBMIDesc, ".");
    resVal.textContent = res.getBMI.toString();
    // Description style
    res.getBMIDesc != "Normal weight" ? resDesc.style.color = "#FE0000" : resDesc.style.color = "#237E49";
}
document.addEventListener("DOMContentLoaded", function () {
    var submitBtn = document.getElementById("subBtn");
    submitBtn.addEventListener("click", function (e) {
        // Get data input
        var wElement = document.getElementById("w");
        var w = wElement.value;
        var hElement = document.getElementById("h");
        var h = hElement.value;
        console.log(w, h);
        CalculateBMI(parseInt(w), parseInt(h));
    });
});
