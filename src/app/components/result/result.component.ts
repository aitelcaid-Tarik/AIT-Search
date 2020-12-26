import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchService } from 'src/app/search.service';
import { GoogleResponse } from '../GoogleResponse.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  results: GoogleResponse ;
  subs: Subscription[] = [];
  term: any ;

  constructor(private searchService: SearchService) { 

  }

  search(form:NgForm){
    const {search_term} = form.value;
    this.term = search_term;
    this.subs.push(
      this.searchService.getSearchData(search_term).subscribe((data: GoogleResponse) =>{
        this.results = data;
      }
      )
    )

     
  }



  ngOnDestroy(): void {
      this.subs.map(s => s.unsubscribe());
  }

  ngOnInit(): void { 
    const {term} = history.state;
    this.term = term;

    if(term){
      this.subs.push(
        this.searchService.getSearchData(term).subscribe((data: GoogleResponse) =>{
          this.results = data;
        }
        )
      )
    }
  }

}
