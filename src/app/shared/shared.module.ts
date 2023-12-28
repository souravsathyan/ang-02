import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DatePipe} from '@angular/common';
import { MatSortModule} from '@angular/material/sort';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AreaChartComponent } from './widgets/area-chart/area-chart.component';
import { CardWidgetComponent } from './widgets/card-widget/card-widget.component';
import { PieWidgetComponent } from './widgets/pie-widget/pie-widget.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { TableComponent } from './components/table/table.component';



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
    CardsComponent,
    TableComponent,
    TableComponent
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
    ReactiveFormsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    DatePipe,
    MatSortModule
    
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AreaChartComponent,
    CardWidgetComponent,
    PieWidgetComponent,
    InputFieldComponent,
    LoginComponent,
    CardsComponent,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    DatePipe,
    MatSortModule,
    TableComponent,
    MatCardModule,
    ReactiveFormsModule,
    MatDividerModule
  ]

})
export class SharedModule { }
