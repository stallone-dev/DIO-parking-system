import { VehicleOnYard } from "../../models/vehicle-input-model.ts";

export { recoveryBackupOfYard };

async function recoveryBackupOfYard(): Promise<VehicleOnYard[]> {
    const storage = localStorage.getItem("yard");

    if (!storage) return [];

    const data = JSON.parse(storage) as any[];
    const list = new Array(data.length);

    data.forEach((item, index) => {
        list[index] = new VehicleOnYard(item.name, item.plate);
    });

    return list;
}
