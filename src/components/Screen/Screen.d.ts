import * as React from 'react';
export declare class Screen<P, S> extends React.PureComponent<P, S> {
    protected subject: string;
    protected componentWillReceiveProps(): void;
    protected renderScreen(): React.ReactNode;
    render(): any;
}
