import { PlusCircle } from 'phosphor-react';
import './App.css';
import { Header, Task } from './components';

export const App = () => {
	return (
		<div>
			<Header />
			<div>
				<main className='main-container'>
					<div className='add-task-container'>
						<input
							type='text'
							placeholder='Adicione uma nova tarefa'
							className='add-task-field'
						/>
						<button type='submit' className='btn-create-task'>
							Criar
							<PlusCircle size={16} />
						</button>
					</div>
					<div className='tasks-container'>
						<div className='information-manager-container'>
							<div className='managed-information'>
								<span className='managed-information-text'>
									Tarefas criadas
								</span>
								<span className='managed-information-count'>5</span>
							</div>
							<div className='managed-information'>
								<span className='managed-information-text'>Concluídas</span>
								<span className='managed-information-count'>2 de 5</span>
							</div>
						</div>
						<Task content='teste' />
					</div>
				</main>
			</div>
		</div>
	);
};
