import { Injectable } from '@angular/core';
import { Card } from './../../app/dashboard/models/card';

@Injectable()
export class SharedDataService {
    private _cardsList: Card[];

    constructor () {};

    set cardsList(value){
        this._cardsList = value;
    }

    get cardsList(){
        return this._cardsList;
    }
}
