import { PureComponent } from 'react';
import type { TCalendarProps } from '../types';
type TState = {
    year: number;
    month: number;
    date: string;
    mode: string;
    minYear: number;
    minMonth: number;
    maxYear: number;
    maxMonth: number;
    time: string;
    open: boolean;
};
declare class Calendar extends PureComponent<TCalendarProps, TState> {
    static defaultProps: TCalendarProps;
    constructor(props: TCalendarProps);
    componentDidMount(): void;
    renderMonths(): JSX.Element;
    renderYears(): JSX.Element;
    renderContent(): JSX.Element;
    renderSelectTime(): JSX.Element;
    renderWeekdays(): JSX.Element;
    renderHeader(): JSX.Element;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map