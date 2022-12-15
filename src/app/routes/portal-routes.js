import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../shared/layouts/loader/Loadable';

//:::::::::::::::::::::::::::::::::::::::: Layouts ::::::::::::::::::::::::::::::::::::::::::

const Callback = Loadable(lazy(() => import('../pages/auth/Callback')));

const BlankLayout = Loadable(lazy(() => import('../shared/layouts/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../shared/layouts/FullLayout')));

// :::::::::::::::::::::::::::::::::::::::: Pages :::::::::::::::::::::::::::::::::::::::::::

//UI GUIDE
const UI_GUIDE = Loadable(lazy(() => import('../pages/ui-guide/UiGuide')));
const ButtonGuide = Loadable(lazy(() => import('../pages/ui-guide/ButtonGuide')));
const InputGuide = Loadable(lazy(() => import('../pages/ui-guide/InputGuide')));
const SelectGuide = Loadable(lazy(() => import('../pages/ui-guide/SelectGuide')));
const PopupGuide = Loadable(lazy(() => import('../pages/ui-guide/PopupGuide')));
const TableGuide = Loadable(lazy(() => import('../pages/ui-guide/TableGuide')));
const ChartGuide = Loadable(lazy(() => import('../pages/ui-guide/ChartGuide')));
const UploadGuide = Loadable(lazy(() => import('../pages/ui-guide/UploadGuide')));
const NoDataGuide = Loadable(lazy(() => import('../pages/ui-guide/NoDataGuide')));
const ExcelGuide = Loadable(lazy(() => import('../pages/ui-guide/ExcelGuide')));

const CheckboxGuide = Loadable(lazy(() => import('../pages/ui-guide/CheckboxGuide')));
const DatePickerGuide = Loadable(lazy(() => import('../pages/ui-guide/DatePickerGuide')));
const InfoGuide = Loadable(lazy(() => import('../pages/ui-guide/InfoGuide')));
const LabelGuide = Loadable(lazy(() => import('../pages/ui-guide/LabelGuide')));
const RadioGuide = Loadable(lazy(() => import('../pages/ui-guide/RadioGuide')));
const TabGuide = Loadable(lazy(() => import('../pages/ui-guide/TabGuide')));
const ToggleGuide = Loadable(lazy(() => import('../pages/ui-guide/ToggleGuide')));




// 메인
const CLPMANM00100 = Loadable(lazy(() => import('../pages/usr/man/CLPMANM00100')));
const Main = Loadable(lazy(() => import('../pages/usr/man/Main')));

// 클라우드소개
const CLPCLTM00200 = Loadable(lazy(() => import('../pages/usr/inr/CLPCLTM00200')));
const CLPTFCM00300 = Loadable(lazy(() => import('../pages/usr/inr/CLPTFCM00300')));
const CLPICPM00400 = Loadable(lazy(() => import('../pages/usr/inr/CLPICPM00400')));
const CLPIASM00500 = Loadable(lazy(() => import('../pages/usr/inr/CLPIASM00500')));
const CLPISCM00800 = Loadable(lazy(() => import('../pages/usr/inr/CLPISCM00800')));
const CLPASCM01700 = Loadable(lazy(() => import('../pages/usr/inr/CLPASCM01700')));
const CLPASCM08900 = Loadable(lazy(() => import('../pages/usr/inr/CLPASCM08900')));
const CLPASCM08800 = Loadable(lazy(() => import('../pages/usr/inr/CLPASCM08800')));

// 매뉴얼
const CLPMNLM04010 = Loadable(lazy(() => import('../pages/usr/mnl/CLPMNLM04010')));

// 클라우드 지원 ================================================================================
// 이벤트
const CLPENTM07210 = Loadable(lazy(() => import('../pages/usr/asc/ent/CLPENTM07210')));
const CLPENTM07320 = Loadable(lazy(() => import('../pages/usr/asc/ent/CLPENTM07320')));
const CLPENTM07330 = Loadable(lazy(() => import('../pages/usr/asc/ent/CLPENTM07330')));

// 공지사항
const CLPNTCM07410 = Loadable(lazy(() => import('../pages/usr/asc/ntc/CLPNTCM07410')));
const CLPNTCM07520 = Loadable(lazy(() => import('../pages/usr/asc/ntc/CLPNTCM07520')));

