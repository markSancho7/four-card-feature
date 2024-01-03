import style from './principalTitle.module.css';
const PrincipalTitle = props => {
	return (
		<div className={style.container}>
			<h1 className={style.firstTitle}>Reliable, efficient delivery</h1>
			<h1 className={style.secondTitle}>Powered by Technology</h1>
			<p className={style.description}>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</div>
	);
};

export default PrincipalTitle;
