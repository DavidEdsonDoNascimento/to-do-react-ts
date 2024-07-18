import { Trash } from 'phosphor-react';

interface ITaskProps {
	content: string;
}
export const Task = ({ content }: ITaskProps) => {
	const handleDeleteTask = () => {
		console.log('Deletando tarefa:', content); // Simulando a exclusão de uma tarefa
		// Implementar a lógica de exclusão na sua API ou banco de dados.
	};

	return (
		<div className='bg-gray-400'>
			{content}
			<button title='Deletar tarefa' onClick={handleDeleteTask}>
				<Trash size={24} />
			</button>
		</div>
	);
};
