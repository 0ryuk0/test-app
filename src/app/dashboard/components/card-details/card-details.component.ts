import { SharedDataService } from './../../../../shared/services/shared-data.service';
import { Component, OnInit, OnDestroy, ViewChild, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from './../../models/card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  id: string;
  sub: any;
  isShowMessage: boolean;
  card: any = {
      _id: '',
      index: 0,
      guid: '',
      isFavourite: false,
      title: '',
      company: '',
      info: '',
      description: ''
  };
  
  constructor(private _route: ActivatedRoute, 
              private _sharedDataService: SharedDataService,
              private _router: Router) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
            this.id = params['id']; 
            this.getCardDetails(this.id);
        });
  };

  getCardDetails(id){
    if(this._sharedDataService.cardsList && this._sharedDataService.cardsList.length > 0){
      let results = [];
      results = this._sharedDataService.cardsList.filter((item) => {if (item['_id'] === this.id) return item;});
      this.card = results[0];
      console.log(this.card, results); 
    }else if(!this.card || !this._sharedDataService.cardsList){
        this._router.navigate(['/not-found']);
    }
  }

}
