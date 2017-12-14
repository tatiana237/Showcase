import {NgModule} from "@angular/core";
import {ShipmentCaptureModule} from "./shipment-capture/shipment-capture.module";
import {ShipmentListModule} from "./shipment-list/shipment-list.module";
import {TaskListModule} from "./task-list/task-list.module";
import {ShipmentCommonModule} from "./shipment-common/shipment-common.module";
import {ShipmentRoutingModule} from "./shipment-routing/shipment-routing.module";
import {EnabledTaskListModule} from "./enabled-task-list/enabled-task-list.module";
import {TerminedTaskListModule} from "./Termined-Task_list/termined-task-list.module";

@NgModule({
    imports: [
      ShipmentCaptureModule,
      ShipmentCommonModule,
      ShipmentListModule,
      ShipmentRoutingModule,
      TaskListModule,
      EnabledTaskListModule,
      TerminedTaskListModule

    ]
})
export class ShipmentModule {
}
