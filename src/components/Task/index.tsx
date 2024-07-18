import { Trash } from 'phosphor-react';
import styles from './styles.module.css';
import { ITask } from '../../interfaces';

interface ITaskProps extends ITask {
	onDeleteTask: (taskId: string) => void;
}

export const Task = ({ id, content, completed, onDeleteTask }: ITaskProps) => {
	const handleDeleteTask = () => {
		onDeleteTask(id);
	};

	return (
		<div className={styles.taskContainer}>
			<div className={styles.taskContentContainer}>
				<input
					type='checkbox'
					className={styles.taskCheckbox}
					checked={completed}
				/>
				<p>{content}</p>
			</div>
			<button title='Deletar tarefa' onClick={handleDeleteTask}>
				<Trash size={24} />
			</button>
		</div>
	);
};
