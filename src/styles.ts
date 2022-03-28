import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex: 1;
	background-color: #dcdcdc;
	width: 100%;
	height: 100vh;
	min-height: 100vh;
	justify-content: center;
`

export const TodoDiv = styled.div`
	margin-top: 20px;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	border-width: 1px;
	border-style: solid;
	border-color: #696969;
	border-radius: 10px;
	margin-left: 30px;
	margin-right: 30px;
	height: 90vh;
	padding: 10px;
	background-color: white;
`

export const Title = styled.span`
	color: black;
	font-family: Arial;
	font-weight: bold;
	font-size: 28px;
	margin-top: 14px;
`

export const Error = styled.span`
	color: #ad0e0e;
	font-family: Arial;
	font-weight: bold;
`

export const TodoForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 20px;
	width: 100vh;
	justify-content: center;
	align-items: center;
	padding: 10px;
`

export const TodoFormInput = styled.input`
	width: 90vh;
	padding: 10px;
	font-size: 16px;
	position: inherit;
	margin-bottom: 15px;
`

export const TodoFormButtonSubmit = styled.button`
	width: 90vh;
	padding: 15px;
	position: inherit;
	margin-top: 15px;
	background-color: #563d7c;
	border: none;
	cursor: pointer;
`

export const TextWhite = styled.span`
	font-size: 16px;
	color: white;
	font-weight: bold;
`

export const TodosList = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 80vh;
	overflow: auto;
	overflow-y: scroll;
	padding: 15px;
`

export const TodoItem = styled.div`
	height: 25vh;
	min-height: 25vh;
	max-height: 25vh;
	margin-top: 10px;
	border-radius: 8px;
	background-color: #dcdcdc;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
`

export const TodoItemView = styled.p`
	flex-direction: row;
	margin: 10px;
`

export const TodoItemDescription = styled.label`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	font-weight: 400;
`

export const TodoItemText = styled.span`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	font-weight: bold;
`

export const RemoveTodoButton = styled.button`
	padding: 15px;
	position: inherit;
	margin-top: 15px;
	background-color: #c93838;
	border: none;
	cursor: pointer;
`
