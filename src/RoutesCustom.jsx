import Day from './Components/makePart/Day';
import DayList from './Components/makePart/DayList';
import EmptyPage from './Components/makePart/EmptyPage';
import CreateWord from './Components/makePart/CreateWord';
import CreateDay from './Components/makePart/CreateDay';
import KossieIn from './Components/kossie-class/KossieIn';
import Handle from './Components/kossie-class/Handle';
import UseState01 from './Components/kossie-class/UseState01';
import UseStateForm from './Components/kossie-class/UseStateForm';
import UseEffect01 from './Components/kossie-class/UseEffect01';
import Component01 from './Components/kossie-class/Component01';
import ConditionalRender from './Components/kossie-class/ConditionalRender';
import ReactLoop from './Components/kossie-class/ReactLoop';
import MovieList from './Components/kossie-class/MovieList';
import GetUserData from './Components/kossie-class/GetUserData';
import UserInfo from './Components/kossie-class/kossie-componetns/UserInfo';

export default [
    {
        path: '/',
        element: DayList,
    },

    {
        path: '/day/:day',
        element: Day
    },

    {
        path: '/create_word',
        element: CreateWord
    },

    {
        path: '/create_day',
        element: CreateDay
    },

    {
        path: '/kossie_class',
        element: KossieIn
    },

    {
        path: '/kossie_class/handle',
        element: Handle
    },

    {
        path: '/kossie_class/hook_useState01',
        element: UseState01
    },

    {
        path: '/kossie_class/hook_useStateForm',
        element: UseStateForm
    },

    {
        path: '/kossie_class/hook_useEffect01',
        element: UseEffect01
    },

    {
        path: '/kossie_class/component01',
        element: Component01
    },

    {
        path: '/kossie_class/conditionalRender',
        element: ConditionalRender
    },

    {
        path: '/kossie_class/react_loop',
        element: ReactLoop
    },

    {
        path: '/kossie_class/movie_list',
        element: MovieList
    },

    {
        path: '/kossie_class/get_userData',
        element: GetUserData
    },

    {
        path: '/kossie_class/get_userData/:id',
        element: UserInfo
    },

    {
        path: '/*',
        element: EmptyPage
    },

];