import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../material.module';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routes';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(LoginRoutes),
        MatInputModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
