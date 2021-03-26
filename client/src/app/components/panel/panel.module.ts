import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './layout/users/users.component';
import { AdminGuard } from '../../guards/admin.guard';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
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
import { PapersComponent } from './layout/papers/papers.component';
import { TableComponent as TablePapersComponent } from './layout/papers/table/table.component';
import { FormComponent as FormPaperComponent } from './layout/papers/form/form.component';
import { MultiselectDropdownComponent } from './others/multiselect-dropdown/multiselect-dropdown.component';
import { DeleteComponent as DeletePapersComponent } from './layout/papers/delete/delete.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { TableComponent as TableProjectComponent } from './layout/projects/table/table.component';
import { FormComponent as FormProjectComponent } from './layout/projects/form/form.component';
import { DeleteComponent as DeleteProjectComponent  } from './layout/projects/delete/delete.component';
import { InfoComponent as InfoProjectComponent } from './layout/projects/info/info.component';
import { InfoComponent as InfoPaperComponent } from './layout/papers/info/info.component';
import { CommentsComponent } from './layout/comments/comments.component';
import { DownloadsComponent } from './layout/downloads/downloads.component';
import { TableComponent as CommentsTableComponent } from './layout/comments/table/table.component';
import { InfoComponent as CommentInfoComponent } from './layout/comments/info/info.component';
import { StatusComponent as CommentStatusComponent } from './layout/comments/status/status.component';


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
    InfoInvestigatorComponent,
    PapersComponent,
    TablePapersComponent,
    FormPaperComponent,
    MultiselectDropdownComponent,
    DeletePapersComponent,
    ProjectsComponent,
    TableProjectComponent,
    FormProjectComponent,
    DeleteProjectComponent,
    InfoProjectComponent,
    InfoPaperComponent,
    CommentsComponent,
    DownloadsComponent,
    CommentsTableComponent,
    CommentInfoComponent,
    CommentStatusComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CKEditorModule,
    ReactiveFormsModule
  ],
  providers: [AdminGuard, NoSanitizePipe]
})
export class PanelModule { }
