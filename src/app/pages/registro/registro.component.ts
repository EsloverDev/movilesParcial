import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule], 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {
  frmRegistro: FormGroup;

  constructor() {
    this.frmRegistro = new FormGroup({
      nombres: new FormControl('',Validators.required),
      apellidos: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required)
    })
   }

  registro(){
    console.log(this.frmRegistro.value.nombres);
    console.log(this.frmRegistro.value.apellidos);
    console.log(this.frmRegistro.value.email);
    console.log(this.frmRegistro.value.password);
    console.log(this.frmRegistro.value.confirmPassword);
  }

  ngOnInit() {}

}
