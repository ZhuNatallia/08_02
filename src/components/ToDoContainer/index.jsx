import React from 'react';
import ToDo from '../ToDo';
import { useState } from 'react';
import AddToDo from '../AddToDo';
import s from './style.module.css';

export default function ToDoContainer() {
	const defaultTodos = [
		{ id: 1, weekDay: 'Пн', priority: 'Важно', title: 'Побегать' },
		{
			id: 2,
			weekDay: 'Ср',
			priority: 'Не обязательно сегодня',
			title: 'Поспать',
		},
	];

	const [todos, setTodos] = useState(defaultTodos);

	const createToDo = (weekDay, priority, title) => {
		const toDoFromDay = todos.find(({ weekDay }) => weekDay === {weekDay});
		if (toDoFromDay) {
			toDoFromDay.count++;
			setTodos([...todos])
		} else {
			setTodos((prev) => {
			const newToDo = [
				...prev,
				{
					id: Date.now(),
					weekDay,
					priority,
					title,
				},
			];
			newToDo.sort((a, b) => a.weekDay - b.weekDay);
			return newToDo;
		});
		}
	};

	const deleteToDo = (delId) => {
		const newArr = todos.filter(({ id }) => id !== delId);
		setTodos(newArr);
	};
	const deleteTask = (delTask) => {
		const newArrTask = todos.filter(({ title }) => title !== delTask);
		setTodos(newArrTask);
	};

	/* const dayWeek = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][
		new Date().getDay()
	]; */

	return (
		<div className={s.wrapper}>
			<AddToDo createToDo={createToDo} />
			<div>
				{todos.map((todo) => (
					<ToDo
						key={todo.id}
						{...todo}
						deleteToDo={deleteToDo}
						deleteTask={deleteTask}
						createToDo={createToDo}
					/>
				))}
			</div>
		</div>
	);
}
