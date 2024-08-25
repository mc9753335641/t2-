import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
setdata(email:any,pass:any)
{
if(email=='manish'&& pass==123)
{
  localStorage.setItem('islogin','true')
}
else
{
  localStorage.setItem('islogin','false')
}
}
}
