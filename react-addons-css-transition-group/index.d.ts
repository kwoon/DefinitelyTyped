// Type definitions for React (react-addons-css-transition-group) 15.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'react-addons-transition-group';
import { ComponentClass, TransitionGroupProps, CSSTransitionGroupProps } from 'react';

declare module 'react' {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    export interface CSSTransitionGroupProps extends TransitionGroupProps {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
    }
}

declare var CSSTransitionGroup: CSSTransitionGroup;
type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;
export = CSSTransitionGroup;

