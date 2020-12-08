import {login, logout} from '../../actions/auth';

test('should gen login action obj', () => {
    const uid = '1234abcd';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should gen logout action obj', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});