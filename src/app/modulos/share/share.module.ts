import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ErrorInterceptor } from 'src/app/utils/auth-error.interceptor';
import { AuthInterceptor } from 'src/app/utils/auth.interceptor';
import { IconsModule } from '../icons/icons.module';
import { GsPipe } from 'src/app/pipes/gs.pipe';
import { ItemSelectableComponent } from '../dashboard/componentes/item-selectable/item-selectable.component';



@NgModule({
  declarations: [
    GsPipe,
    ItemSelectableComponent
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, NgxMaskPipe,
    IconsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgxSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    LazyLoadImageModule,
    MaterialModule,
    IconsModule,
    GsPipe,
    HttpClientModule,
    ItemSelectableComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideNgxMask()]
})
export class ShareModule { }
