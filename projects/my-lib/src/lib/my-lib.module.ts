import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component/hello.component';
import { ByeComponent } from './bye-component/bye-component';

@NgModule({
  declarations: [
    HelloComponent,
    ByeComponent,
  ],
  imports: [
  ],
  exports: [
    HelloComponent,
    ByeComponent,]
})
export class MyLibModule { }
