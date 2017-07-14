import { Observable } from "rxjs/Rx";


// this will be used by the Router
export class MyCanDeactivateGuard  {
  canDeactivate(component): Observable<boolean> | boolean {
    // check if method canDeactivate is available on the component, if yes call it, otherwise return true
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}


// export class ConfirmDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

//   canDeactivate(target: CanDeactivateComponent) {
//     if(target.hasChanges()){
//         return window.confirm('Do you really want to cancel?');
//     }
//     return true;
//   }