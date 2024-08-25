import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Data1Component } from './data1/data1.component';
import { PerentComponent } from './perent/perent.component';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { HostlisterComponent } from './hostlister/hostlister.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForloopComponent } from './forloop/forloop.component';
import { StyleComponent } from './style/style.component';
import { ClassComponent } from './class/class.component';
import { ViewproviderComponent } from './viewprovider/viewprovider.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { PipeComponent } from './pipe/pipe.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Data1Component,PerentComponent,NgmoduleComponent,HostlisterComponent,IfElseComponent,ForloopComponent,StyleComponent,ClassComponent,ViewproviderComponent,AttributebindingComponent,PipeComponent,Service1Component,Service2Component,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:false,
})
export class AppComponent {
  title = 'manis';
}
