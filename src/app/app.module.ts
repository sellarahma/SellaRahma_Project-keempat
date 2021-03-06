import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderSellaComponent } from './headerSella/headerSella.component';
import { RecipeSellaComponent } from './recipeSella/recipeSella.component';
import { ShoppingListSellaComponent } from './shopping-listSella/shopping-listSella.component';
import { RecipeDetailSellaComponent } from './recipeSella/recipe-detailSella/recipe-detailSella.component';
import { RecipeListSellaComponent } from './recipeSella/recipe-listSella/recipe-listSella.component';
import { RecipeItemSellaComponent } from './recipeSella/recipe-listSella/recipe-itemSella/recipe-itemSella.component';
import { ShoppingEditSellaComponent } from './shopping-listSella/shopping-editSella/shopping-editSella.component';
import { DropdownSellaDirective } from './sharedSella/dropdownSella.directive';
import { ShoppingListSellaService } from './shopping-listSella/shopping-listSella.Service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSellaComponent,
    RecipeSellaComponent,
    ShoppingListSellaComponent,
    RecipeListSellaComponent,
    RecipeDetailSellaComponent,
    RecipeItemSellaComponent,
    ShoppingEditSellaComponent,
    DropdownSellaDirective,
    ShoppingListSellaService
],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListSellaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
