import { ICurrenciesResponse } from "./api.model";

export interface IConverterForm {
    amount: number;
    from: string;
    to: string;
}

export class CurrenciesResponse {
    short: string | null;
    long: string | null;
    constructor(currency: ICurrenciesResponse) {
        this.short = Object.keys(currency)[0] || null;
        this.long = currency[this.short as string] || null;
    }
}

export class ConvertedHistoryItem {
    amount: number;
    from: string;
    to: string;
    date = new Date()
    constructor(item: ConvertionResponse) {
        this.amount = item?.amount;
        this.from = item?.from;
        this.to = item?.to;
    }
}

export class ConvertionResponse {
    amount: number;
    from: string;
    to: string;
    rate: number;
    constructor(data: IConverterForm, rate: number) {
        this.amount = data.amount;
        this.from = data.from;
        this.to = data.to;
        this.rate = rate;
    }
}