import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
    { path: '',title:"Home", component: HelloComponent },
    { path: 'hello',title:"hello", component: HelloComponent },

];
