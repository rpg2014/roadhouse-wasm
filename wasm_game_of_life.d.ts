/* tslint:disable */
export enum Cell {
  Dead,
  Alive,
}
/**
*/
/**
*/
export class Universe {
  free(): void;
/**
*/
  tick(): void;
/**
* @param {number} width 
* @param {number} height 
* @returns {Universe} 
*/
  static new(width: number, height: number): Universe;
/**
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  cells(): number;
/**
* @returns {string} 
*/
  render(): string;
/**
*/
  randomize(): void;
/**
*/
  clear(): void;
/**
* @param {number} row 
* @param {number} column 
*/
  toggle_cell(row: number, column: number): void;
}
