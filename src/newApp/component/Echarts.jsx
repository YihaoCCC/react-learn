import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';

const Echarts = ({xData, sData, style, title}) => {
    const noderef = useRef(null)
    useEffect(() => {
        const myChart = echarts.init(noderef.current)
        myChart.setOption({
            title: {
              text: title
            },
            tooltip: {},
            xAxis: {
              data: xData
            },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: sData
              }
            ]
          })
    }, [title, xData, sData])
    
    return (
        <div ref={noderef} style={style}></div>
    )
}

export default Echarts