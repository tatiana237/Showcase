import {EnabledTaskResource} from "../../api/resources/enabled-task.resource";

export interface EnabledTaskListSlice {
  enabledTaskList: EnabledTaskResource[];
  loading: boolean;
  //currentShipmentId: string;
}
