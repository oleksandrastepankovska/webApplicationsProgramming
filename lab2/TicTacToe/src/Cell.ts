export class Cell {
  cellValue: number;
  htmlElement: HTMLElement;

  constructor(cell: HTMLElement) {
  this.htmlElement = cell;
  this.cellValue = 0;
  }

  setCellValue(value:number){
    const crossImage = new Image();
    const circleImage = new Image();

    crossImage.classList.add("img");
    circleImage.classList.add("img");

    crossImage.src="../assets/x.png";
    circleImage.src="../assets/O.png";

    if (value == 1 && this.cellValue == 0) {
      this.cellValue = value;
      this.htmlElement.appendChild(crossImage);
    } else if (value == -1 && this.cellValue ==0){
      this.cellValue = value;
      this.htmlElement.appendChild(circleImage)
    }
  }
}