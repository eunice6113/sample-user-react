import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPSGSM07910.css';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from "primereact";
import { Chip } from 'primereact/chip';
import  useBasePage  from '../../../../shared/hooks/base-page.hook';


interface IProps {
    children: React.ReactNode;
}
// 설문 목록
const CLPSGSM07910: React.FC<IProps> = ({children}) => {
    const { goPage } = useBasePage()
    const participation = ( e:any ) => {
        goPage(`/spr/sgs/${e.index}`);
    }
    
    //진행중인 설문
    const survey= [
        {
            title:'SaaS 서비 참여 조사',
            response:'400',
            state:'ongoing',
            stateText:'진행중',
            description:
            <>
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            </>,
            date:'2022.12.24 ~2023.01.23',
        },
        {
            title:'SaaS 서비 참여 조사',
            response:'400',
            state:'ongoing',
            stateText:'진행중',
            description:
            <>
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            </>,
            date:'2022.12.24 ~2023.01.23',
        },
        {
            title:'SaaS 서비 참여 조사',
            response:'400',
            state:'ongoing',
            stateText:'진행중',
            description:
            <>
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            </>,
            date:'2022.12.24 ~2023.01.23',
        },
    ]
    const endSurvey= [
        {
            title:'SaaS 서비 참여 조사',
            response:'400',
            state:'end',
            stateText:'종료',
            description:
            <>
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            </>,
            date:'2022.12.24 ~2023.01.23',
        },
        {
            title:'SaaS 서비 참여 조사',
            response:'400',
            state:'end',
            stateText:'종료',
            description:
            <>
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            </>,
            date:'2022.12.24 ~2023.01.23',
        },
        {
            title:'SaaS 서비 참여 조사',
            response:'400',
            state:'end',
            stateText:'종료',
            description:
            <>
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            Pubilc 클라우드를 활용한 당향 임직원들의 <span className="text-bold">SaaS 서비스 이용 현황을 알아보고자 합니다.</span> 
            </>,
            date:'2022.12.24 ~2023.01.23',
        },
    ]

    return(
    <BasePage className="CLPSGSM07910 hasSubVisual">
        <div className="subVisualContainer">
            <h2>설문 도구란?</h2>
            <p>
                설문을 만들어 참여하고 결과를 공유하고 싶다면?!<br/>
                We클라우드의 설문 도구를 이용해보세요.
            </p>
            <div className="tagsCon">
                <div className="tags">
                    <div className="tagHeader user">사용자</div>
                    <div className="tag">#설문참여</div>
                    <div className="tag">#결과확인</div>
                </div>
                <div className="tags">
                    <div className="tagHeader admin">관리자</div>
                    <div className="tag">#권한신청</div>
                    <div className="tag">#설문생성</div>
                    <div className="tag">#외부공유</div>
                </div>
            </div>
            <p className="alertText">신청 : 서비스 신청 &gt; 서비스마켓</p>
        </div>
        <div className="wrap contentsContainer">
            <p className="fs20 pt45 mb20"><span className="text-bold color-blue">3</span><span className="">개</span>의 설문이 진행 중 입니다.</p>
            <TabView>
                <TabPanel header="진행중인 설문">
                    <div className="contentList">
                        {
                            survey.map((surveyItems, index) => (
                            <div className="content" key={'surveyItems-' +index}>
                                <div className="title">{surveyItems.title}</div>
                                <div className="state">
                                    응답 {surveyItems.response}
                                    <Chip label={surveyItems.stateText} className={surveyItems.state} />
                                </div>
                                <p className="description">
                                    {surveyItems.description}
                                </p>
                                <p className="date">{surveyItems.date}</p>
                                <Button label='설문 참여하기' className="xxl" onClick={participation}/>
                            </div>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel header="종료된 설문">
                    <div className="contentList">
                        {
                            endSurvey.map((endSurveyItems, index2) => (
                            <div className="content" key={'surveyItems-' +index2}>
                                <div className="title">{endSurveyItems.title}</div>
                                <div className="state">
                                    응답 {endSurveyItems.response}
                                    <Chip label={endSurveyItems.stateText} className={endSurveyItems.state} />
                                </div>
                                <p className="description">
                                    {endSurveyItems.description}
                                </p>
                                <p className="date">{endSurveyItems.date}</p>
                                <Button label='설문 참여하기' className="xxl" onClick={participation}/>
                            </div>
                            ))
                        }
                    </div>
                </TabPanel>
                
            </TabView>
        </div>
        
    </BasePage>)
}
export default CLPSGSM07910;