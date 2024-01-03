import Card from './components/Card/Card';
import Container from './components/Container/Container';
import PrincipalTitle from './components/PrincipalTitle/PrincipalTitle';

const App = () => {
	return (
		<Container>
			<PrincipalTitle></PrincipalTitle>
			<Card
				cardName='Supervisor'
				cardDescription='Monitors activity to identify project roadblocks'
				cardLink='./public/images 3/icon-supervisor.svg'
				borderColor='border-green'
			></Card>
			<Card
				cardName='Team Builder'
				cardDescription='Scans our talent network ti create the optimal for your project'
				cardLink='./public/images 3/icon-team-builder.svg'
				borderColor='border-red'
			></Card>
			<Card
				cardName='Karma'
				cardDescription='Regularly evaluates our talent to ensure quality'
				cardLink='./public/images 3/icon-karma.svg'
				borderColor='border-orange'
			></Card>
			<Card
				cardName='Calculator'
				cardDescription='Uses data from past projects to provide better delivery estimates'
				cardLink='./public/images 3/icon-calculator.svg'
				borderColor='border-blue'
			></Card>
		</Container>
	);
};

export default App;
