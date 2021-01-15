import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      classs: STATUS.NORMAL,
    };
  }

  onMouseEnter() {
    this.setState({ classs: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ classs: STATUS.NORMAL });
  }

  render() {
    const { children, page } = this.props;
    const { classs } = this.state;
    return (
      <a
        className={classs}
        href={page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </a>
    );
  }
}
