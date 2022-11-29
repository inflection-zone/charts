import { CurrentClient } from "../../domain.types/current.client";
import { CurrentUser } from "../../domain.types/current.user";

declare global{
    namespace Express {
        interface Request {
            currentUser: CurrentUser,
            currentClient: CurrentClient
            context: string,
            resourceType: string,
            resourceId: string | number | null | undefined
            resourceOwnerUserId: string,
            authorizeRequest: boolean
        }
    }
}
