import { HashRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import Pages from './Pages';

/*
 * 2 - в файле Sidebar.tsx дописать className так чтоб вешался класс s.active когда мы уже на соответствующей странице
 * */

function HW5() {
  return (
    <HashRouter>
      <Layout>
        <Pages />
      </Layout>
    </HashRouter>
  );
}

export default HW5;
