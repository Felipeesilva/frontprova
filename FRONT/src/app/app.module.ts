import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes da aplicação
import { AppComponent } from "./app.component";
import { CadastrarAutomovelComponent } from "./components/views/automovel/cadastrar-automovel/cadastrar-automovel.component";
import { ListarAutomovelComponent } from "./components/views/automovel/listar-automovel/listar-automovel.component";

@NgModule({
    declarations: [
        AppComponent,
        ListarAutomovelComponent,
        CadastrarAutomovelComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
