import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import HomePage from 'app/routes/_index/route';
import AboutPage from 'app/routes/about/route';
import Aurellie from 'app/routes/aurellie/route';
import Contact from 'app/routes/contact/route';
import Luna from 'app/routes/luna/route';
import Nura from 'app/routes/nura/route';
import Rush from 'app/routes/rush/route';
import VelaBeauty from 'app/routes/velaBeauty/route';
import Velnoir from 'app/routes/velnoir/route';
import Work from '~/page/work/route';
import Yum from 'app/routes/yum/route';

const AppWrapper = createRemixStub([
    {
        Component: () => {
            return <App />;
        },
        children: [
            {
                path: '/',
                Component: HomePage,
            },
            {
                path: '/about',
                Component: AboutPage,
            },
            {
                path: '/aurellie',
                Component: Aurellie,
            },
            {
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/luna',
                Component: Luna,
            },
            {
                path: '/nura',
                Component: Nura,
            },
            {
                path: '/velaBeauty',
                Component: VelaBeauty,
            },
            {
                path: '/velnoir',
                Component: Velnoir,
            },
            {
                path: '/rush',
                Component: Rush,
            },
            {
                path: '/work',
                Component: Work,
            },
            {
                path: '/yum',
                Component: Yum,
            },
        ],
    },
]);

export default createBoard({
    name: 'App',
    Board: () => <AppWrapper />,
    environmentProps: {
        windowWidth: 1361.5295905247217,
        windowHeight: 768,
    },
});
