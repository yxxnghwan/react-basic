// ./src/pages/Order.js

import React, {Fragment, useState} from 'react';


const formatter = Intl.NumberFormat('ko-KR');
const menuData = [
    {   
        mid: 1,
        name: "에스프레소",
        price: 2800
    },
    {   
        mid: 2,
        name: "아메리카노",
        price: 3000
    },
    {   
        mid: 3,
        name: "카페라떼",
        price: 3500
    }
]
function Order() {
    const [selected, setSelected] = useState([]);

    let sum = 0;

    let selectedMenu = menuData.filter((item) => {
        return selected.indexOf(item.mid) >= 0;
    })

    for(let i = 0; i < selectedMenu.length; ++i) {
        sum += selectedMenu[i].price; 
    }

    let menuList = menuData.map((item) => {
        let isSelected = selected.includes(item.mid);
        return (
            <Fragment key={item.mid}>
                <dt>{item.name}</dt>
                <dd>
                    {formatter.format(item.price)} 원
                    <small>
                        <button onClick={()=>{
                            if(isSelected) {
                                let newSelected = selected.filter((selectedMid)=>{
                                    return selectedMid !== item.mid;
                                })
                                setSelected(newSelected);
                            } else {
                                setSelected([...selected, item.mid])
                            }
                        }}>
                            [{isSelected ? '선택 해제' : '선택' }]
                        </button>
                    </small>    
                </dd>
            </Fragment>
        )
    });

    let orderList = selected.map((item) => {
        let isSelected = selected.includes(item.mid);
        return (
            <Fragment key={item.mid}>
                {isSelected && <li>{item.name}</li>}
            </Fragment>
        )
    })


    return (
        <div className="container">
            <h1 className="font-bold">Order</h1>
            {menuList}
            <hr></hr>
            <h3 className="text-xl font-bold">주문서</h3>

            <ul className="list-unstyled">
                {orderList}
            </ul>

                합계 : {formatter.format(sum)} 원
            <div>
                <button className="btn btn-primary">주문하기</button>
            </div>
        </div>
    )
}

export default Order;