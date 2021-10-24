import React, { Component } from 'react'

export default class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push("/");
    }

    componentDidMount() {
        console.log(this.props);
        // 이것읋 설정하면 페이지에 변화가 생기려고 할 때마다 정말 나갈거냐고 질문
        this.unblock = this.props.history.block('정말 떠나실건가요?');
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트 돠면, 그만 물음
        if(this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        )
    }
}
