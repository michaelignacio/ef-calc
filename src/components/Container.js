import styled from 'styled-components';

const Container = styled.div`
	align-items: center;
	display: flex;
	margin: auto;
	justify-content: center;
	background-color: #ffffff;
	padding: 30px;
	text-align: center;

	@media (min-width: 768px) {
		text-align: left;
		padding: unset;
		height: 100vh;
	}

	@media (min-width: 1200px) {
		max-width: 1280px;
	}
`

export default Container;