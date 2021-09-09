var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c
        // this.details = d
        // this.amount = a
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.details + " for " + this.amount;
    };
    return Invoice;
}());
export { Invoice };
