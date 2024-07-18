import './App.css';
import { Header, Task } from './components';

export const App = () => {
	return (
		<div>
			<Header />
			<div>
				<main>
					<Task content='teste' />
				</main>
			</div>
		</div>
	);
};
