import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../../api.service';
// import { Enjeu} from '../../Enjeu';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
  ngOnInit(): void {
  }
    // enjeus:  Enjeu[];
    // EnjeuPojo : Enjeu ;
    // selectedEnjeu:  Enjeu  = { id :  null , type: null, description: null, critere:null};
    
    // constructor(private apiService: ApiService) { }

    // ngOnInit(){
    // this.apiService.readEnjeus().subscribe((enjeus: Enjeu[])=>{
    //     this.enjeus = enjeus;
    //     console.log(this.enjeus);
    // })              
    // }

    // createOrUpdateEnjeu(form){
    //     if(this.selectedEnjeu && this.selectedEnjeu.id){
    //       form.value.id = this.selectedEnjeu.id;
    //       console.log(form.value);
    //       this.apiService.updateEnjeu(form.value,form.value.id).subscribe((enjeus: Enjeu)=>{
    //       });
    //     }
    //     else{
    //       console.log(form.value);
    //       this.apiService.createEnjeu(form.value).subscribe((enjeus: Enjeu)=>{
    //      });
          
    //     }
    //   }
    
    //   selectEnjeu(enjeu: Enjeu){
    //     console.log(this.selectedEnjeu);
    //     this.selectedEnjeu = enjeu;
    //     console.log(enjeu);
    //   }
    
    //   deleteEnjeu(id){
    //     this.apiService.deleteEnjeu(id).subscribe((enjeu: Enjeu)=>{
    //       console.log("Policy deleted, ", enjeu);
    //       location.reload();
    //     });
    //   }
    
}
    
    
