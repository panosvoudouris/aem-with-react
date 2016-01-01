export default class CqUtils {
    static setVisible(path: string, visible: boolean, recursive?: boolean): void;
    static addChild(ctx: any, relPath: string, resourceType: string): void;
    static refresh(path: string): void;
    static removeEditable(path: string): void;
}