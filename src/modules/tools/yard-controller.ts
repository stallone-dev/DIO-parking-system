import { ingressOnYard } from "./yard/ingress.ts";
import { egressOffYard } from "./yard/egress.ts";
import { updateUserYardList } from "./yard/update.ts";

export { yardController };

const yardController = {
    ingress: ingressOnYard,
    egress: egressOffYard,
    updateList: updateUserYardList,
};
