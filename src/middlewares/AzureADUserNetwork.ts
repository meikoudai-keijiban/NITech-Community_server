import axios, { AxiosResponse } from "axios";
import { AzureADUser } from "../models/AzureADUser";

export class AzureADUserNetwork {
    public async get(accessTokenForMicrosoftGraph: string): Promise<AzureADUser> {
        const azureADUserResponse: AxiosResponse<AzureADUser> = await axios.get("/me", {
            baseURL: "https://graph.microsoft.com/v1.0",
            headers: {
                Authorization: `Bearer ${accessTokenForMicrosoftGraph}`, //Bearerが必要？？
            },
            params: {
                $select: "id,officeLocation,department,displayName"
            }
        });

        return azureADUserResponse.data;
    }
}