import style from './card.module.css';
const Card = props => {
	return (
		<div
			className={`${style.size} ${style[props.borderColor]} ${
				style[props.gridColumn]
			}`}
		>
			<h1 className={style.title}>{props.cardName}</h1>
			<p className={style.description}>{props.cardDescription}</p>
			<img className={style.photografy} src={props.cardLink} />
		</div>
	);
};
export default Card;
