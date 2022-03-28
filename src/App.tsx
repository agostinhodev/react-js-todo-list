import React, { useEffect, useState } from 'react'
import { Todo } from './models/Todo'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

import {
	Container,
	TodoDiv,
	Title,
	Error,
	TodoForm,
	TodoFormInput,
	TodoFormButtonSubmit,
	TextWhite,
	TodosList,
	TodoItem,
	TodoItemView,
	TodoItemText,
	TodoItemDescription,
	RemoveTodoButton,
} from './styles'

const App: React.FC = () => {
	const [todos, setTodos] = useState<Array<Todo>>([] as Array<Todo>)

	//Inputs
	const [description, setDescription] = useState<string>('')
	const [date, setDate] = useState<Date>(new Date())

	const updateDate = (value: string) => {
		let dateArr = value.split('-')
		setDate(new Date(parseInt(dateArr[0]), parseInt(dateArr[1]) - 1, parseInt(dateArr[2])))
	}

	const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		let newTodo: Todo = {
			id: uuidv4(),
			description,
			status: false,
			date,
		}

		setTodos((current) => [...current, newTodo])

		setDate(new Date())
		setDescription('')
	}

	const removeTodo = (id: string) => {
		if (window.confirm('Are you sure?')) {
			let todosCopy = [...todos]
			todosCopy = todosCopy.filter((item) => item.id !== id)
			setTodos(todosCopy)
		}
	}

	return (
		<Container>
			<TodoDiv>
				<Title>To Do List</Title>

				<TodoForm onSubmit={(event) => addNewTodo(event)}>
					<TodoFormInput
						placeholder="Please input description..."
						minLength={1}
						maxLength={100}
						required
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
					<TodoFormInput
						type="date"
						placeholder="Please select the date..."
						minLength={1}
						maxLength={10}
						required
						onChange={(event) => updateDate(event.target.value)}
					/>
					<TodoFormButtonSubmit>
						<TextWhite>Add New Todo</TextWhite>
					</TodoFormButtonSubmit>
				</TodoForm>

				{todos.length === 0 && <Error>No todos found</Error>}

				{todos.length > 0 && (
					<>
						<TodoItemText>{todos.length} todos</TodoItemText>

						<TodosList>
							{todos.map((item, index) => (
								<TodoItem key={index}>
									<TodoItemView>
										<TodoItemDescription>Id:</TodoItemDescription>
										<TodoItemText>{item.id}</TodoItemText>
									</TodoItemView>
									<TodoItemView>
										<TodoItemDescription>Description:</TodoItemDescription>
										<TodoItemText>{item.description}</TodoItemText>
									</TodoItemView>

									<TodoItemView>
										<TodoItemDescription>Status:</TodoItemDescription>
										<TodoItemText>{item.status ? 'Done' : 'Pending'}</TodoItemText>
									</TodoItemView>

									<TodoItemView>
										<TodoItemDescription>You need to do it at:</TodoItemDescription>
										<TodoItemText>{moment(item.date).format('DD/MM/YYYY')}</TodoItemText>
									</TodoItemView>

									<RemoveTodoButton onClick={() => removeTodo(item.id)}>
										<TextWhite>Remove</TextWhite>
									</RemoveTodoButton>
								</TodoItem>
							))}
						</TodosList>
					</>
				)}
			</TodoDiv>
		</Container>
	)
}
export default App
