import { Routes } from '@angular/router';
import { SCreatorComponent } from './components/s-creator/s-creator.component';
import { WorkflowBuilderComponent } from './components/workflow-builder/workflow-builder.component';

export const routes: Routes = [
    {
        path: 'creator',
        component: SCreatorComponent
    },
    {
        path: 'workflow',
        component: WorkflowBuilderComponent
    }
];