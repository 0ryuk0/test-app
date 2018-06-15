import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from './../../models/card';
import { SharedDataService } from './../../../../shared/services/shared-data.service';

// RXJS
import { Observable } from 'rxjs/Rx';
import { DashboardService } from "../../../services/dashboard.service";

// Services

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    cards: Card[];
    cardData: Card[];
    currentInfoObject: Card = {
        _id: '',
        index: 0,
        guid: '',
        isFavourite: false,
        title: '',
        company: '',
        info: '',
        description: ''
    }
    isShow = { fullLoader: false, infoDialog: false, allFav: false};
    isShowFilteredView: boolean;

    constructor(private _dashboardService: DashboardService,
        private _sharedDataService: SharedDataService) {}

    ngOnInit() {
        if(this._sharedDataService.cardsList && this._sharedDataService.cardsList.length > 0){
            this.cards = this._sharedDataService.cardsList;
            this.cardData = Object.assign(this.cards);
        }else{
            this.getCardInfo();
        }
    };

    getCardInfo = () => {
        this.isShow.fullLoader = true;
        this._dashboardService.getCardInfo()
        .subscribe(
            info => {
                this.isShow.fullLoader = false;                    
                this.cards = info;
                this.cardData = Object.assign(this.cards);
                this._sharedDataService.cardsList = info;
              }, // Bind to view
            err => {
                // Log errors if any
                this.isShow.fullLoader = false;
            });
    };
    
    private setFavorite(value, index){
        this.cards['index']['isFavourite'] = value;
        this._sharedDataService.cardsList = this.cards;
    };

    private openDialog(value){
        console.log(value);
        this.currentInfoObject = value;
        this.isShow.infoDialog = true;
    };

    private infoDialogEvents(value){
        this.isShow.infoDialog = false;
    };

    private showAllFav(){
        if(!this.isShow.allFav){
            let result = [];
            result = this.cardData.filter((card) => {
                if(card.isFavourite){
                    return card;
                }
            });
            this.cardData = result;
            this.isShow.allFav = true;
        }else{
            this.cardData = this.cards;
            this.isShow.allFav = false;
        }
    }
}
