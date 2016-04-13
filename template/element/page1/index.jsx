import React from 'react';
import ReactDOM from 'react-dom';

import motionTool from '../../tool/';

import Page1 from './Page1';

import '../../common/ant-d.less';

import config from './webdefault.config.js';

const Components = [
  { name: 'page1', comp: Page1 },
];

class Index extends React.Component {
  render() {
    const childrenToRender = Components.map(Component => {
      const props = this.props[Component.name] || {};
      return React.createElement(
        Component.comp,
        { ...props, key: Component.name + (props.dateNow || 0) }
      );
    });
    return (<setction className="content-wap">
      {childrenToRender}
    </setction>);
  }
}

const Demo = motionTool(config)(Index);

ReactDOM.render(<Demo />, document.getElementById('react-content'));