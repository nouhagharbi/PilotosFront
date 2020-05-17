import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import {Enjeu} from '../../../Enjeu';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.css']
})


export class SyntheseComponent implements OnInit {
  enjeus:  Enjeu[];
  categoryId={};
  result= ['strength','weakness','opportunity','threat'];
  counts=[];
  
 
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readEnjeus().subscribe((enjeus: Enjeu[])=>{
      this.enjeus = enjeus;
      
    
      for (var i = 0, l = enjeus.length; i < l; i++) {
        if(!this.counts[enjeus[i].type]){
          this.counts[enjeus[i].type]=1;
        }else{
          
          this.counts[enjeus[i].type]++;
        }
        
      } 
      
      for (var i = 0, l = this.result.length; i < l; i++) {
         if (this.counts[this.result[i]]===undefined){
           this.counts[this.result[i]]=0;
         }
        }
      console.log(this.counts[0]);
      
      for (var i = 0, l = this.result.length; i < l; i++){
        this.barChartData[0].data.push(this.counts[this.result[i]]);
      }

     })
          
  }
  
  
  

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['strength', 'Weakness', 'opportunity', 'threat',];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [ ] ,label: 'Best Fruits' }
  ];

 



}
