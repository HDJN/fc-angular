import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './fcsystem.route'
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(Routers)],
  declarations: [
    SysmessagedetailComponent
  ],
  providers: []
})
export class FcsystemModule {}