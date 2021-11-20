import { FormsModule } from '@angular/forms';
import { NoSanitizePipe } from './pipes/no-sanitize.pipe';
import { GLOBAL } from './services/config/global';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { SkeletonLoaderModule } from './modules/skeleton-loader/skeleton-loader.module';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';




const dbConfig: DBConfig = {
  name: GLOBAL.indexedDB.database,
  version: 1,
  objectStoresMeta: [
    {
      store: GLOBAL.indexedDB.table,
      storeConfig: { keyPath: 'key', autoIncrement: false },
      storeSchema: []
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SkeletonLoaderModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
