declare class ServiceCustomer {
    private port;
    private app;
    constructor(port: number);
    setup(): this;
    start(): void;
}
export default ServiceCustomer;
