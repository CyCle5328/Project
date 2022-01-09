import React from 'react'
import styles from "./cart.module.css"

export const Cart = () => {
    
        return (
        <div>
            <table className={styles.cartTable}>
                <thead className="cart_header">
                    <tr>
                        <td>
                            <input type="checkbox" name="checkAll" className={styles.checkAll_btn}/>
                        </td>
                        <td colSpan="3">작품정보</td>
                        <td colSpan="2">렌탈가격</td>
                    </tr>
                </thead>
                <tbody id="cart_List"></tbody>
                <tfoot id="carts_wrapper">
                    <tr>
                        <td className={styles.cartTableFooter}>
                            <input 
                                type="checkbox" 
                                name="checkAll" 
                                className={styles.checkAll_btn}
                            />
                        </td>
                        <td colSpan="5" className={styles.btn}>
                            <input className={styles.deleteBtn} type="button" id="listDelete_btn" value="삭제"/>
                            <input className={styles.rentalBtn} type="button" id="listRental_btn" value="렌탈하기"/>					
                        </td>
                    </tr>
			    </tfoot>
		    </table>
            <footer className={styles.total}>
                <div><span className={styles.totalCount}>작품 수 : </span><span id="totalCount"></span></div>
                <div><span className={styles.totalPrice}>작품 가격 : </span><span  id="totalPrice"></span></div>
            </footer>
        </div>
    )
}
