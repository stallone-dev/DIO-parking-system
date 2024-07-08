import { VehicleOnYard } from "../../models/vehicle-input-model.ts";
import { updateBackupOfYard } from "./backup.ts";
import { recoveryBackupOfYard } from "./recovery.ts";
import { updateUserYardList } from "./update.ts";

export { egressOffYard };

async function egressOffYard(element: HTMLTableRowElement) {
    element?.addEventListener("click", function () {
        removeVehicle(this.dataset["plate"]!);
    });
}

async function removeVehicle(vehiclePlate: string) {
    const vehicle_actual_list = await recoveryBackupOfYard();

    const vehicle = vehicle_actual_list.find((vehicle) =>
        vehicle.getPlate() === vehiclePlate
    );
    vehicle?.setSaidDate(new Date());

    if (
        !confirm(
            `O veículo ${vehicle?.getName()} permaneceu por ${vehicle?.getYardTime()}\nDeseja encerrar?`,
        )
    ) return;

    updateBackupOfYard(
        vehicle_actual_list.filter((item) => item.getPlate() !== vehiclePlate),
        true,
    );

    updateUserYardList();
}
