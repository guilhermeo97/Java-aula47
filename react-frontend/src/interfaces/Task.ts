export default interface Task {
    id?: number;
    name: string;
    description: string;
    creationDate: any;
    updateDate: any;
    deadlineDate: any;
    done: boolean;
}