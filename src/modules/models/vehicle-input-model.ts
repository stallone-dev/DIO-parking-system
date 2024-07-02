export { VehicleOnYard };

class VehicleOnYard {
    private readonly name: string;
    private readonly plate: string;
    private entry_date: string;
    private exit_date: string;

    constructor(name: string, plate: string) {
        this.name = name;
        this.plate = plate;
        this.entry_date = new Date().toISOString();
        this.exit_date = "";
    }

    public getName(): string {
        return this.name;
    }
    public getPlate(): string {
        return this.plate;
    }
    public getEntryDate(): string {
        return this.entry_date;
    }
    public getSaidDate(): string {
        return this.exit_date ?? "Vehicle not egressed";
    }
    public getYardTime(): string {
        if (!this.exit_date) return "Vehicle not egreesed";
        const entry = new Date(this.entry_date).getTime();
        const said = new Date(this.exit_date).getTime();
        const yard_time = Math.abs(said - entry);

        console.log(yard_time);

        const calculate_days = (n: number) => {
            const day_ref = 1000 * 60 * 60 * 24;
            return Math.ceil(n / day_ref);
        };

        const calculate_hours = (n: number, days?: number) => {
            const days_discount = (days > 0 ? days - 1 : 0) * 1000 * 60 * 60 *
                24;
            const hour_ref = 1000 * 60 * 60;
            console.log(days_discount);
            return Math.ceil((n - days_discount) / hour_ref);
        };

        const days = calculate_days(yard_time);
        const hours = calculate_hours(yard_time, days);
        let result = ``;

        if (days > 0) result += `${days} day${days === 1 ? "" : "s"}, `;
        result += `${hours} hours.`;

        return result;
    }

    public setSaidDate(date: Date): void {
        this.exit_date = date.toISOString();
    }
}
