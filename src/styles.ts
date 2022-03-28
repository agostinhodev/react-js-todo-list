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
	height: 50vh;
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
`

export const TodoFormButtonSubmitText = styled.span`
	font-size: 16px;
	color: white;
	font-weight: bold;
`
