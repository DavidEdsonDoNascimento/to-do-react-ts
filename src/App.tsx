import { PlusCircle } from 'phosphor-react';
import { Header, Task } from './components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';
import { ITask } from './interfaces';

export const App = () => {
	console.log('teste');
	const [newTaskText, setNewTaskText] = useState<string>('');
	const [toDoList, setToDoList] = useState<ITask[]>([]);

	const handleTaskFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.target.setCustomValidity('');
		setNewTaskText(event.target.value);
	};

	const handleNewTaskInvalid = (event: ChangeEvent<HTMLInputElement>) => {
		event.target.setCustomValidity('preencha o conteúdo da tarefa');
	};

	const handleCreateTask = (event: FormEvent) => {
		event.preventDefault();
		setToDoList([
			...toDoList,
			{
				id: uuid(),
				content: newTaskText,
			},
		]);
	};

	const deleteTask = (taskId: string) => {
		setToDoList((list) => {
			return list.filter((item) => item.id !== taskId);
		});
	};

	const isNewTaskEmpty = newTaskText.trim() === '';

	return (
		<div>
			<Header />
			<div>
				<main className='main-container'>
					<form onSubmit={handleCreateTask} className='add-task-container'>
						<input
							type='text'
							placeholder='Adicione uma nova tarefa'
							className='add-task-field'
							onChange={handleTaskFieldChange}
							onInvalid={handleNewTaskInvalid}
							required
						/>
						<button
							type='submit'
							className='btn-create-task'
							disabled={isNewTaskEmpty}
						>
							Criar
							<PlusCircle size={16} />
						</button>
					</form>
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
						{toDoList.map((task) => (
							<Task
								key={task.id}
								id={task.id}
								content={task.content}
								completed={task.completed}
								onDeleteTask={deleteTask}
							/>
						))}
					</div>
				</main>
			</div>
		</div>
	);
};
