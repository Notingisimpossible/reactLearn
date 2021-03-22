import React from 'react';

interface IPerformanceProps{
  text: string,
}
interface IPerformanceState{

}
export default class Copy extends React.Component<IPerformanceProps, IPerformanceState>{
  constructor(props: IPerformanceProps){
    super(props)

    this.state={}
  }

  render() {
    return(
      <div>复制</div>
    )
  }
}