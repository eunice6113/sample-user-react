import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPSGSM07910.css';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from "primereact";
import { Chip } from 'primereact/chip';


interface IProps {
    children: React.ReactNode;
}
// 설문 목록
const CLPSGSM07910: React.FC<IProps> = ({children}) => {
    const participation = () => {

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
    <BasePage className="CLPSGSM07910">
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
    </BasePage>)
}
export default CLPSGSM07910;