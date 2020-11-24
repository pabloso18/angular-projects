import { Routes } from '@angular/router';

import { FullComponent } from './layout/full/full.component';
import { HomeComponent } from './components/home/home.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'home',
                component: HomeComponent
            }

        ]
    },

];
