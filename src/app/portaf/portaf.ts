import { Component, OnInit} from '@angular/core';
import { Api } from '../service/api';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-portaf',
  imports: [CommonModule],
  templateUrl: './portaf.html',
  styleUrls: ['./portaf.css']
})


export class Portaf implements OnInit {
 data: any [] = [];
 mostrarFechas: boolean[] = [];

 constructor( private apiService: Api) { 


 }
 ngOnInit(): void {
  this.llenardata();
 }

 llenardata(){
   this.apiService.getData().subscribe(data => {
    this.data = data;
    this.mostrarFechas = this.data.map(() => false); 

    console.log(this.data);
    
  })
 }
 
  //mostrar(i:number) {
  //  document.getElementById('i')!.style.display = 'block';
  //}
  //ocultar() {
   // document.getElementById('i')!.style.display = 'none';
  //}
  mostrar(i: number) {
    this.mostrarFechas[i] = true;
  }

  ocultar(i: number) {
    this.mostrarFechas[i] = false;
  }

}

 

