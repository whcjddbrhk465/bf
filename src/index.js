import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Connect from './connect';
import './index.css'
export default class Index extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          address:'',
          letter:''
        }
        this.connect = new Connect()
      }
    onClick = async () => {
        const address = await this.connect.requestAddress();
        if(address){
            this.setState({
                address
            })
        }
    }
    onChange=(e)=>{
        this.setState({
           letter:e.target.value
        })
    }
    onClickSet = async ()=>{
        const transaction = await this.connect.set({...this.state});
        const txHash = await this.connect.requestJsonRpc(transaction);
        const res = await this.connect.checkTransaction(txHash.result);
        if(res.status ===1 && res.txHash){
            alert('Success!'+ res.txHash)
        }
    }

    render() {
        return (
            [
                <div className='bg'/>,
                <div className='container'>
                <h2>Dear My Friend</h2>
                <p>최고로 친한 친구. 한국어에서는 베프라는 말로 줄여서 쓴다. 다른 말로는 절친, 강원도 방언으로는 아삼육이라고 부르며, 영어에서는 줄여서 BF (BFF(Best Friends Forever)라는 말도 있다. 심리학적으로 친구의 수 보다는 관계의 질이 행복에 영향을 크게 미친다고 합니다.<br></br>
                    지금 당신이 상상하면서 행복해지는 친구는 누구인가요? 한명? 아니면 여러명?<br></br>
                    당신과 당신의 친구의 이름과 간단한 메시지를 블록체인에 영원히 남겨 우정을 추억하는 시간이 됐으면 좋겠습니다. 그리고 이용해주신 분들을 위해 작은 이벤트를 준비 했습니다.<br></br>
                    오픈 카톡방에 들어와 본인의 tx hash, 친구와 함깨 찍은 사진을 공유해주신 선착순 10분에게 10 ICX를 드리겠습니다. 적은 돈이지만 친구와 함깨 바나나우유라도 하나씩 사드세요!!<br></br>
                    링크: <a href="https://open.kakao.com/o/sbxWSxtb">https://open.kakao.com/o/sbxWSxtb</a></p>
                <input type='text'onChange={this.onChange} value={this.state.letter}></input>
                <div><button onClick={this.onClick}>Login</button><button onClick={this.onClickSet}>Send</button></div>
            </div>
            ]

        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

;
