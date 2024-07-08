import { VehicleOnYard } from "../../models/vehicle-input-model.ts";

export { updateBackupOfYard };

async function updateBackupOfYard(
    vehicle: VehicleOnYard[],
    backup?: boolean,
): Promise<void> {
    if (!backup) return;

    localStorage.setItem("yard", JSON.stringify(vehicle));
}
