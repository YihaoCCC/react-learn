import './home.scss';
import Echarts from '../component/Echarts';
export default function Home() {

    return (
        <>
            <Echarts
                style={{ width: '500px', height: '400px' }}
                xData={['vue', 'angular', 'react']}
                sData={[50, 60, 70]}
                title='三大框架满意度'  
            />
        </>
    )
}