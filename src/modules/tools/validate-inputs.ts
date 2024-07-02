export { validadeVehicleInputs };

function validadeVehicleInputs(
    name: string | undefined,
    plate: string | undefined,
): boolean {
    return !!name && !!plate;
}
