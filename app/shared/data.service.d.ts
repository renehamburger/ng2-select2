export declare class DataService {
    getSimpleList(): ({
        id: string;
        text: string;
        additional: {
            image: string;
            winner: string;
        };
    } | {
        id: string;
        text: string;
        additional: {
            winner: string;
        };
    })[];
    getComplexList(): {
        text: string;
        children: {
            id: string;
            text: string;
        }[];
    }[];
}
