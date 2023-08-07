import {Suspense, useState} from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import {MenuInfo} from "rc-menu/lib/interface";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('about', '/about', <PieChartOutlined />),
    getItem('news', '/news', <DesktopOutlined />),
    getItem('User', 'User', <UserOutlined />, [
        getItem('home', '/home'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'Team', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', 'Files', <FileOutlined />),
];

const Home = () => {
    const navigate = useNavigate();
    const [keyPath, setKeyPath] = useState<string[]>([]);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleChangeMenu = (item: MenuInfo) => {
        console.log(item)
        setKeyPath(item.keyPath)
        if(item.key === "/news"){
            navigate(item.key, {state: {type: 5}})
        }else {
            navigate(item.key)
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleChangeMenu} />
            </Sider>
            <Layout>
                <div style={{ height: 30, background: colorBgContainer }}>
                    <Breadcrumb style={{ margin: "5px 0" }}>
                        {keyPath.reverse().map((item: string, key: number) => <Breadcrumb.Item key={key}>{item}</Breadcrumb.Item>)}
                        {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                    </Breadcrumb>
                </div>
                <Content style={{ margin: 10, backgroundColor: colorBgContainer }}>
                    <Suspense fallback={<p>loading...</p>}>
                        <Outlet />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
