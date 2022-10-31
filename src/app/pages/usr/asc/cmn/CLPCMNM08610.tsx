import { Button, InputText, ProgressSpinner, ToggleButton } from "primereact";
import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import TopTenBoard from "../../../../shared/components/top-ten/TopTenBoard";
import LikeButton from "../../../../shared/components/ui/like-button/LikeButton";
import useBasePage from "../../../../shared/hooks/base-page.hook";
import listImg from '../../../../../assets/images/manual-img.png';
import './CLPCMNM08610.css';
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "../../../../shared/components/loading/LoadingBar";

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

    // 설문참여 내용 =====================================
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

    // 게시판 내용 =====================================
    let boardList_initialized = [
        {
            id: 0,
            author: {
                name: '홍길동',
                department: '클라우드 Cell',
                createAt: '7월 2일 오후 3:39'
            },
            title: '클라우드 활용 여신 심사업무 활용 방안 기획안',
            content: `
                클라우드 환경에서 여신 심사업무의 활용 방안을 효율적으로 할 수 있는지 기획안을 구성하였습니다. 
                <img src={${listImg}}></img>
            `,
            like: false,
            likeCnt: 100,
            viewCnt: 100,
            commentCnt: 200
        },
        {
            id: 1,
            author: {
                name: '홍길동',
                department: '클라우드 Cell',
                createAt: '7월 2일 오후 3:39'
            },
            title: '클라우드 활용 여신 심사업무 활용 방안 기획안',
            content: `
                클라우드 환경에서 여신 심사업무의 활용 방안을 효율적으로 할 수 있는지 기획안을 구성하였습니다. 
                <img src={${listImg}}></img>
            `,
            like: true,
            likeCnt: 300,
            viewCnt: 1000,
            commentCnt: 20000
        },
        {
            id: 2,
            author: {
                name: '홍길동',
                department: '클라우드 Cell',
                createAt: '7월 2일 오후 3:39'
            },
            title: '클라우드 활용 여신 심사업무 활용 방안 기획안',
            content: `
                클라우드 환경에서 여신 심사업무의 활용 방안을 효율적으로 할 수 있는지 기획안을 구성하였습니다. 
                <img src={${listImg}}></img>
            `,
            like: true,
            likeCnt: 30000,
            viewCnt: 100,
            commentCnt: 200
        },
    ]

    const [list, setList] = React.useState(boardList_initialized);

    const likeToggle = ( e:any, id:number ) => {

        let content = list.map( (item, index) => {
            if(index === id) {
                return {
                    ...item,
                    like: !item.like
                };
            } else {
                return item
            }
        })

        setList(content)
    }

    const write = () => {
        console.log('write')

        goPage('/spr/cmn/register')
    }

    const latest = () => {
        console.log('latest')
    }

    const oldest = () => {
        console.log('oldest')
    }

    const refresh = () => {
        console.log('refresh')
    }

    let hasMoreData = true;

    //스크롤 내렸을 때 다음 데이터를 로딩하는 함수
    //여기서는 임시 데이터를 계속 만들어서 리스트에 넣어주는 식으로 예제를 만들었습니다!
    const fetchMoreData = () => {
        console.log('fetchMoreData', list.length)

        if(list.length > 50) {
            hasMoreData = false;
            return;
        } 

        setTimeout(() => {
            let content = list.concat(boardList_initialized[0])
            setList(content)
        }, 3000)
       
    }


    return(
    <BasePage className='CLPCMNM08610'>
    <div className="d-flex">

        <div className='listContainer'>
            <div className='wirteWrapper' onClick={write} >
                <InputText placeholder='다양한 소통을 경험해 보세요.' />
                <Button className='ml10 lg' label='소통하기' />
            </div>

            <div className="sorting">
                <Button className="p-button-link" label="최신순" onClick={latest}></Button>
                <span className="divider">|</span>
                <Button className="p-button-link" label="오래된 순" onClick={oldest}></Button>
            </div>

            <InfiniteScroll
                dataLength={list.length}
                next={fetchMoreData}
                hasMore={hasMoreData} //true 이면 계속 데이터를 불러온다
                loader={<LoadingBar />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>마지막 게시물입니다</b>
                    </p>
                }
                refreshFunction={refresh}
            >
                {
                list.map((item:any, index) => (
                    <div className='boardWrapper' key={`board-${index}`}>
                        <div className="profile-info">
                            <span className="profile"><i className="pi pi-user"></i></span>
                            <span className="profileName">{item?.author?.name}</span>
                            <span className="divider">|</span>
                            <span>{item?.author?.department}</span>
                            <span className="divider">|</span>
                            <span>{item?.author?.createAt}</span>
                        </div>
                        <h5 className="title">{index} {item?.title}</h5>
                        <div className="content" dangerouslySetInnerHTML={{__html: item?.content }} />

                        <div className='btnsWrapper'>
                            {/* 좋아요 버튼 */}
                            <LikeButton 
                                likeNum={item?.likeCnt}
                                checked={item?.like}
                                setChecked={(e:any) => likeToggle(e, index)}
                            />

                            {/* 조회수 */}
                            <Button label={String(item?.viewCnt)} icon='pi pi-eye' className="p-button-text viewLable" disabled />

                            {/* 댓글 */}
                            <Button label={String(item?.commentCnt)} icon='pi pi-comment' className="p-button-text" />
                        </div>
                    </div>
                ))
            }
            </InfiniteScroll>
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