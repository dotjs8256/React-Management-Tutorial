import React from 'react'; //특정한 라이브러리를 불러올 때 사용


class Customer extends React.Component{
    //라이브러리
    render(){ //클래스를 보이고자하는 내용
        return ( //render에는 항상 return
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birth}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }


}

export default Customer;