// 자주묻는질문
const CLPFAQM07600 = Loadable(lazy(() => import('../pages/usr/asc/faq/CLPFAQM07600')));

// 건의 및 개선
const CLPQNAM07800 = Loadable(lazy(() => import('../pages/usr/asc/qna/CLPQNAM07800')));

// 설문
const CLPSGSM07910 = Loadable(lazy(() => import('../pages/usr/asc/sgs/CLPSGSM07910')));
const CLPSGSM08020 = Loadable(lazy(() => import('../pages/usr/asc/sgs/CLPSGSM08020')));

// 알림 이벤트 노출 상세
const CLPMMBM08500 = Loadable(lazy(() => import('../pages/usr/asc/mmb/CLPMMBM08500')));

// 소통공간
const CLPCMNM08610 = Loadable(lazy(() => import('../pages/usr/asc/cmn/CLPCMNM08610')));
const CLPCMNM08720 = Loadable(lazy(() => import('../pages/usr/asc/cmn/CLPCMNM08720')));
const CLPCMNM08730 = Loadable(lazy(() => import('../pages/usr/asc/cmn/CLPCMNM08730')));








// Routes ==================================================================================
const portalRoutes = [
  {
    path: '/',
    element: <Navigate to='/man' />
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { 
        path: 'ui',
        name: 'UI guide', 
        children: [
          {
            path: 'guide', 
            name: 'CSS Guide', 
            element: <UI_GUIDE />
          },
          {
            path: 'button', 
            name: 'Button Guide', 
            element: <ButtonGuide />
          },
          {
            path: 'input', 
            name: 'Input Guide', 
            element: <InputGuide />
          },
          {
            path: 'select', 
            name: 'Select Guide', 
            element: <SelectGuide />
          },
          {
            path: 'popup', 
            name: 'Popup Guide', 
            element: <PopupGuide />
          },
          {
            path: 'table', 
            name: 'Table Guide', 
            element: <TableGuide />
          },
          {
            path: 'excel', 
            name: 'Excel Import/Export', 
            element: <ExcelGuide />
          },
          {
            path: 'radio', 
            name: 'Radio Guide', 
            element: <RadioGuide />
          },
          {
            path: 'check', 
            name: 'Checkbox Guide', 
            element: <CheckboxGuide />
          },
          {
            path: 'datepicker', 
            name: 'DatePicker Guide', 
            element: <DatePickerGuide />
          },
          {
            path: 'info', 
            name: 'Info Guide', 
            element: <InfoGuide />
          },
          {
            path: 'label', 
            name: 'Label Guide', 
            element: <LabelGuide />
          },
          {
            path: 'tab', 
            name: 'Tab Guide', 
            element: <TabGuide />
          },
          {
            path: 'toggle', 
            name: 'Toggle Guide', 
            element: <ToggleGuide />
          },
          {
            path: 'chart', 
            name: 'Chart Guide', 
            element: <ChartGuide />
          },
          {
            path: 'upload', 
            name: 'Upload Guide', 
            element: <UploadGuide />
          },
          {
            path: 'nodata', 
            name: 'NoData Guide', 
            element: <NoDataGuide />
          },
        ]
      },
      { 
        path: 'man', 
        name: '메인', 
        element: <CLPMANM00100 />,
      },
      { 
        path: 'test', 
        name: '메인', 
        element: <Main />,
      },
      { 
        path: 'inr', 
        name: '클라우드 소개', 
        children: [
          {path: 'cell', name:'클라우드 추진 Cell 소개', element: <CLPCLTM00200 />, subTitle: 'IBK 클라우드의 미래와 함께하는 클라우드 추진 Cell을 소개합니다.'},
          {path: 'tfc', name:'The fast cloud 지원 프로그램', element: <CLPTFCM00300 />, subTitle: '사업 추진부서가 손쉽게 클라우드를 도입하도록 맞춤형 멘토링을 제공합니다.'},
          {path: 'portal', name:'클라우드 포털 소개', element: <CLPICPM00400 />, subTitle: '클라우드 포탈은 IBK 맞춤형 클라우드를 신속하게 도입/운영 할 수 있도록 지원합니다.'},
          {path: 'cloud',  name:'클라우드 서비스 소개',element: <CLPIASM00500 />, subTitle: '클라우드 서비스의 관련 용어와 지식을 소개해드립니다.'},
        ],
      },
      { 
        path: 'asc', 
        name: '신청하기', 
        children: [
          {path: 'request', name:'신청하기', element: <CLPASCM08800 />, subTitle: '클라우드 사업을 원활하게 추진하기 위해 빠르게 신청하세요.'},
          {path: 'cat-req', name:'서비스 카탈로그 신청', element: <CLPASCM01700 />, subTitle: '클라우드 허브에서 제공하는 주요 기능을 신청해주세요.'},
          {path: 'tfc-req', name:'The fast cloud 서비스 신청', element: <CLPISCM00800 />, subTitle: '정보보호사업의 예산과 진행을 원활하게 도와드립니다.'},
          {path: 'cat-basket', name:'서비스 카탈로그 신청 장바구니', element: <CLPASCM08900 />, subTitle: '클라우드 허브에서 제공하는 주요 기능을 신청해주세요.'},
        ],
      },
      { 
        path: 'mnl', 
        name: '매뉴얼 목록', 
        element: <CLPMNLM04010 />,
        subTitle: '다양한 클라우드 업무에 활용한 적용사례와 매뉴얼을 확인하세요.'
      },
      { 
        path: 'spr',
        name: '클라우드 지원', 
        children: [
          { 
            path: 'ntc',
            name: '공지사항',
            children: [
              {path: 'list', name:'공지사항 목록', element: <CLPNTCM07410 />, subTitle: '클라우드 포탈의 다양한 내용을 확인하세요.'},
              {path: ':id', name:'공지사항 상세', element: <CLPNTCM07520 />, subTitle: '클라우드 포탈의 다양한 내용을 확인하세요.'},
            ],
          },
          {
            path: 'faq', 
            name: '자주 묻는 질문', 
            element: <CLPFAQM07600 />,
            subTitle: '클라우드 포탈 이용에 대한 선별된 질문과 답변을 확인하세요.'
          },
          { 
            path: 'ent',
            name: '이벤트',
            children: [
              {path: 'list', name:'이벤트 목록', element: <CLPENTM07210 />, subTitle: '클라우드 포탈에서 다양한 이벤트를 등록하고, 참여도 해보세요.'},
              {path: ':id', name:'이벤트 상세', element: <CLPENTM07320 />, subTitle: '클라우드 포탈에서 다양한 이벤트를 등록하고, 참여도 해보세요.'},
              {path: 'register', name:'이벤트 등록', element: <CLPENTM07330 />, subTitle: '클라우드 포탈에서 다양한 이벤트를 등록하고, 참여도 해보세요.'},
            ],
          },
          { 
            path: 'cmn',
            name: '소통공간',
            children: [
              {path: 'list', name:'소통공간 목록', element: <CLPCMNM08610 />, subTitle: '클라우드 포탈에서 다양한 소통을 즐겨보세요.'},
              {path: ':id', name:'소통공간 상세', element: <CLPCMNM08720 />, subTitle: '클라우드 포탈에서 다양한 소통을 즐겨보세요.'},
              {path: 'register', name:'소통공간 등록', element: <CLPCMNM08730 />, subTitle: '클라우드 포탈에서 다양한 소통을 즐겨보세요.'},
            ],
          },
          { 
            path: 'sgs',
            name: '설문',
            children: [
              {path: 'list', name:'설문 목록', element: <CLPSGSM07910 />, subTitle: '다양한 설문에 적극 참여해주세요.'},
              {path: ':id', name:'설문 상세', element: <CLPSGSM08020 />, subTitle: '다양한 설문에 적극 참여해주세요.'},
            ],
          },
          {
            path: 'mmb', 
            name: '알림센터', 
            element: <CLPMMBM08500 />,
            subTitle: '클라우드 포탈의 다양한 알림을 확인할 수 있습니다.'
          },
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      // { path: '404', element: <Error /> },
      // { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default portalRoutes;
