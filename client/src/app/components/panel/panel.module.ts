import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './layout/users/users.component';
import { AdminGuard } from '../../guards/admin.guard';
import { FormsModule } from '@angular/forms';
import { SmallLoadingComponent } from './others/loading/small-loading/small-loading.component';
import { TitleComponent } from './others/title/title.component';
import { UploadImageComponent } from './others/upload-image/upload-image.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { TableComponent as TableUsersComponent } from './layout/users/table/table.component';
import { FormComponent as FormUserComponent } from './layout/users/form/form.component';
import { DeleteComponent as DeleteUserComponent } from './layout/users/delete/delete.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsComponent } from './layout/news/news.component';
import { TableComponent as TableNewsComponent } from './layout/news/table/table.component';
import { FormComponent as FormNewsComponent } from './layout/news/form/form.component';
import { DeleteComponent as DeleteNewsComponent } from './layout/news/delete/delete.component';
import { FilterComponent } from './others/filter/filter.component';
import { InfoComponent as InfoNewsComponent } from './layout/news/info/info.component';
import { NoSanitizePipe } from './../../pipes/no-sanitize.pipe';
import { InvestigatorsComponent } from './layout/investigators/investigators.component';
import { TableComponent as TableInvestigatorsComponent } from './layout/investigators/table/table.component';
import { FormComponent as FormInvestigatorComponent} from './layout/investigators/form/form.component';
import { DeleteComponent as DeleteInvertigatorComponent } from './layout/investigators/delete/delete.component';
import { InfoComponent as InfoInvestigatorComponent } from './layout/investigators/info/info.component';


@NgModule({
  declarations: [
    PanelComponent,
    LoginComponent,
    UsersComponent,
    SmallLoadingComponent,
    TitleComponent,
    TableUsersComponent,
    FormUserComponent,
    DeleteUserComponent,
    NewsComponent,
    TableNewsComponent,
    FormNewsComponent,
    UploadImageComponent,
    DeleteNewsComponent,
    FilterComponent,
    InfoNewsComponent,
    NoSanitizePipe,
    InvestigatorsComponent,
    TableInvestigatorsComponent,
    FormInvestigatorComponent,
    DeleteInvertigatorComponent,
    InfoInvestigatorComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CKEditorModule,

  ],
  providers: [AdminGuard, NoSanitizePipe]
})
export class PanelModule { }
