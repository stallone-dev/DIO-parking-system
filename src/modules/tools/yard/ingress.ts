import { VehicleOnYard } from "../../models/vehicle-input-model.ts";
import { $ } from "../query.ts";
import { updateBackupOfYard } from "./backup.ts";
import { egressOffYard } from "./egress.ts";
import { recoveryBackupOfYard } from "./recovery.ts";

export { ingressOnYard };

async function ingressOnYard(
    vehicle: VehicleOnYard,
    backup?: boolean,
): Promise<void> {
    const yard_row = await createYardRow(vehicle);

    $("#vehicle-yard")?.appendChild(yard_row);

    updateBackupOfYard([...await recoveryBackupOfYard(), vehicle], backup);
}

async function createYardRow(
    vehicle: VehicleOnYard,
): Promise<HTMLTableRowElement> {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${vehicle.getName()}</td>
        <td>${vehicle.getPlate()}</td>
        <td>${new Date(vehicle.getEntryDate()).toLocaleString()}</td>
        <td>
            <button class="egress" data-plate="${vehicle.getPlate()}">X</button>
        </td>
    `;

    await egressOffYard(row.querySelector(".egress") as HTMLTableRowElement);

    return row;
}
