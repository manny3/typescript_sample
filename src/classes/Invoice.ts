import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){
    // this.client = c
    // this.details = d
    // this.amount = a
  }

  format() {
    return `${this.client} owes £${this.details} for ${this.amount}`
  }
}