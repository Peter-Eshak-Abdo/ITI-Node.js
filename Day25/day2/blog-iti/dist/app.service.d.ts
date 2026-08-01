export declare class AppService {
    getHello(): {
        message: string;
    };
    getHello2(body: {
        name: string;
        age: number;
    }, id: string, hamada: string): {
        message: string;
        body: {
            name: string;
            age: number;
        };
        id: string;
        hamada: string;
    };
}
