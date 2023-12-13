import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AreaChartComponent } from './widgets/area-chart/area-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardWidgetComponent } from './widgets/card-widget/card-widget.component';
import { PieWidgetComponent } from './widgets/pie-widget/pie-widget.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AreaChartComponent,
    CardWidgetComponent,
    PieWidgetComponent,
    InputFieldComponent,
    LoginComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AreaChartComponent,
    CardWidgetComponent,
    PieWidgetComponent,
    InputFieldComponent,
    LoginComponent
  ]

})
export class SharedModule { }
