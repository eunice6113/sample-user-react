import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPMMBM08500.css';
import { Button } from 'primereact';


interface IProps {
    children: React.ReactNode;
}
// 알림 이벤트 노출 상세 화면
const CLPMMBM08500: React.FC<IProps> = ({children}) => {
    const delt = () => {
        console.log('삭제')
    }
    const more = () => {
        console.log('더보기')
    }
    const ntfctList = [
        {
            date: '2022.10.31',
            ntfcts: [
                {
                    state:'new',
                    content: '클라우드 오픈안내, 다양한 클라우드 서비스를 만드는데 활용하세요.',
                    reply: null,
                },
                {
                    content: '(질문) 클라우드 서비스를 진행하고 싶어요. 절차를 알려주세요.',
                    reply:'(답변) The-Fast Cloud 프로그램을 이용해주세요.'
                },
                {
                    content: '(질문) 클라우드 서비스를 진행하고 싶어요. 절차를 알려주세요.',
                    reply:'(답변) The-Fast Cloud 프로그램을 이용해주세요.'
                },
               
            ]
        },
        {
            date: '2022.10.31',
            ntfcts: [
                {
                    state:'new',
                    content: '클라우드 오픈안내, 다양한 클라우드 서비스를 만드는데 활용하세요.',
                    reply: null,
                },
                {
                    content: '(질문) 클라우드 서비스를 진행하고 싶어요. 절차를 알려주세요.',
                    reply:'(답변) The-Fast Cloud 프로그램을 이용해주세요.'
                },
                {
                    content: '(질문) 클라우드 서비스를 진행하고 싶어요. 절차를 알려주세요.',
                    reply:'(답변) The-Fast Cloud 프로그램을 이용해주세요.'
                },
               
            ]
        },
        
        
    ]
   
    return(
    <BasePage className="CLPMMBM08500">
        <p className="text-right color-red mt45 f14 mb10">* 전체 알림은 최근 3개월 알림만 확인 가능합니다.</p>
        <div className="d-flex">
            <div className="sortList">
                <ul>
                    <li className="on">전체</li>
                    <li>공지사항</li>
                    <li>건의 및 개선</li>
                    <li>서비스 그룹</li>
                    <li>자원요청</li>
                    <li>이벤트</li>
                    <li>설문</li>
                    <li>The-Fast Cloud</li>
                </ul>
            </div>
            <div className="ntfctList">
                {
                    ntfctList.map((ntfctLists,index) =>(
                    <dl key={'ntfctLists-'+index}>
                        <dt><i className="pi pi-clock mr5 fs20"></i>{ntfctLists.date}</dt>
                        {
                            ntfctLists.ntfcts.map((ntfctItem, indexs) => (
                            <dd className={ntfctItem.state} key={'ntfctItem-'+indexs}>
                                <div>
                                    <p>{ntfctItem.content}</p>
                                    {
                                        ntfctItem.reply &&
                                        <p className="reply">{ntfctItem.reply}</p>
                                    }
                                </div>
                                <Button className='iconBtn deltBtn' icon='pi pi-times' onClick={delt} />
                            </dd>
                            ))
                        }
                        
                        
                    </dl>
                    ))
                }
               
                <div className='d-flex justify-center mt10 mb10'>

                    <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={more} />
                </div>
            </div>
        </div>
    </BasePage>)
}
export default CLPMMBM08500;