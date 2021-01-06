import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';


const customer = {
  'name' : '김지현',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
}
//props 데이터를 보내줌
//웹프로그램을 출력하기 위해 만든
class App extends Component { //웹문서에서 보여지기위한 기본적인 단위
  render() {
    return (
      <Customer
        name={customer.name}
        birth={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      /> //커스텀 클래스
    );
  }
}


export default App;
