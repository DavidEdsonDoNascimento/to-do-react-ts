import styles from './styles.module.css';

interface IToDoListMetrics {
	createdTasksCount: number;
	completedTasksCount: number;
}

export const InformationManager = ({
	createdTasksCount,
	completedTasksCount,
}: IToDoListMetrics) => {
	return (
		<div className={styles.informationManagerContainer}>
			<div className={styles.managedInformation}>
				<span>Tarefas criadas</span>
				<span>
					{createdTasksCount}
				</span>
			</div>
			<div className={styles.managedInformation}>
				<span>Concluídas</span>
				<span>
					{`${completedTasksCount} de ${createdTasksCount}`}
				</span>
			</div>
		</div>
	);
};
