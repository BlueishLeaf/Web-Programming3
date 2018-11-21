export interface IOpenClipart {
    payload: IPayload[];
}

export interface IPayload {
    title: string;
    svg: ISvg;
}

export interface ISvg {
    url: string;
}
