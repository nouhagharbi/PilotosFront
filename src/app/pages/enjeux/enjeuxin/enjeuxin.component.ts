import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Enjeu} from '../../../Enjeu';


@Component({
  selector: 'app-enjeuxin',
  templateUrl: './enjeuxin.component.html',
  styleUrls: ['./enjeuxin.component.css']
})
export class EnjeuxinComponent implements OnInit {
  enjeus:  Enjeu[];
  EnjeuPojo : Enjeu ;
  selectedEnjeu:  Enjeu  = { id :  null , type: null, description: null, critere:null, categorie:null};
  counts: string[] = [];
  categoryId="";
  result= {};
  constructor(private apiService: ApiService) { }
  

  ngOnInit(){
  this.apiService.readEnjeus().subscribe((enjeus: Enjeu[])=>{
      this.enjeus = enjeus;
      // for (var i = 0, l = enjeus.length; i < l; i++) {
      //   this.categoryId = enjeus[i]['type'];
      //   console.log(this.EnjeuPojo);
      //   this.counts.push(this.categoryId);      
      // }
      //  for (let i = 0; i < this.counts.length; ++i) { // loop over array

      //   if (!this.result[this.counts[i]]){  // if no key for that number yet
          
      //     this.result[this.counts[i]] = 0;  // then make one
      //   }          
      //   ++this.result[this.counts[i]];   
      //      // increment the property for that number       
      // }
      // console.log(this.result);
      

     
  })               
  }

  createOrUpdateEnjeu(form){
      if(this.selectedEnjeu && this.selectedEnjeu.id){
        form.value.id = this.selectedEnjeu.id;
        ;
        this.apiService.updateEnjeu(form.value,form.value.id).subscribe((enjeus: Enjeu)=>{
        });
      }
      else{
        console.log(this.selectedEnjeu.categorie=="Internal Issues");
        this.apiService.createEnjeu(form.value).subscribe((enjeus: Enjeu)=>{
       });
        
      }
    }
  
    selectEnjeu(enjeu: Enjeu){
      console.log(this.selectedEnjeu);
      this.selectedEnjeu = enjeu;
      console.log(enjeu);
    }
  
    deleteEnjeu(id){
      this.apiService.deleteEnjeu(id).subscribe((enjeu: Enjeu)=>{
        console.log("Policy deleted, ", enjeu);
        location.reload();
      });
    }

    // countf(enjeu: Enjeu):any
    // {
      
    // }
   
   
   
}
