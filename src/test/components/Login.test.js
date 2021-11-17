import { render, screen, fireEvent, findAllByTestId, getByLabelText} from '@testing-library/react';
import React from 'react';
import Login from '../../components/Login';
import {MemoryRouter} from 'react-router-dom';

beforeEach(() => render(<Login/>))
describe("login ", () => {
  test('should render', () => {
    expect(render(<MemoryRouter><Login></Login></MemoryRouter>)).toMatchSnapshot();
  });
  test("Form", ()=> {
    const mockLogIn = jest.fn();

    const email = screen.getByLabelText('E-mail:');
    const password = screen.getByLabelText('Contraseña:');
    const btn = screen.getByRole('button',{name:/Iniciar Sesion/i});

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    const emailValue = 'ejemplo@correo.com';
    const passValue = '123456';

    fireEvent.change(email , {target:{value: emailValue}});
    fireEvent.change(password , {target:{value: passValue}});
    fireEvent.click(btn);

    expect(mockLogIn).toHaveBeenCalledWith(emailValue, passValue);
  })
});

/*
describe('Login', () => {
    test('with valid inputs', () => {
        it.todo('calls the onSubmit function', () => {
            const mockOnSubmit = jest.fn();
            const{getByLabelText,getByRole} = render(<Login onSubmit={mockOnSubmit}/>)


            fireEvent.change(getByLabelText('E-mail:'),{target:{value:"email@test.com"}})
        })
    })
})
*/