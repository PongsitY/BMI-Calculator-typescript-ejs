class BMI {
  w: number;
  h: number;

  // Initialize of weight & height
  constructor(w: number = 0, h: number = 0) {
    this.w = w;
    this.h = h;
  }

  // Getters
  get getBMI(): number {
    let mh = this.h / 100;
    return this.w / mh ** 2;
  }

  get getBMIDesc(): string {
    // Get BMI value
    let bmiVal = this.getBMI;

    // Check BMI description
    let bmiDesc = "";
    if (bmiVal < 18.5) {
      bmiDesc = "Underweight";
    } else if (bmiVal >= 18.5 && bmiVal < 25) {
      bmiDesc = "Normal weight";
    } else if (bmiVal >= 25 && bmiVal < 30) {
      bmiDesc = "Overweight";
    } else {
      bmiDesc = "Obese";
    }

    return bmiDesc;
  }
}

function CalculateBMI(w: number, h: number): void {
  if (w == null || h == null) {
    alert("Please specify weight and height");
    return;
  }

  if (w == 0 || h == 0) {
    alert("Invalid weight or height");
    return;
  }

  let res = new BMI(w, h);

  // Apply to html page
  let resDesc = document.getElementById("resDesc") as HTMLHeadingElement;
  let resVal = document.getElementById("resVal") as HTMLHeadingElement;
  resDesc.textContent = `You are ${res.getBMIDesc}.`;
  resVal.textContent = res.getBMI.toString();

  // Description style
  res.getBMIDesc != "Normal weight" ? resDesc.style.color = "#FE0000" : resDesc.style.color = "#237E49";
}

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("subBtn") as HTMLButtonElement;

  submitBtn.addEventListener("click", (e) => {
    // Get data input
    const wElement = document.getElementById("w") as HTMLInputElement;
    const w = wElement.value;
    const hElement = document.getElementById("h") as HTMLInputElement;
    const h = hElement.value;
    console.log(w, h);
    CalculateBMI(parseInt(w), parseInt(h));
  });
});
