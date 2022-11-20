import { URLSearchParams } from "url";
import axios, { AxiosResponse } from "axios";
import { AzureADToken } from "../models/AzureADToken";

export class AzureADTokenNetwork {
    public async acquire(accessTokenForNitechCommunity: string, scope: string): Promise<AzureADToken> {
        if (process.env.AZURE_AD_TENANT_ID && process.env.AZURE_AD_CLIENT_ID && process.env.AZURE_AD_CLIENT_SECRET) {
            const queryParams: URLSearchParams = new URLSearchParams({
                grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", //why??
                client_id: process.env.AZURE_AD_TENANT_ID,
                client_secret: process.env.AZURE_AD_CLIENT_SECRET,
                assertion: accessTokenForNitechCommunity,
                scope: scope,
                requested_token_use: "on_behalf_of",
            });

            const azureADUserResponse: AxiosResponse<AzureADToken> = await axios.post("/token", queryParams.toString(), {
                baseURL: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0`,
            });

            return azureADUserResponse.data;
        }else {
            throw new Error("One or more AZURE_AD environment variables were undefined");
        }
    }
}