import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemCardComponent } from "@components/item-card/item-card.component";
import { AllItemsComponent } from "@pages/all-items/all-items.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ItemSchemasComponent } from "@pages/item-schemas/item-schemas.component";
import { ItemSchemaCardComponent } from "@components/item-schema-card/item-schema-card.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ValidationErrorsComponent } from "@components/validation-errors/validation-errors.component";
import { FormControlInvalidCheckerDirective } from './directives/form-control-invalid-checker.directive';
import { LoginComponent } from '@pages/login/login.component';
import { AuthInterceptor } from "./interceptors/auth.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    AllItemsComponent,
    ItemSchemasComponent,
    ItemSchemaCardComponent,
    ValidationErrorsComponent,
    FormControlInvalidCheckerDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DatePipe, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
