import { Button, InputText, ToggleButton } from "primereact";
import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import TopTenBoard from "../../../../shared/components/top-ten/TopTenBoard";
import LikeButton from "../../../../shared/components/ui/like-button/LikeButton";
import useBasePage from "../../../../shared/hooks/base-page.hook";
import listImg from '../../../../../assets/images/manual-img.png';
import './CLPCMNM08610.css';
import { Link } from "react-router-dom";

interface IProps {
    children: React.ReactNode;
}
// 소통공간 목록 화면
const CLPCMNM08610: React.FC<IProps> = ({children}) => {
    const { goPage } = useBasePage()


    // TOP 10 =====================================
    // 최신
    let latestLst = [
        {
            name: '[후기] The-Fast 클라우드 컨설팅 후기',
            url: ''
        },
        {
            name: '[후기] The-Fast 클라우드 컨설팅 후기',
            url: ''
        },
        {
            name: '[후기] The-Fast 클라우드 컨설팅 후기',
            url: ''
        },
        {
            name: '[자율소통] 오늘 점심 식단이 마음에 들지 않아요',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
    ]

    // 1년
    let yearLst = [
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[후기] The-Fast 클라우드 컨설팅 후기',
            url: ''
        },
        {
            name: '[자율소통] 오늘 점심 식단 공유합니다',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
    ]

    // 전체
    let totalLst = [
        {
            name: '[자율소통] 오늘 점심 식단 공유합니다',
            url: ''
        },
        {
            name: '[후기] The-Fast 클라우드 컨설팅 후기',
            url: ''
        },
        {
            name: '[후기] SaaS 서비스를 사용 후기',
            url: ''
        },
        {
            name: '[자율소통] 오늘 점심 식단이 마음에 들지 않아요',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
        {
            name: '[질문] SaaS 서비스를 사용하고 싶어요.',
            url: ''
        },
    ]

    // 설문참여 내용
    let survey = [
        {
            name: '[자율소통] 오늘 점심 식단 공유합니다',
            url: ''
        },
        {
            name: '[후기] The-Fast 클라우드 컨설팅 후기',
            url: ''
        },
    ]

    const write = () => {
        console.log('write')

        goPage('/spr/cmn/register')
    }

    const [checked1, setChecked1] = React.useState(false);

    return(
    <BasePage className='CLPCMNM08610'>
    <div className="d-flex">

        <div className='listContainer'>
            <div className='wirteWrapper' onClick={write} >
                <InputText placeholder='다양한 소통을 경험해 보세요.' />
                <Button className='ml10 lg' label='소통하기' />
            </div>

            <div className="sorting">
                <Button className="p-button-link" label="최신순"></Button>
                <span className="divider">|</span>
                <Button className="p-button-link" label="오래된 순"></Button>
            </div>

            <div className='boardWrapper'>

                <div className="profile-info">
                    <span className="profile"><i className="pi pi-user"></i></span>
                    <span className="profileName">홍길동</span>
                    <span className="divider">|</span>
                    <span>클라우드 Cell</span>
                    <span className="divider">|</span>
                    <span>7월 2일 오후 3:39</span>
                </div>
                <h5 className="title">클라우드 활용 여신 심사업무 활용 방안 기획안</h5>
                <div className="content">
                    클라우드 환경에서 여신 심사업무의 활용 방안을 효율적으로 할 수 있는지 기획안을 구성하였습니다. 

                    <img src={listImg}></img>
                </div>

                <div className='btnsWrapper'>
                    {/* 좋아요 버튼 */}
                    <LikeButton 
                        likeNum={200}
                        checked={checked1}
                        setChecked={setChecked1}
                    />

                    {/* 조회수 */}
                    <Button label="199" icon='pi pi-eye' className="p-button-text viewLable" disabled />

                    {/* 댓글 */}
                    <Button label="2000" icon='pi pi-comment' className="p-button-text" />
                </div>
            </div>
        </div>

        <div className='infoContainer'>

            {/* Top 10 */}
            <TopTenBoard 
                latest={latestLst}
                yearly={yearLst}
                total={totalLst}
            />

            {/* 설문참여 */}
            <div className="infoBoard">
                <div className='titleArea'>
                    <h1>설문참여</h1>
                    <small>진행중인 설문에 참여하세요</small>
                </div>
                <div className="contentArea">
                    <ul className='links'>
                    {
                        survey.map((item, index) => (
                            <li key={`survey-${index}`}>
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        ))
                    }
                    </ul>
                    <Button label="참여하기" className="xxl mt10" />
                </div>
            </div>
        </div>
    </div>
        
    </BasePage>)
}
export default CLPCMNM08610;