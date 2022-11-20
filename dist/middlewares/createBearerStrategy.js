"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBearerStrategy = void 0;
const passport_azure_ad_1 = require("passport-azure-ad");
const bearerStrategyOption = {
    identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
    clientID: String(process.env.AZURE_AD_CLIENT_ID),
    passReqToCallback: true,
    scope: ["Access"],
    loggingLevel: "error",
};
function createBearerStrategy() {
    if (process.env.AZURE_AD_TENANT_ID && process.env.AZURE_AD_CLIENT_ID) {
        return new passport_azure_ad_1.BearerStrategy(bearerStrategyOption, bearerStrategyVerifyFunction);
    }
    else {
        throw new Error("One or more AZURE_AD environment variables were undefined");
    }
}
exports.createBearerStrategy = createBearerStrategy;
function bearerStrategyVerifyFunction(req, token, done) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
