import { OrganizationChart } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPCLTM00200.css';

import avatar1 from '../../../../assets/images/about-cloud-cell/avatar/Avatar1.png'
import avatar2 from '../../../../assets/images/about-cloud-cell/avatar/Avatar2.png'
import avatar3 from '../../../../assets/images/about-cloud-cell/avatar/Avatar3.png'
import avatar4 from '../../../../assets/images/about-cloud-cell/avatar/Avatar4.png'
import avatar5 from '../../../../assets/images/about-cloud-cell/avatar/Avatar5.png'
import avatar6 from '../../../../assets/images/about-cloud-cell/avatar/Avatar6.png'
import avatar7 from '../../../../assets/images/about-cloud-cell/avatar/Avatar7.png'
import avatar8 from '../../../../assets/images/about-cloud-cell/avatar/Avatar8.png'
import avatar9 from '../../../../assets/images/about-cloud-cell/avatar/Avatar9.png'
import avatar10 from '../../../../assets/images/about-cloud-cell/avatar/Avatar10.png'



// 클라우드추진셀소개
const CLPCLTM00200: React.FC = () => {

    const cellData = [{
        type: 'person',
        data: { name: '김형철 부장', avatar: avatar1, role:'클라우드추진 Cell 총괄', phone:'8-4494' },
        expanded: true,
        children: [
            {
                type: 'person',
                expanded: true,
                data: { name: '위성규 팀장', avatar: avatar2, role:'클라우드 기획/운영/개발 총괄', phone:'8-4489' },
                children: [
                    {
                        label: '클라우드 아키텍처 팀',
                        type: 'department',
                        className: 'cell1',
                        expanded: true,
                        children: [
                            {
                                type: 'person',
                                expanded: true,
                                data: { name: '주의준 과장', avatar: avatar3, role:'클라우드 전략수립 및 추진\n전행 클라우드 활성화', phone:'8-4478' },
                                children: [
                                    {
                                        type: 'person',
                                        expanded: true,
                                        data: { name: '안광훈 대리', avatar: avatar4, role:'클라우드 전략수립 및 추진\n전행 클라우드 활성화', phone:'8-4478' },
                                    },
                                ]
                            },
                            {
                                type: 'person',
                                expanded: true,
                                data: { name: '김대용 차장', avatar: avatar5, role:'클라우드  서비스 아키텍처 총괄\nThe-Fast 클라우드 전환 지원', phone:'8-4450' },
                                children: [
                                    {
                                        type: 'person',
                                        expanded: true,
                                        data: { name: '신재문 대리', avatar: avatar6, role:'클라우드 서비스 기획 및 개발\nThe-Fast 클라우드 전환 지원', phone:'8-4850' },
                                        children: [
                                            {
                                                type: 'person',
                                                expanded: true,
                                                data: { name: '조성제 대리', avatar: avatar7, role:'클라우드 서비스 기획 및 개발\n클라우드 개발 표준환경 관리', phone:'8-4380' },
                                                children: [
                                                    {
                                                        type: 'person',
                                                        expanded: true,
                                                        data: { name: '이희교 대리', avatar: avatar8, role:'클라우드 서비스 기획 및 개발\n클라우드 개발 표준환경 관리', phone:'8-5031' },
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        label: '클라우드 인프라 운영팀',
                        type: 'department',
                        className: 'cell2',
                        expanded: true,
                        children: [
                            {
                                type: 'person2',
                                expanded: true,
                                data: { name: '강승규 과장', avatar: avatar9, role:'시스템 아키텍처 총괄\nSW표준, 운영 환경 관리', phone:'8-4482' },
                                children: [
                                    {
                                        type: 'person2',
                                        expanded: true,
                                        data: { name: '박윤서 과장', avatar: avatar10, role:'프라이빗 클라우드 운영\nSW표준, 운영환경 관리', phone:'8-5681' },
                                    },
                                ]
                            },
                        ]
                    },
                ]
            }
        ]
    }];

    const nodeTemplate = (node:any) => {
        if(node.type === 'person' || node.type === 'person2') {
            return (
                <div className={`peopleCard ${node.type === 'person2' ? 'wide':''}`}>
                    <img alt={node.data.name} src={node.data.avatar} className='avatar' />
                    <h4 className='name'>{node.data.name}</h4>
                    <p className='role'>{node.data.role}</p>
                    <p className='phone'><i className='pi pi-phone f12 mr7'></i>{node.data.phone}</p>
                </div>
            )
        } else {
            return (
                <h2 className='dprtNm'>{node.label}</h2>
            )
        }
    }

    return(
    <BasePage className='CLPCLTM00200'>
        <section className='content1'>
            <div>
                <h1>Fast, Easy, Safety</h1>
                <h2>IBK Cloud Digital Transformation</h2>
                <p>
                    안녕하세요. 클라우드추진Cell 입니다.<br/>
                    23년 2월, 드디어 IBK에도 클라우드 시스템이 오픈되었습니다.<br/>
                    IBK기업은행의 혁신서비스를 이끌어갈 저희 팀에 많은 관심 부탁드립니다.<br/>
                    클라우드 전환? 어렵지 않습니다.<br/>
                    저희 Cell의 문은 언제나 열려있습니다.<br/>
                    디지털 전환, 클라우드로 시작하세요!
                </p>
            </div>
        </section>
        <section className='content2'>
            <h1 className='mb20'>HISTORY</h1>
            <p className='mb100'>클라우드추진 Cell은<br/>IBK의 성공적인 클라우드 도입을 위해 달려왔습니다.</p>

        </section>
        <section className='content3'>
            <h1 className='mb30'>클라우드 추진 Cell의 주요 업무</h1>
            <p>클라우드 추진 전략부터 설계/구현, 운영까지, 클라우드 도입의 전 과정을 담당하여<br/>클라우드 서비스를 지원하고 있습니다.</p>

            <div className='cloudBg'>
                <div className='cir c1'>
                    <h3>서비스 기획 및 개발</h3>
                    <p>클라우드 아키텍처 설계<br/>클라우드 사업 지원 등</p>
                </div>
                <div className='cir c2'>
                    <h3>클라우드 전략</h3>
                    <p>클라우드 신사업 발굴 및 활성화<br/>클라우드 운영 지침 관리 등</p>
                </div>
                <div className='cir c3'>
                    <h3>인프라 운영</h3>
                    <p>클라우드 시스템 구성 및 관리<br/>클라우드 사용량 모니터링, 최적화 등</p>
                </div>
            </div>

        </section>
        <section className='content4'>
            <h1 className='mb60'>클라우드 추진 Cell 팀원, 역할 소개</h1>
            <OrganizationChart value={cellData} nodeTemplate={nodeTemplate}></OrganizationChart>
        </section>
        
    </BasePage>)
}
export default CLPCLTM00200;