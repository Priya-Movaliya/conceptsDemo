import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ChildAuthGuard } from '../child-auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [

    {
        path: "admincomponent", canActivate: [AuthGuard], component: AdminComponent, canActivateChild: [ChildAuthGuard],
        children: [
            { path: "view", component: ViewdataComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
