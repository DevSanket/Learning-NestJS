import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/test")
  getRootRoute() {
    return "Hi there";
  }

  @Get("/buy")
  getBythere() {
    return "Checkout the Buy";
  }
}
