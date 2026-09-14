import { dataContract } from "@prisma/composer-prisma-cloud/orm";
import contractJson from "./generated/contract.json" with { type: "json" };
export const appContract = dataContract(contractJson);
