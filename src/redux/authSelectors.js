const getIsLoggedIn = state => state.auth.isAuth;
const getBalance = state => state.auth.user.balance;
const authSelectors = {
    getIsLoggedIn,
    getBalance,
}
export default authSelectors;