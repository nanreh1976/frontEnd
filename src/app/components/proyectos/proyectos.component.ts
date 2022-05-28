import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { ProyectosService } from 'src/app/services/api-rest/proyectos.service';
import { Proyecto } from 'src/app/services/interface/Proyecto';
import { ProyectoModalComponent } from '../modales/proyecto-modal/proyecto-modal.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  
constructor(private proyectoService:ProyectosService, private modalService: NgbModal,private loginService:LoginService)  { }

login:any;

  proyecto!: Proyecto [] ;

  proNuevo:boolean = true;


  getById(id: number) {
    this.proyectoService.getById(id).subscribe (
			data => { this.proyecto = data; }
		);
  }

  getAll() {
    this.proyectoService.getAll().subscribe (
			data => { 
        console.log("llega data?:" + data);
        this.proyecto = data; }
		);
  }
  delete(id: number) {
    this.proyectoService.delete(id).subscribe (
			data => { this.proyecto = data; }
		);
  }

  save(proyecto:any) {
    this.proyectoService.save(proyecto).subscribe (
			data => { this.proyecto = data; }
		);
  }

  update(id: number, proyecto: any) {
    this.proyectoService.update(id,proyecto).subscribe (
			data => { this.proyecto = data; }
		);
  }



  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
    this.getAll()
  }

    
    
    abrirModal(id:any){
      //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
      const modalRef = this.modalService.open(ProyectoModalComponent, { centered: true }   );   //{ centered: true }     
      modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal

      
    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
   }

   borrarProyecto(id:any){
    this.proyectoService.delete(id).subscribe (
      data => { this.ngOnInit() }
    );
  }

  abrirModalAgregar(){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(ProyectoModalComponent, { centered: true }   ); 
    modalRef.componentInstance.proNuevo = this.proNuevo;     // pasa un buleano para avisar al modal que es un objeto a crear  //{ centered: true }     
    
     modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
  }
    
  }
  