

import {AbstractListResource} from "../../../../shared/api/resources/abstract-list.resource";
import {EnabledTaskResource} from "./enabled-task.resource";

export class EnabledTaskListResource extends AbstractListResource {
    public enabledTasks: EnabledTaskResource[];
}
