export declare class DataService {
    getSimpleList(): ({
        id: string;
        text: string;
        addition: {
            image: string;
            winner: string;
        };
    } | {
        id: string;
        text: string;
        addition: {
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
