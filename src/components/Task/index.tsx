import { Trash } from 'phosphor-react';
import { ITask } from '../../interfaces';
import { ChangeEvent } from 'react';
import { ICompletedTask } from '../../interfaces/completedTask';

import styles from './styles.module.css';

interface ITaskProps extends ITask {
	onDeleteTask: (taskId: string) => void;
	onCompletedTask: (task: ICompletedTask) => void;
}

export const Task = ({
	id,
	content,
	completed,
	onDeleteTask,
	onCompletedTask,
}: ITaskProps) => {
	const handleDeleteTask = () => {
		onDeleteTask(id);
	};

	const handleToggleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
		onCompletedTask({
			taskId: id,
			completed: event.target.checked,
		});
	};

	return (
		<div className={styles.taskContainer}>
			<div className={styles.taskContentContainer}>
				<input
					id={id}
					type='checkbox'
					className={styles.taskCheckbox}
					checked={completed}
					onChange={handleToggleCheckbox}
				/>
				<label htmlFor={id}>
					{completed ? (
						<p className='text-sm text-gray-300'>
							<del>{content}</del>
						</p>
					) : (
						<p className='text-sm text-gray-100'>{content}</p>
					)}
				</label>
			</div>
			<button title='Deletar tarefa' onClick={handleDeleteTask}>
				<Trash size={24} />
			</button>
		</div>
	);
};
