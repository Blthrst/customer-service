import ServiceCustomer from "./service/service.js";
const service = new ServiceCustomer(Number(process.env.CSTMR_PORT));
service
    .setup()
    .start();
//# sourceMappingURL=index.js.map