import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ImageModule } from 'primeng/image';
import { DockModule } from 'primeng/dock';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';
import { MyapprovalsComponent } from './myapprovals/myapprovals.component';
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { ProcessingComponent } from './shared/processing/processing.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ApprovalPopupComponent } from './myapprovals/approval-popup/approval-popup.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    StartComponent,
    MyapprovalsComponent,
    MyrequestsComponent,
    NewaccountComponent,
    ProcessingComponent,
    ApprovalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule,
    ImageModule,
    DockModule,
    FlexLayoutModule,
    InputTextModule,
    TooltipModule,
    MatDialogModule,
    ProgressBarModule,
    ToastModule,
    FormsModule,
    InputTextareaModule,
    DividerModule,
    CardModule,
    MatTableModule,

  ],
  providers: [NewaccountComponent,MessageService,ProcessingComponent,ApprovalPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
