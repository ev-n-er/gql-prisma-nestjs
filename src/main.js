import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(8080);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap().catch((error) => {
    console.error("Failed to start server", error);
    process.exit(1);
});
