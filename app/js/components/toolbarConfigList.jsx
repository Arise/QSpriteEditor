import React from 'react'
import Manager from '../manager'

import { ListConfig } from './listToolbar'

export default class ConfigList extends React.Component {
  addNew = (e) => {
    Manager.addConfig();
    e.stopPropagation();
  }
  delete = (e) => {
    Manager.deleteConfig(this.props.currentConfig)
    e.stopPropagation();
  }
  delButton() {
    return (
      <button onClick={this.delete}>
        <i className="fa fa-minus" aria-hidden />
        Delete
      </button>
    )
  }
  render() {
    const {
      configs,
      currentConfig,
      selectedContext
    } = this.props;
    return (
      <div className="toolbar list">
        <div className="header">
          Configs
        </div>
        <ListConfig
          items={configs}
          selected={currentConfig}
          selectedContext={selectedContext}
        />
        <div className="footer">
          <button onClick={this.addNew}>
            <i className="fa fa-plus" aria-hidden />
            New
          </button>
          { currentConfig !== -1 && this.delButton() }
        </div>
      </div>
    )
  }
}
