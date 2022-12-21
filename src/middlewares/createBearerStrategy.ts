import { Request } from "express";
import { BearerStrategy, ITokenPayload, VerifyCallback, IBearerStrategyOptionWithRequest } from "passport-azure-ad";
import { UserMaker } from "../makers/UserMaker";
import { User } from "../models/User";
import { AzureADUser } from "../models/AzureADUser";
import { AzureADUserNetwork } from "./AzureADUserNetwork";
import { AzureADToken } from "../models/AzureADToken";
import { AzureADTokenNetwork } from "./AzureADTokenNetwork";


const bearerStrategyOption: IBearerStrategyOptionWithRequest = {
    identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
    clientID: String(process.env.AZURE_AD_CLIENT_ID),
    passReqToCallback: true,
    scope: ["Access"],
    loggingLevel: "error",
}

export function createBearerStrategy(): BearerStrategy {
    if (process.env.AZURE_AD_TENANT_ID && process.env.AZURE_AD_CLIENT_ID) {
        return new BearerStrategy(bearerStrategyOption, bearerStrategyVerifyFunction);
    } else {
        throw new Error("One or more AZURE_AD environment variables were undefined");
    }
}

async function bearerStrategyVerifyFunction(req: Request, token: ITokenPayload, done: VerifyCallback): Promise<void> {
    try {
        const userMaker: UserMaker = new UserMaker();
        const azureADUserNetwork: AzureADUserNetwork = new AzureADUserNetwork();
        const azureADTokenNetwork: AzureADTokenNetwork = new AzureADTokenNetwork();

        const azureADToken: AzureADToken = await azureADTokenNetwork.acquire(
            req.headers.authorization!.split(" ")[1],
            "https://graph.microsoft.com/User.Read"
        )

        //comment debug
        console.log(req.headers.authorization!.split(" ")[1])

        const azureADUser: AzureADUser = await azureADUserNetwork.get(azureADToken.access_token);

        const user: User = await userMaker.make(azureADUser);

        return done(null, user, token);
    } catch (e) {
        return done(e);
    }
}