
import { NgModule } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  exports: [
    NzMenuModule,
    NzSwitchModule,
    NzLayoutModule,
    NzSkeletonModule
  ]
})
export class NgZorroAntdModule {}