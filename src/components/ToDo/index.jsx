import React from 'react';
import s from './style.module.css';

export default function ToDo({
	id,
	weekDay,
	priority,
	title,
	deleteToDo,
	deleteTask,
}) {
	const styleRed = {
		backgroundColor: 'rgba(121, 21, 59, 0.992)',
	};
	const styleGreen = {
		backgroundColor: 'rgb(21, 120, 84)',
	};

	return (
		<div className={s.todo}>
			<button className={s.btn} onClick={() => deleteToDo(id)}>
				X
			</button>
			<div className={s.day}>
				<p>{weekDay}</p>
			</div>
			<div className={s.delTask}>
				<p style={priority === 'Важно' ? styleRed : styleGreen}>{title}</p>
				<button className={s.btnTask} onClick={() => deleteTask(title)}>
					X
				</button>
			</div>
		</div>
	);
}
