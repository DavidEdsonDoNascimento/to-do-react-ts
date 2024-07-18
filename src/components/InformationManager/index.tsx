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
				<span className={styles.managedInformationText}>Tarefas criadas</span>
				<span className={styles.managedInformationCount}>
					{createdTasksCount}
				</span>
			</div>
			<div className={styles.managedInformation}>
				<span className={styles.managedInformationText}>Concluídas</span>
				<span className={styles.managedInformationCount}>
					{`${completedTasksCount} de ${createdTasksCount}`}
				</span>
			</div>
		</div>
	);
};
