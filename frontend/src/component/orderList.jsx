import React from 'react'
import styles from './orderList.module.css'

const Order = () => {
    return (
        <div>
           <section className="orderList_wrapper">
                    <table className="rental_orderList">
                        <caption><h3>현재 렌탈 중인 작품</h3></caption>
                        <thead>
                            <tr>
                                <td>주문번호</td>
                                <td>주문작품</td>
                                <td>주문일자</td>
                                <td>반납예정일</td>
                                <td>기타</td>
                            </tr>
                        </thead>
                        <tbody id="rentalList"></tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5"><span id="rentalPaging"></span></td>
                            </tr>
                        </tfoot>
                    </table>
                    <table className="returned_orderList">
                        <caption><h3>반납이 완료된 작품</h3></caption>
                        <thead>
                            <tr>
                                <td>주문번호</td>
                                <td>주문작품</td>
                                <td>주문일자</td>
                                <td>반납예정일</td>
                                <td>기타</td>
                            </tr>		
                        </thead>
                        <tbody id="returnList"></tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5"><span id="returnPaging"></span></td>
                            </tr>
                        </tfoot> 
                    </table>
            </section>
       </div>
    )
}

export default Order

