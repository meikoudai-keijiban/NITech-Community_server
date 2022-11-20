export class AzureADToken {
    public token_type: string;

    public scope: string;

    public expires: string;

    public access_token: string;

    public refresh_token?: string;
}