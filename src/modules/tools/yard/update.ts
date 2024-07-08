import { VehicleOnYard } from "../../models/vehicle-input-model.ts";
import { $ } from "../query.ts";
import { ingressOnYard } from "./ingress.ts";
import { recoveryBackupOfYard } from "./recovery.ts";

export { updateUserYardList };

async function updateUserYardList() {
    $("#vehicle-yard")!.innerHTML = "";
    const yard_rows = await recoveryBackupOfYard();

    yard_rows.forEach((row: VehicleOnYard) => ingressOnYard(row));
}
