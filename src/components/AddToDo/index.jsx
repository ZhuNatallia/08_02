import React from 'react';
import s from './style.module.css';

export default function AddToDo({ createToDo}) {
	const onSubmit = (event) => {
		event.preventDefault();
		const { weekDay, priority, title } = event.target;
		createToDo(weekDay.value, priority.value, title.value);
		weekDay.value = '';
		priority.value = '';
		title.value = '';
	};



	return (
		<form onSubmit={onSubmit} className={s.wrapperForm}>
			<div className={s.wrapperTitle}>
				<select name='weekDay'>
					<option value='' disabled selected>
						Выберите день
					</option>
					<option value='ПН'>ПН</option>
					<option value='ВТ'>ВТ</option>
					<option value='СР'>СР</option>
					<option value='ЧТ'>ЧТ</option>
					<option value='ПТ'>ПТ</option>
					<option value='СБ'>СБ</option>
					<option value='ВС'>ВС</option>
				</select>
				<select name='priority' className={s.date}>
					<option disabled selected value=''>
						Выберите важность
					</option>
					<option value='Важно' name='important'>
						Важно
					</option>
					<option
						value='Не обязательно сегодня'
						name='dontUrgent'
					>
						Не обязательно сегодня
					</option>
				</select>
				<input
					type='text'
					placeholder='Описание'
					name='title'
					className={s.info}
				/>
			</div>
			<button className={s.btn}>Добавить</button>
		</form>
	);
}
