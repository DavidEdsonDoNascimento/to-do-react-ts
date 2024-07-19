import { PlusCircle } from 'phosphor-react';
import { Header, Task, ToDoListEmpty, InformationManager } from './components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ITask } from './interfaces';
import { ICompletedTask } from './interfaces/completedTask';

import './App.css';

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

	const completedTask = ({ taskId, completed }: ICompletedTask) => {
		const tasks = toDoList.filter((item) => item.id !== taskId);
		const task = toDoList.find((item) => item.id === taskId)!;
		setToDoList([
			...tasks,
			{
				...task,
				completed,
			},
		]);
	};

	const handleCreateTask = (event: FormEvent) => {
		event.preventDefault();
		setToDoList([
			...toDoList,
			{
				id: uuid(),
				content: newTaskText,
				completed: false,
			},
		]);
		setNewTaskText('');
	};

	const metrics = {
		createdTasksCount: toDoList.length,
		completedTasksCount: toDoList.filter((item) => item.completed).length,
	};

	const deleteTask = (taskId: string) => {
		setToDoList((list) => {
			return list.filter((item) => item.id !== taskId);
		});
	};

	const isNewTaskEmpty = newTaskText.trim() === '';

	return (
		<>
			<Header />
			<div>
				<main className='main-container'>
					<form onSubmit={handleCreateTask} className='add-task-container'>
						<input
							type='text'
							placeholder='Adicione uma nova tarefa'
							className='add-task-field'
							value={newTaskText}
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
						<InformationManager
							createdTasksCount={metrics.createdTasksCount}
							completedTasksCount={metrics.completedTasksCount}
						/>
						{
							toDoList.length ? (toDoList.map((task) => (
							<Task
								key={task.id}
								id={task.id}
								content={task.content}
								completed={task.completed}
								onDeleteTask={deleteTask}
								onCompletedTask={completedTask}
							/>
							)
						)) : <ToDoListEmpty /> 
						}
					</div>
				</main>
			</div>
		</>
	);
};
