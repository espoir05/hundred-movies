import './style.css';

export default class Layout {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
  }

  render = () => {
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('column', 'left-column');

    leftColumn.appendChild(this.props.search);

    const rightColumn = document.createElement('div');
    rightColumn.classList.add('column', 'right-column');

    rightColumn.appendChild(this.props.favoris);

    this.parent.appendChild(leftColumn);
    this.parent.appendChild(rightColumn);
  };
}