// src/modules/tools/validate-inputs.ts
function validadeVehicleInputs(name, plate) {
  return !!name && !!plate;
}

// src/modules/main.ts
var $ = (query) => document.querySelector(query);
$("#registrer")?.addEventListener("click", () => {
  const name = $("#name")?.value;
  const vehicle_plate = $("#vehicle-plate")?.value;
  if (!validadeVehicleInputs(name, vehicle_plate)) {
    alert(
      "Os campos NOME e PLACA s\xE3o obrigat\xF3rios, por favor preench\xEA-los"
    );
    return;
  }
});
