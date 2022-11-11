import { InputText, Button, Dialog, Checkbox, Toast, ToastMessageType, confirmDialog } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPMANM00100.css';
import Visual from '../../../shared/components/ui/visual/Visual';
import Card from '../../../shared/components/ui/card/Card';
import useBasePage from '../../../shared/hooks/base-page.hook';
import mainImg from '../../../../assets/images/main-img.png';
import listImg from '../../../../assets/images/manual-img.png';
import { Link } from 'react-router-dom';
import ReviewPopupMotion from '../../../shared/components/motion/ReviewPopupMotion';

// 메인 화면
const CLPMANM00100: React.FC = ({}) => {
    const {goPage} = useBasePage()

    const [value, setValue] = React.useState('');
    const btnClick = () => {
        alert(0)
    }

    /**************************************************** WINDOW POPUP START ****************************************************/
    const commonPopupStyle = {top:60, width: 500}
    
    //윈도우 팝업이 뜨는 위치
    const windowPopupStyles = [
        {left:0, ...commonPopupStyle},
        {left:510, ...commonPopupStyle},
        {left:1020, ...commonPopupStyle},
    ]
    

    //관리자에서 등록한 윈도우 팝업
    const windowPopups = [
        {
            header: 'popup 1',
            content: <>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
            <br />
            <p>'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <br />
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
            <br />
            <p>'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <br />
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </>
        },
        {
            header: 'popup 2',
            content: 'hello!'
        },
        {
            header: 'popup 3',
            content: '팝업은 3개까지!!!! 보여주는게 좋아요'
        },

    ]

    //초기 윈도우 팝업 보여주기 값을 초기화해준다
    let windowPopup_display = Array(windowPopups.length).fill({ chkHide7days: false, display: true })

    const [displayWinPop, setDisplayWinPop] = React.useState(windowPopup_display);

    const handleWinPopHide = (index:number) => {
        let updateModal = displayWinPop.map((data, i) => index === i ? { chkHide7days: false, display: false } : data )
        setDisplayWinPop(updateModal);
    }

    const handleChkHide7days = (index:number) => {
        let updateModal = displayWinPop.map((data, i) => index === i ? { ...data, chkHide7days: !displayWinPop[index].chkHide7days } : data )
        setDisplayWinPop(updateModal);
    }

    const renderFooter = (index:number) => (
        <div className='bgcolor-black d-flex-default pr10'>
            <Checkbox className='ml-auto' inputId={`cb${index}`} value='New York' onChange={()=>{ handleChkHide7days(index) }} checked={displayWinPop[index].chkHide7days}></Checkbox>
            <label htmlFor={`cb${index}`} className='p-checkbox-label color-white'>7일간 팝업창 열지 않기</label>
            <Button className='closeBtn ml40' icon='pi pi-times' iconPos='right' label='닫기' onClick={() => handleWinPopHide(index)} autoFocus />
        </div>
    );

    /**************************************************** WINDOW POPUP START ****************************************************/




    /**************************************************** TOAST START ****************************************************/
    
    const toasts = [
        {
            severity:'success', 
            summary: 'Success Message', 
            detail:'Message Content',
            sticky: true
        },
        {
            severity:'info', 
            summary: 'Info Message', 
            detail:'Message Content',
            sticky: true
        },
        {
            severity:'warn', 
            summary: 'Warn Message', 
            detail:'Message Content',
            sticky: true
        },
        {
            severity:'error', 
            summary: 'Error Message', 
            detail:'Message Content',
            sticky: true
        },
    ]

    const toastRef = React.useRef<any>(null);

    React.useEffect(() => {
        toastRef?.current?.show(toasts)
    }, [])

    /**************************************************** TOAST END ****************************************************/




    /**************************************************** The-Fast 클라우드 독려 팝업 START ****************************************************/

    confirmDialog({
        message: <div className='text-center'>
            <h1 className='mb10'>축하합니다!</h1>
            <ReviewPopupMotion />
            <p className='mt10 mb10'>
                <strong>The-Fast Cloud 프로그램 과정을<br/>잘 따라와주셔서 감사합니다.</strong>
            </p>
            <p>
                앞으로도 클라우드 업무를 진행하실 때 클라우드 추진 Cell과 함께 협업하셔서 많은 도움이 되시길 바라며, The- Fast Cloud 프로그램 과정에 참여하셔서 도움이 되신 후기를 <strong><u>아래의 소통공간에 남겨주시면 클라우드 추진 Cell 에게 더없을 큰 응원</u></strong>이 될 것 같습니다.
            </p>
        </div>,
        acceptLabel: '소통공간에 후기 남기러 가기',
        className: 'noHeader oneButton',
        accept: () => {},
    })

    /**************************************************** The-Fast 클라우드 독려 팝업 END ****************************************************/





    //더보기 버튼
    const addBtn = () => {

    }

    //카테고리
    const selectCategory = (e:any, id:number) => {
        setSelectCat(id)
    }
    
    const [selectCat, setSelectCat] = React.useState(0)

    const category = ['전체', 'Web/WAS/DB', '컨테이너/도커', '형상관리', '모니터링', 'CI/CD', '협업툴', '프레임워크', '기타' ];
    const categoryItem = category.map((label, index) =>
        <Button key={'category-'+index} label={label} className={`p-button-rounded roundBtn ${selectCat === index ? 'on':''}`} onClick={(e) => selectCategory(e, index)}/>
    );

    //card list
    const cards =[
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'UPDATE',
                    type: 'tag-update',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className='p-button xxl' onClick={btnClick}/>
        },
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className='p-button xxl' onClick={btnClick}/>
        },
        
        {   
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className='p-button xxl' onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className='p-button xxl' onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className='p-button xxl' onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className='p-button xxl' onClick={btnClick}/>
        },
    ]
       
    //visual 배너
    const banners = [
        {
            title:<span>여신 심사 금리 계산기</span>,
            description:<span>저희 여신 심사부서가 진행한 금리 산출 계산기 앱을 출시했습니다.<br/><br/>
            메뉴얼과 파일 활용하시고, 카탈로그 활용하셔서 바로 다양한 클라우드 프로젝트 해보세요.</span>,
            buttonLabel:'매뉴얼 보러가기',
            textAlign: 'text-left',
            buttonClick: () => { goPage('') },
            showButton:false,
            images:<img src={mainImg} alt='메인 이미지'></img>,

        },
        {
            title:<span>Cloud DB<br/>for PostgreSQL</span>,
            description:<span>PostgreSQL 서비스를 손쉽게 구축하고<br/>자동으로 관리합니다.</span>,
            buttonLabel:'매뉴얼 보러가기',
            textAlign: 'text-left',
            buttonClick: () => { goPage('') },
            showButton:false,
            images:<img src={listImg} alt='매뉴얼 이미지'></img>,
        },
        

    ]
    
    //최근게시물
    const noticeList = [
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
    ]
    const communicationList = [
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
    ]

    return(
    <BasePage className='CLPMANM00100'>
        {/* 배너 */}
        <Visual banners={banners} />
        <div className='contentWrap'>
            <div>
                <h2 className='contentTitle mt60'>다양한 클라우드를 만나고, 경험하세요.</h2>
                <div className='text-center mt30'>
                    <span className='p-input-icon-right'>
                        <i className='pi pi-search' />
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} className='mainSearch' />
                    </span>
                </div>
                
                <div className='d-flex justify-center category mt60 mb40'>
                    {/* 카테고리 버튼*/}
                    {categoryItem}
                </div>
            </div>
            
        
            <div className='content'>
            {/* 리스트 카드 */}
            {
                cards?.map((card, index) => ( 
                    <Card 
                        key={'card-'+index} 
                        { ...card }
                    />
                ))
            }
            </div>
            
            <div className='d-flex justify-center'>

                <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={addBtn} />
            </div>

            <div>
                <h2 className='contentTitle mt60'>다양한 클라우드 지원을 받으세요.</h2>

                <div className='banner mt40'>
                    <div className='bannerItem'>
                        <p>정보화사업의 예산산정을 효율적으로 <br/>산정하도록 도와드립니다.</p>
                        <Button label='The-Fast Cloud 신청하기' className='p-button outline' onClick={btnClick}/>
                    </div>
                    <div className='bannerItem item2'>
                        <p>클라우드 주요 기능을 신청해서<br/>적극 활용해보세요.</p>
                        <Button label='서비스 카탈로그 신청하기' className='p-button outline' onClick={btnClick}/>
                    </div>
                </div>
            </div>
        </div>

        <div className='recentPostWrap mt60'>
            <div className='recentPost'>
                <div className='recentList'>
                    <div className='title'>
                        <h2>공지사항</h2>
                        <p>
                            <Link to='/' className='more'>더보기<i className='pi pi-angle-right'></i></Link> 
                        </p>
                    </div>

                    <ul>
                        {
                            noticeList.map((noticeList,index) => (
                                    <li key={`noticeList${index}`}>
                                        <span>{noticeList.title}</span>
                                        <span>{noticeList.date}</span>
                                    </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='recentList'>
                    <div className='title'>
                        <h2>소통공간</h2>
                        <p>
                            <Link to='/' className='more'>더보기<i className='pi pi-angle-right'></i></Link> 
                        </p>
                    </div>
                    
                    <ul>
                        {
                            communicationList.map((communicationList,index) => (
                                    <li key={`communicationList${index}`}>
                                        <span>{communicationList.title}</span>
                                        <span>{communicationList.date}</span>
                                    </li>
                            ))
                        }
                    </ul>
                </div>  
            </div>
            
        </div> 
               

        {/* 윈도우 팝업 */}
        {
            windowPopups.map( (popup, index) =>
                <Dialog 
                    position='top-left'
                    closable={true}
                    blockScroll={false}               //true 이면 배경 스크롤을 막는다
                    key={`winpop-${index}`}
                    className='dialogLikeWindowPopup' 
                    header={popup.header}
                    visible={displayWinPop[index].display} 
                    modal={false} 
                    style={windowPopupStyles[index]} 
                    footer={renderFooter(index)} 
                    onHide={() => handleWinPopHide(index)}
                >
                    {popup.content}
                </Dialog>
            )
        }

        {/* TOAST */}
        <Toast ref={toastRef} position='bottom-right' />   

    </BasePage>)
}
export default CLPMANM00100;