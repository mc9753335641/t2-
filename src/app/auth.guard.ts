import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let ram=localStorage.getItem('islogin')
   const _router=inject(Router)
   if(ram==='false')
   {
    _router.navigate(['login'])
   }

  return false;
};
