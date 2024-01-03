import style from './container.module.css';
const Container = props => {
	return <div className={style.displayGrid}>{props.children}</div>;
};

export default Container;
