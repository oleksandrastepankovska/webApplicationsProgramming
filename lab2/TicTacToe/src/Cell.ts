export {Cell};

class Cell{
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell: HTMLElement) {
        this.htmlElement = cell;
        }
}
