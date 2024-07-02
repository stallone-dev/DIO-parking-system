import { validadeVehicleInputs } from "./tools/validate-inputs.ts";

const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

$("#registrer")?.addEventListener("click", () => {
    const name = $("#name")?.value;
    const vehicle_plate = $("#vehicle-plate")?.value;

    if (!validadeVehicleInputs(name, vehicle_plate)) {
        alert(
            "Os campos NOME e PLACA são obrigatórios, por favor preenchê-los",
        );
        return;
    }
});
