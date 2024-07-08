export { VehicleOnYard };

class VehicleOnYard {
    private readonly name: string;
    private readonly plate: string;
    private entry_date: number;
    private exit_date: number | string;

    constructor(name: string, plate: string) {
        this.name = name;
        this.plate = plate;
        this.entry_date = new Date().getTime();
        this.exit_date = "";
    }

    public getName(): string {
        return this.name;
    }
    public getPlate(): string {
        return this.plate;
    }
    public getEntryDate(): number {
        return this.entry_date;
    }
    public getSaidDate(): number | string {
        return this.exit_date ?? "Vehicle not egressed";
    }
    public getYardTime(): string {
        if (!this.exit_date) return "Vehicle not egreesed";
        const entry = new Date(this.entry_date).getTime();
        const said = new Date(this.exit_date).getTime();
        const yard_time_on_ms = Math.abs(said - entry);
        const hour_reference = 1000 * 60 * 60;

        return `${Math.round(yard_time_on_ms / hour_reference)} hours`;
    }

    public setSaidDate(date: Date): void {
        this.exit_date = date.getTime();
    }
}
