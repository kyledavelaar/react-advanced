import React from 'react';
import { withTracking } from './withTracking';

const Button = props => <button>{props.children}</button>
const Button2 = props => <button>Another {props.children}</button>

const TrackingButton = withTracking(Button);
const TrackingButton2 = withTracking(Button2);

export const HOC = (props) => {
    return (
        <React.Fragment>
            <TrackingButton>Button For Tracking</TrackingButton>
            <TrackingButton2>Button 2 For Tracking</TrackingButton2>
        </React.Fragment>
    )
}