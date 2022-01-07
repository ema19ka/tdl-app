"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('TDL')
        .setDescription('Yes, another to-do-list app')
        .setVersion('1.0')
        .addTag('tdl')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    app.use(cookieParser());
    app.enableCors();
    await app.listen(3000).then((d) => console.log('backend running'));
}
bootstrap();
//# sourceMappingURL=main.js.map