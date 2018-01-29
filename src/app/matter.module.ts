
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,MatSidenavModule,MatInputModule
  } from '@angular/material';
  
  @NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,MatSidenavModule,MatInputModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,MatSidenavModule,MatInputModule
    ]
  })
export class MatterModule { }