import { VehicleOnYard } from "./models/vehicle-input-model.ts";
import { vehicleController } from "./tools/vehicle-controller.ts";
import { yardController } from "./tools/yard-controller.ts";
import { $ } from "./tools/query.ts";

const input_field = $("#registrer");

yardController.updateList();

input_field?.addEventListener("click", () => {
    const name = $("#name")?.value;
    const vehicle_plate = $("#vehicle-plate")?.value;

    vehicleController.validate(name, vehicle_plate);

    const vehicle = new VehicleOnYard(
        name as string,
        vehicle_plate as string,
    );

    yardController.ingress(vehicle, true);
});
