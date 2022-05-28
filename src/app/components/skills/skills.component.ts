import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { SkillService } from 'src/app/services/api-rest/skill.service';
import { Skill } from 'src/app/services/interface/Skill';
import { SkillsModalComponent } from '../modales/skills-modal/skills-modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  //inyecta el servicio de modal
 constructor(private skillService:SkillService,  private modalService: NgbModal, private loginService:LoginService ) {}

 login:any;

 skill!: any []  ;

 skiNuevo:boolean = true;

 getById(id: number) {
   this.skillService.getById(id).subscribe (
     data => { this.skill = data; }
   );
 }

 getAll() {
   this.skillService.getAll().subscribe (
     data => {
       
      this.skill = data; }
   );
 }
 delete(id: number) {
   this.skillService.delete(id).subscribe (
     data => { this.skill = data; }
   );
 }

 save(skill:any) {
   this.skillService.save(skill).subscribe (
     data => { this.skill = data; }
   );
 }

 update(id: number, skill: any) {
   this.skillService.update(id,skill).subscribe (
     data => { this.skill = data; }
   );
 }


 ngOnInit(): void {
  this.loginService.LogState().subscribe((login) => (this.login = login));  
  this.getAll()
}


 
abrirModal(id:number){
  //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
  const modalRef = this.modalService.open(SkillsModalComponent, { centered: true, size: 'sm' }   );   //{ centered: true }     
  modalRef.componentInstance.id = id;      //pasa el id del elemento que se quiere editar al componente del modal
  

  modalRef.result.then((data) => {
    this.ngOnInit();
  }, (reason) => {
    alert("no funciono")
  })

}

borrarSkill(id:any){
  this.skillService.delete(id).subscribe (
    data => { this.ngOnInit() }
  );
}

abrirModalAgregar(){
  //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
  const modalRef = this.modalService.open(SkillsModalComponent, { centered: true }   ); 
  modalRef.componentInstance.skiNuevo = this.skiNuevo;     // pasa un buleano para avisar al modal que es un objeto a crear  //{ centered: true }     
  
   modalRef.result.then((data) => {
    this.ngOnInit();
  }, (reason) => {
    alert("no funciono")
  })
}
 

}
