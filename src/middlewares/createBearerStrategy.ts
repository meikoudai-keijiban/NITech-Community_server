import { Request } from "express";
import { BearerStrategy, ITokenPayload, VerifyCallback, IBearerStrategyOptionWithRequest } from "passport-azure-ad";
import { UserMaker } from "../makers/UserMaker";
import { AzureADToken } from "../models/AzureADToken";
import { AzureADUser } from "../models/AzureADUser";
import { User } from "../models/User";
import { AzureADTokenNetwork } from "./AzureADTokenNetwork";
import { AzureADUserNetwork } from "./AzureADUserNetwork";


function createBearerStrategyOption(tenant_id: string | undefined, client_id: string | undefined): IBearerStrategyOptionWithRequest {
    if (tenant_id && client_id) {
        const bearerStrategyOption: IBearerStrategyOptionWithRequest = {
            identityMetadata: `https://login.microsoftonline.com/${tenant_id}/v2.0/.well-known/openid-configuration`,
            clientID: String(client_id),
            passReqToCallback: true,
            scope: ["Access"],
            loggingLevel: "error",
        }
        return bearerStrategyOption
    } else {
        throw new Error("One or more AZURE_AD environment variables were undefined");
    }
}

export function createBearerStrategy(): BearerStrategy {
    const bearerStrategyOption: IBearerStrategyOptionWithRequest = createBearerStrategyOption(process.env.AZURE_AD_TENANT_ID, process.env.AZURE_AD_CLIENT_ID)
    return new BearerStrategy(bearerStrategyOption, bearerStrategyVerifyFunction); // eslint-disable-line @typescript-eslint/no-misused-promises
}

async function bearerStrategyVerifyFunction(req: Request, token: ITokenPayload, done: VerifyCallback): Promise<void> {
    try {
        const userMaker: UserMaker = new UserMaker();
        const azureADUserNetwork: AzureADUserNetwork = new AzureADUserNetwork();
        const azureADTokenNetwork: AzureADTokenNetwork = new AzureADTokenNetwork();

        const azureADToken: AzureADToken = await azureADTokenNetwork.acquire(
            req.headers.authorization!.split(" ")[1], // eslint-disable-line @typescript-eslint/no-non-null-assertion
            "User.Read"
        )

        const azureADUser: AzureADUser = await azureADUserNetwork.get(azureADToken.access_token);

        const user: User = await userMaker.make(azureADUser);

        return done(null, user, token);
    } catch (e) {
        return done(e);
    }
}