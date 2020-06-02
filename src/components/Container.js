import styled from 'styled-components';

const Container = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	max-width: 1280px;
	margin: auto;
	justify-content: center;
	background-color: #ffffff;
	padding: 30px;
	text-align: center;

	@media (min-width: 768px) {
		text-align: left;
		padding: unset;
	}
`

export default Container;