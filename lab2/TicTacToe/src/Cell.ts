export class Cell {
    cellValue: number ;
    htmlElement: HTMLElement;
    
    constructor(cell: HTMLElement) {
      this.htmlElement = cell;
    }
   
    setCellValue(value: number) {
      switch(value){
        case -1:
          this.htmlElement.textContent = 'O'
          break;
        case 1:
          this.htmlElement.textContent = 'X'
          break;
        default:
          this.htmlElement.textContent = ''
          break;
      }
    }
    fillCell(value: number){
      this.htmlElement.style.backgroundColor = value === 1 ? '#BBBAFF' : '#F0B2D3';
    }
   }
