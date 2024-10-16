import { Injectable } from '@angular/core';

interface Cluster {
    clusterName: string;
    mpgs: string[];
    priceDrivers: string[];
    selectedMpg?: string | null;
  }

@Injectable({
    providedIn: 'root',
})
export class GlobalService {
    
    // Define your global variables here
    private _graphData: Number = 0;
    // Getter and Setter for _are
    get graphValue(): Number {
        return this._graphData;
    }

    set graphValue(value: Number) {
        this._graphData = value;
    }
}
