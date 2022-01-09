import React from 'react'

const Artview = () => {
    return (
        <div>
            <div class="selectArt">
                <div id="art_img"></div>
            </div>
            <div id="art_info"></div>
            <div class="link_wrapper">
                <a id="create-kakao-link-btn" href="javascript:">
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png" onclick="fnKaKaoLink();"/>
                </a>
                <i class="fas fa-link" onclick="fnClipboard();"></i>
            </div>
            
            <hr/>
            <h1>artNo 체크용</h1>
            <h1>reviewNo</h1>
            <h1>리뷰</h1>
            {/* 리뷰 게시판 */}
            <div class="review_wrap">
                <div id="review_list"></div>
            </div>
        </div>
    )
}

export default Artview