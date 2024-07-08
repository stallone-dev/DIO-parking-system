export { validadeVehicleInputs };

async function validadeVehicleInputs(
    name: string | undefined,
    plate: string | undefined,
): Promise<void> {
    const test_input = !!name && !!plate;
    if (!test_input) {
        alert(
            "Os campos NOME e PLACA são obrigatórios, por favor preenchê-los",
        );
        return;
    }
}
