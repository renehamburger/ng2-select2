import { OptionData } from './select2.interface';
export declare class Select2Component {
    data: Array<OptionData>;
    selector: any;
    width: string;
    theme: string;
    templateSelection: any;
    templateResult: any;
    private element;
    ngAfterViewInit(): void;
}
