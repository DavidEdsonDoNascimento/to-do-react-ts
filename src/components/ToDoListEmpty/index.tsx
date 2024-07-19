import styles from './styles.module.css';

export const ToDoListEmpty = () => {
	return (
		<div className={styles.container}>
			<img src='/clipboard.svg' />
			<div className={styles.textContainer}>
				<p>Você ainda não tem tarefas cadastradas</p>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>
	);
}
