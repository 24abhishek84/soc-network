import React, {Fragment} from 'react';
import ReactEcharts from 'echarts-for-react';

const BarChart = (props) => {
    const {baroption} = props;
    return (
        <Fragment>
            <ReactEcharts
                option={baroption}
                lazyUpdate
                style={{height: '100%'}}
            />
        </Fragment>
    )
}

export default BarChart
