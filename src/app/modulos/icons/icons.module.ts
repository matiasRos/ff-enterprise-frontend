import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { MapPin,Menu,User,PlusCircle,ChevronRight,
Clipboard,Users } from 'angular-feather/icons';

const icons = {
  MapPin,
  Menu,
  User,
  PlusCircle,
  ChevronRight,
  Clipboard,
  Users
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]


})
export class IconsModule { }
