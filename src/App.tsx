import React, { useEffect, useState } from 'react'
import { Todo } from './models/Todo'

import {
	Container,
	TodoDiv,
	Title,
	Error,
	TodoForm,
	TodoFormInput,
	TodoFormButtonSubmit,
	TodoFormButtonSubmitText,
} from './styles'

const App: React.FC = () => {
	const [todos, setTodos] = useState<Array<Todo>>([] as Array<Todo>)

	//Inputs
	const [description, setDescription] = useState<string>('')
	const [date, setDate] = useState<Date>(new Date())

	const updateDate = (value: string) => {
		setDate(new Date(value))
	}

	const addNewTodo = () => {
		let todo: Todo = {
			id: String(Math.random() * 3),
			description,
			date,
		}

		console.log(todo)
	}

	return (
		<Container>
			<TodoDiv>
				<Title>To Do List</Title>

				<TodoForm>
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
						<TodoFormButtonSubmitText>Add New Todo</TodoFormButtonSubmitText>
					</TodoFormButtonSubmit>
				</TodoForm>

				{todos.length === 0 && <Error>No todos found</Error>}
			</TodoDiv>
		</Container>
	)
}
export default App
