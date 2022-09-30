import React from 'react';
import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._deviceInBasket = [
            {id: 1, deviceId: 4},
            {id: 1, deviceId: 4},
            {id: 1, deviceId: 4},
            {id: 1, deviceId: 4},
            {id: 1, deviceId: 4}
        ]
        makeAutoObservable(this)
    }
    setBasket(deviceInBasket) {
        this._types = deviceInBasket
    }
    get deviceInBasket() {
        return this._deviceInBasket
    }

}